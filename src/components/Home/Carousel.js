import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function NewCarousel() {
  return (
    <>
      <h1 className="flex items-center justify-center text-3xl font-bold py-4 text-custom1 dark:text-gray-100">
        <div className="block text-cyan-800 dark:text-gray-100  -mt-5 mx-2 "> ______</div>
        Our Products Categories
        <div className="block text-cyan-800 dark:text-gray-100  -mt-5 mx-2 "> ______</div>
      </h1>
      <Carousel
        swipeable={true}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={2000}
        useKeyboardArrows={true}
        stopOnHover={true}
        showArrows={false}
        className=" w-5/6 sm:w-3/5 mx-auto"
      >
        {/* first slide */}
        <div className="grid-cols-3 gap-1 grid">
          <Link
            to={"/men"}
            className="col-span-3 text-lg font-lato text-custom1 dark:text-gray-100 hover:text-custom5 dark:hover:text-gray-400 text-center my-2"
          >
            Men Clothes
          </Link>
          <div className="  my-3 ">
            <img
              className="rounded-t-md"
              src="https://previews.123rf.com/images/koszubarev/koszubarev1706/koszubarev170600022/80129453-summer-collection-men-clothes-set-with-checkered-shirt-jeans-shoes-and-belt-isolated-on-white-backgr.jpg"
              alt="clothes with shoes"
            />
          </div>
          <div className=" col-span-2 row-span-2  ">
            <img
              className="rounded-t-md"
              src="https://www.suitsexpert.com/wp-content/uploads/2020/02/mens-dress-code-types-guide-scaled.jpg"
              alt="two fashion men"
            />
          </div>
          <div className=" row-span-2 ">
            <img
              className="rounded-b-md "
              src="https://www.next.ie/nxtcms/resource/image/4863854/portrait_ratio4x5/560/700/fc5b834b9293bbff79679b87789d33f/4101726CEB88E79341AB19EB827D88A5/mens-occasionwear-1805.jpg"
              alt="white suit and flowery shirt "
            />
          </div>
          <div className="  col-span-2 ">
            <img
              className="rounded-b-md"
              src="https://digitalcontent.api.tesco.com/v2/media/homepage/0edb255d-f22e-40fb-b3ed-93f4a0275c31/2214-FF-Hub-Hero-Mens.jpeg"
              alt="navy two quarters"
            />
          </div>
        </div>
        {/* second slide*/}
        <div className="grid-cols-3 gap-1 grid rounded-md">
          <Link
            to={"/women"}
            className="col-span-3 text-lg font-lato text-custom1 dark:text-gray-100 hover:text-custom5 dark:hover:text-gray-400 text-center my-2"
          >
            Women Clothes
          </Link>

          <div>
            <img
              className=" rounded-t-md "
              src="https://ae01.alicdn.com/kf/H6f20c0ef88de4551b6eac05c195fdc11r/Women-Autumn-Dress-2020-Casual-Long-Sleeve-Long-Boho-Floral-Print-Maxi-Dress-Turtleneck-Bandage-Elegant.jpg_Q90.jpg_.webp"
              alt="flowery dress"
            />
          </div>

          <div className=" row-span-2  col-span-2">
            <img
              className="rounded-t-md "
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/27/11/woman-clothing-happy.jpg?width=1200"
              alt="sunglasses curly black woman"
            />
          </div>

          <div className="  row-span-2">
            <img
              className="rounded-b-md"
              src="https://i.pinimg.com/originals/4f/c9/b7/4fc9b741268f7c6d1ae8d1171f66543a.jpg"
              alt="yellow hair with glasses girl"
            />
          </div>

          <div className=" col-span-2  ">
            <img
              className="rounded-b-md"
              src="https://www.trendybizz.com/wp-content/uploads/2021/11/wardrobe-essentials-every-woman-should-own-920x518-1.jpg"
              alt="3 girls"
            />
          </div>
        </div>
        {/* third slide*/}
        <div className="grid-cols-3 gap-1 grid rounded-md">
          <Link
            to={"/electronics"}
            className="col-span-3 text-lg font-lato text-custom1 dark:text-gray-100 hover:text-custom5 dark:hover:text-gray-400 text-center my-2"
          >
            Electronics
          </Link>

          <div>
            <img
              className=" rounded-t-md "
              src="https://megra.com.my/wp-content/uploads/2020/07/32.jpg"
              alt="tv"
            />
          </div>

          <div className=" row-span-2  col-span-2">
            <img
              className="rounded-t-md "
              src="https://static.independent.co.uk/2022/03/02/15/best%20console.jpg?quality=75&width=1200&auto=webp"
              alt="gaming"
            />
          </div>

          <div className="  row-span-2">
            <img
              className="rounded-b-md"
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F12%2FMadhappy-and-Beats-Collaborate-on-Custom-Studio3-Wireless-Headphones-2.jpg?q=75&w=800&cbr=1&fit=max"
              alt="headphones"
            />
          </div>

          <div className=" col-span-2  ">
            <img
              className="rounded-b-md"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/affordability-facebook-og?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1600376390000"
              alt="apple products"
            />
          </div>
        </div>
      </Carousel>
    </>
  );
}
