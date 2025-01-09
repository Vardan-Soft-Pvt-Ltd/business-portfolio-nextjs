"use client";

import React from "react";
import Button from "@/app/components/share/Button";
import frame from "@/public/assets/images/bg-dots.png";
import RightPerson from "../components/RightPerson";
import CoachingPackages from "../components/CoachingPackages";
import ProductLeadership from "../components/ProductLeadership";
import CareerCoaching from "../components/CareerCoaching";
import DontJustTake from "../components/DontJustTake";
import AccordionItem from "../components/AccordionItem";
import Contact from "../contact/page";
import { useRouter } from "next/navigation";

const Coaching = () => {
  const router = useRouter();

  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };
  return (
    <section className="relative w-full bg-white  ">
      <div
        className="w-full bg-gray-50 grid grid-cols-1 gap-10 px-4 md:px-16 pt-4 md:pt-16 bg-cover bg-bottom bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url(${frame.src})` }}
      >
        <div className="w-full md:w-[50%] mx-auto flex flex-col gap-8">
          <h1 className="text-PrimaryBlue text-center text-[40px] py-8 md:text-[60px] font-semibold leading-[60px]">
            {`‘The answer is already within you - A great coach will only uncover
            it’`}
          </h1>
          <div className="w-full flex justify-center items-center">
            <p className="w-full md:w-[70%] text-center text-TextDarkBlue pt-4 py-4">
              Get yourself a coach who can help you or your team achieve
              incredible results in product management.
            </p>
          </div>

          <div className="w-full flex justify-center items-center pb-40">
            <Button
              onClick={handleNavigateToConnect}
              variant="tertiary"
              width="360px"
              height="50px"
              className="rounded-[8px]"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
      <RightPerson />
      <CoachingPackages />
      <ProductLeadership />
      <CareerCoaching />
      <DontJustTake />
      <Contact
        // heading="Let's Get Started"
        // paragra={`'No matter where you are in your product management journey, I’m here to help you succeed. Whether it’s solving product challenges, becoming a stronger leader, or launching your career, I’m just a message away.'`}
      />

      {/* Form */}
      <section></section>

      <section className="px-4 md:px-16 mt-10">
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-TextDarkBlue">
            Frequently asked questions
          </h1>
        </div>

        <div className="w-full sm:w-[100%] md:w-[100%] space-y-6">
          <AccordionItem
            title="What coaching packages are available?"
            content="Ushaseer offers Product Discovery Coaching, Product Leadership Coaching, and Career Coaching (1:1 coaching tailored to unique individual needs)."
          />

          <AccordionItem
            title="Who can sign up for coaching?"
            content="Professionals looking to transition into product management, product leaders seeking to refine their leadership skills, and individuals exploring career growth in product management are all welcome."
          />
          <AccordionItem
            title="How are coaching sessions structured?"
            content="Sessions are tailored to individual or team needs. They typically involve identifying challenges, co-creating solutions, and actionable strategies, with practical, real-world insights."
          />
          <AccordionItem
            title="Do you offer team or corporate coaching?"
            content="Yes, team coaching is available for companies looking to align their teams around a shared product vision or enhance team performance."
          />
          <AccordionItem
            title={`What makes Ushaseer’s coaching different?`}
            content={`Ushaseer’s approach is rooted in extensive experience, including training from Silicon Valley Product Group (SVPG) and personalized strategies that empower individuals and teams
             to find unique solutions by focusing on outcomes and not outputs.`}
          />
        </div>
      </section>
    </section>
  );
};

export default Coaching;
