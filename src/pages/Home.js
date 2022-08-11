import React from "react";
import HeroSection from "../components/HeroSection";
import HomeCarousel from "../components/HomeCarousel";
import Layout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <HomeCarousel  />
      </Layout>
    </>
  );
}
