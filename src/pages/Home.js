import React from "react";
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
import Carousel from "../components/Carousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <MainServices />
        <Carousel/>
      </Layout>
    </>
  );
}
