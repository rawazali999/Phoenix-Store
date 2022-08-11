import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import React from "react";

export default function HomeCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      containerClass="mx-auto w-1/2 h-full rounded-md  my-auto object-cover"
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
    >
      {/* first slide */}
      <Link to={"/men"} className="grid-cols-3 gap-1 grid rounded-md ">
        <p className="col-span-3 text-lg font-lato text-custom1 hover:text-custom6 text-center my-2">
          Men Clothes
        </p>
        <div className=" rounded-md my-3 ">
          <img
            src="https://previews.123rf.com/images/koszubarev/koszubarev1706/koszubarev170600022/80129453-summer-collection-men-clothes-set-with-checkered-shirt-jeans-shoes-and-belt-isolated-on-white-backgr.jpg"
            alt="ima"
          />
        </div>
        <div className=" col-span-2 row-span-2 rounded-md ">
          <img
            src="https://www.suitsexpert.com/wp-content/uploads/2020/02/mens-dress-code-types-guide-scaled.jpg"
            alt="imag"
          />
        </div>
        <div className=" rounded-md row-span-2 ">
          <img
            src="https://www.next.ie/nxtcms/resource/image/4863854/portrait_ratio4x5/560/700/fc5b834b9293bbff79679b87789d33f/4101726CEB88E79341AB19EB827D88A5/mens-occasionwear-1805.jpg"
            alt="imag"
          />
        </div>
        <div className=" rounded-md col-span-2 ">
          <img
            src="https://digitalcontent.api.tesco.com/v2/media/homepage/0edb255d-f22e-40fb-b3ed-93f4a0275c31/2214-FF-Hub-Hero-Mens.jpeg"
            alt="imag"
          />
        </div>
      </Link>
    </Carousel>
  );
}
