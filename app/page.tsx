"use client";
import React from "react";
import HomeHero from "./components/HomeHero";
import IgniteYourIdea from "./components/IgnitYourIdea";
import Services from "./components/Services";
import CraftProduct from "./components/CraftProduct";
import WhatOthersSay from "./components/WhatOthersSay";
import LetsWorkTogether from "./components/LetsWorkTogether";
import AccordionItem from "./components/AccordionItem";
import BigThing from "./components/BigThing";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeHero />
      {/* <IgniteYourIdea /> */}
      <Services />
      <CraftProduct />
      <WhatOthersSay />
      <LetsWorkTogether />
      <BigThing />
      <section className="w-full px-4 md:px-16 py-8">
        <div>
          <h1 className="text-TextDarkBlue text-3xl md:text-5xl py-6 font-bold">
            Frequently asked questions
          </h1>
        </div>
        <div className="w-full sm:w-[100%] md:w-[100%] space-y-6 mt-4">
          <AccordionItem
            title="Who is Sachitananda Research Institute?"
            content="Sachitananda Research Institute is a Product Management expert, public speaker,
           and coach with years of experience mentoring over 10,000 individuals 
           globally and consulting with businesses to drive product success"
          />
          <AccordionItem
            title="What services does Sachitananda Research Institute offer?"
            content="Sachitananda Research Institute specializes in product coaching, product consulting,
           public speaking, and hosting masterclasses tailored to professionals
            and businesses seeking excellence in product management and strategy."
          />

        </div>
      </section>
    </div>
  );
};

export default HomePage;
