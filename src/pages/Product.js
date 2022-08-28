import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layouts/MainLayout";
import ProductPage from "../components/Product/ProductPage";
import { useParams } from "react-router-dom";

export default function Product() {
  let { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log("list of products:", response.data);
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (isLoading) {
    return <Layout>loading....</Layout>;
  }
  return (
    <Layout>
      <div className="container  mx-auto object-fill">
        <ProductPage product={product} />;
      </div>
    </Layout>
  );
}
