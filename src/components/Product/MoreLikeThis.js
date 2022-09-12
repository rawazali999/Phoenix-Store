import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import Spinner from "../../components/Other/Spinner";
export default function MoreLikeThis(props) {
  const [category] = useState(props.category);
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      // fetch data based on product category
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 526 },
      items: 2,
      // slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 626, min: 0 },
      items: 1,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={1000}
          containerClass="carousel-container bg-inherit w-full sm:w-4/5 mx-auto"
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products &&
            products.map((product) => (
              <div className="mx-6 px-auto" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </Carousel>
      )}
    </>
  );
}
