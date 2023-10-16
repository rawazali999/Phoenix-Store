import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SearchCard } from "./SearchCard";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState("hidden");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    if (search === "") {
      setResults([]);
      setDisplay("hidden");
    } else {
      const searchResults = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setResults(searchResults);
      setDisplay("block");
    }
  }, [products, search]);
  return (
    <div className="relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        className="block  p-2  w-72 text-sm bg-white dark:bg-inherit  border-2 border-gray-100 focus:border-custom4 focus:outline-none "
        placeholder="Search..."
      />

      <div className={`${display} overflow-y-auto  absolute z-20 w-full h-96 `}>
        {results.map((product) => (
          <SearchCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
