"use client";

import Bubbles from "@/components/Bubbles";
import Hero from "@/components/Hero";
import AOS from "aos";

import { useEffect } from "react";
import Icons from "@/components/Icons";
import About from "@/components/About";
import Whyus from "@/components/WhyUs";
import Services from "@/components/Services";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Bubbles />
      <Hero />
      <Icons />
      <About />
      <Whyus />
      <Services />
    </div>
  );
}
