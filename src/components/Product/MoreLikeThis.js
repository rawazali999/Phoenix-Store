import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Layout from "../../Layouts/MainLayout";
import axios from "axios";
import LikeThisCard from "./LikeThisCard";
export default function MoreLikeThis(props) {
  const [category] = useState(props.category);
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
    // fetch data based on product category 
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  if (isLoading) {
    return <Layout>loading....</Layout>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container mx-auto">
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container my-4"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px flex justify-around"
    >
      {products &&
        products.map((product) => (
          <LikeThisCard product={product} key={product.id} />
        ))}
    </Carousel></div>
  );
}
