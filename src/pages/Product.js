import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layouts/MainLayout";
import ProductPage from "../components/Product/ProductPage";
import { useParams } from "react-router-dom";
import MoreLikeThis from "../components/Product/MoreLikeThis";
import Spinner from "../components/Other/Spinner";

export default function Product() {
  let { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto object-fill">
          <ProductPage product={product} />
          <div className=" text-3xl flex justify-center mb-10 text-custom1 dark:text-gray-100">
            You May Also Like
          </div>
          <MoreLikeThis category={product.category} />
        </div>
      )}
    </Layout>
  );
}
