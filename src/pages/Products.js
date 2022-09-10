import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layouts/MainLayout";
import Spinner from "../components/Other/Spinner";
import ProductList from "../components/Product/ProductList";
import ReactPaginate from "react-paginate";
import { nextButton } from "../components/Product/PaginateButtons";
import { prevButton } from "../components/Product/PaginateButtons";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    /* calculations for the react paginate */

    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(products.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      <h1 className="text-md sm:text-3xl my-8 mx-10 text-center text-custom1 dark:text-gray-100 font-semibold ">
        Explore best Products...
      </h1>

      <ProductList products={currentItems} />
      <div className="container mx-auto flex justify-center my-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          className="flex"
          previousLabel={prevButton}
          nextLabel={nextButton}
          pageClassName="inline px-4 py-2 mx-1 rounded-md  transition-colors duration-300 transform     text-gray-700  bg-gray-300 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          activeClassName="inline relative items-center px-4 py-2 border text-sm font-medium     bg-gray-600 text-slate-50 dark:bg-gray-600 border-gray-300 "
          renderOnZeroPageCount={null}
        />
      </div>
    </Layout>
  );
}
