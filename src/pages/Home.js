import React from "react";
import HeroSection from "../components/Home/HeroSection";
import MainServices from "../components/Home/MainServices";
import Carousel from "../components/Home/Carousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo">
      <Layout>
        <div className="flex capitalize  items-center justify-center text-3xl font-bold mt-10 text-custom1 dark:text-gray-100">
          <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo  px-4">
            welcome to phoenix store
          </div>
        </div>
        <hr className="border-2 rounded-full w-2/5 mx-auto  border-cyan-500 -mt-5 " />
        <HeroSection />
        <MainServices />
        <Carousel />
      </Layout>
    </div>
  );
}
