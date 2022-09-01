import React from "react";
import HeroSection from "../components/Home/HeroSection";
import MainServices from "../components/Home/MainServices";
import Carousel from "../components/Home/Carousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo">
      <Layout>
        <div className="flex capitalize items-center justify-center text-3xl font-bold pt-10 text-custom1 dark:text-gray-100">
          <div className="block  text-cyan-800 dark:text-gray-100 -mt-5 mx-2 ">
            {" "}
            ______
          </div>
          welcome to phoenix store
          <div className="block text-cyan-800 dark:text-gray-100 -mt-5 mx-2 ">
            {" "}
            ______
          </div>
        </div>
        <HeroSection />
        <MainServices />
        <Carousel />
      </Layout>
    </div>
  );
}
