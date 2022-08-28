import React from "react";
import HeroSection from "../components/Home/HeroSection";
import MainServices from "../components/Home/MainServices";
import Carousel from "../components/Home/Carousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo">
      <Layout>
        <p className="inline-block w-full mt-10 text-lg sm:text-3xl  text-center font-bold tracking-wider text-custom1 dark:text-gray-100 ">
          Welcome to Phoenix Store
        </p>
        <HeroSection />
        <MainServices />
        <Carousel />
      </Layout>
    </div>
  );
}
