import React from "react";
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
import Carousel from "../components/Carousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <div className="bg-white">
      <Layout>
        <p className="inline-block w-full mt-10 text-lg sm:text-3xl  text-center font-bold tracking-wider text-custom1 ">
          Welcome to Phoenix Store
        </p>
        <HeroSection />
        <MainServices />
        <Carousel />
      </Layout>
    </div>
  );
}
