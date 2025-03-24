
import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
