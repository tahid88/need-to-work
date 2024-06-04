import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chrome extension with Code review with GPT",
  description: "This is Home for GPT review",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <NewsLatterBox /> */}
    </>
  );
}
