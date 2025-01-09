"use client";

import React from "react";
import Button from "@/app/components/share/Button";
import frame from "@/public/assets/images/bg-dots.png";
import Testimonial from "../components/Testimonial";
import AccordionItem from "../components/AccordionItem";
import framebg from "@/public/assets/images/framebg.png";
import profile from "@/public/assets/images/alex.jpg";
import { useRouter } from "next/navigation";

const ProductConsulting = () => {
  const router = useRouter();

  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };
  return (
    <section className="relative w-full bg-white  ">
      {/* <div className="w-full grid grid-cols-1 gap-10 px-4 md:px-16 pt-4 md:pt-16"> */}
      <div
        className="w-full bg-gray-50 grid grid-cols-1 gap-10 px-4 md:px-16 pt-4 md:pt-16 bg-cover bg-bottom bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url(${frame.src})` }}
      >
        <div className="w-full md:w-[60%] mx-auto flex flex-col gap-8">
          <h1
            className="text-PrimaryBlue text-center text-[33px] py-8 md:text-[60px]
           font-semibold leading-[40px] md:leading-[54px]"
          >
            Need Expert Guidance to Transform Your Vision Into Reality?
          </h1>
          <div className="w-full flex justify-center items-center">
            <p className="w-full md:w-[90%] text-center text-TextDarkBlue pt-4 py-4">
              {` Whether you're launching a new product, scaling your business, or
              refining your strategy, I’m here to help you navigate the
              complexities and seize the opportunities. With a proven track
              record of helping businesses align their vision with actionable
              strategies, I offer tailored consulting services that empower you
              to build, grow, and succeed.`}
            </p>
          </div>

          <div className="w-full flex justify-center items-center pb-0 md:pb-20">
            <Button
              onClick={handleNavigateToConnect}
              variant="tertiary"
              width="360px"
              height="53px"
              className="rounded-[8px]"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
      {/* Cards */}
      <section className="px-4 md:px-20 py-">
        <div className="w-full md:w-[56%] py-4">
          <h1 className="text-3xl md:text-5xl text-TextDarkBlue font-bold mt-20">
            What I offer
          </h1>
        </div>

        <div className="flex justify-center items-center mt-4 md:mt-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Card  1*/}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue py-4 mt-8 font-bold text-xl">
                Advisory Services
              </h4>
              <p className="text-TextDarkBlue py-8">
                {`Receive expert insights to tackle your challenges, identify
                opportunities, and make informed decisions that drive success.`}
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue font-bold text-xl py-4 mt-8">
                Feasibility Research and Analysis
              </h4>
              <p className="text-TextDarkBlue py-8">
                Get a deep dive into market viability, risks, and opportunities
                to ensure your ideas are built on a solid foundation.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue font-bold text-xl py-4 mt-8">
                Product Strategy Development
              </h4>
              <p className="text-TextDarkBlue py-8">
                Build a winning strategy that aligns with your vision, engages
                stakeholders, and positions your product for market success.
              </p>
            </div>
            {/* Card 4 */}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue ont-bold text-xl py-4 mt-8">
                Business Consulting
              </h4>
              <p className="text-TextDarkBlue  py-8">
                From scaling existing businesses to launching new ventures, I
                provide end-to-end guidance to streamline processes and achieve
                goals.
              </p>
            </div>
            {/* Card 5 */}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue font-bold text-xl py-4 mt-8">
                Business Plans That Work
              </h4>
              <p className="text-TextDarkBlue py-8">
                {`Need a compelling business plan that aligns with your
                objectives? Let’s create a roadmap that not only tells your
                story but also drives action.`}
              </p>
            </div>
            {/* Card 6 */}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl">
              <h4 className="text-PrimaryBlue ont-bold text-xl py-4 mt-8">
                Perfecting Your Product Pitch
              </h4>
              <p className="text-TextDarkBlue  py-8">
                {` Struggling to communicate your product’s value? I’ll help you
                craft a pitch that captivates investors, stakeholders, or
                customers.`}
              </p>
            </div>
          </div>
        </div>
        <section>
          <h1 className="w-full md:w-[80%] text-5xl text-TextDarkBlue py-8 mt-20">
            {`Want results like these? Let’s make it happen! Connect with me now!`}
          </h1>
          <div className="flex justify-start md:items-center pt-8 pb-32">
            <Button
              onClick={handleNavigateToConnect}
              variant="tertiary"
              width="358px"
              height="50px"
              className="rounded-md text-xl"
            >
              Connect with me!
            </Button>
          </div>
        </section>
      </section>

      {/* Others */}
      <section className="w-full  py-10 px-4 md:px-20 bg-PurpleGray">
        <div>
          <h1 className="text-3xl md:text-5xl text-TextDarkBlue py-8">
            Is this you?
          </h1>
        </div>

        {/* List */}
        <section className="space-y-10 py-10">
          {/* first item */}
          <div className="flex space-x-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="white" />
              <path
                d="M9 14.6L12.9 18.5L20.4 11"
                stroke="#5C16CC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-TextDarkBlue">
              {`You’re starting a new business and need expert guidance.`}
            </p>
          </div>
          {/* second item */}
          <div className="flex space-x-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="white" />
              <path
                d="M9 14.6L12.9 18.5L20.4 11"
                stroke="#5C16CC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-TextDarkBlue">
              {`You’re looking to scale your product or business but don’t know
              the next step.`}
            </p>
          </div>
          {/* third item */}
          <div className="flex space-x-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="white" />
              <path
                d="M9 14.6L12.9 18.5L20.4 11"
                stroke="#5C16CC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-TextDarkBlue">
              You just want to talk to someone who understands your challenges
              and can offer actionable advice.
            </p>
          </div>
          {/* fourth item */}
          <div className="flex space-x-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="white" />
              <path
                d="M9 14.6L12.9 18.5L20.4 11"
                stroke="#5C16CC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-TextDarkBlue">
              {`You’re unsure how to position your product or articulate its
              value.`}
            </p>
          </div>
        </section>
        <div>
          <h1 className="text-TextDarkBlue text-4xl font-bold pt-8 pb-6">
            {`If this sounds like you, let’s connect and discuss how I can help.`}
          </h1>
        </div>
        <div className="flex justify-start md:items-center pt-10 pb-24">
          <Button
            onClick={handleNavigateToConnect}
            variant="tertiary"
            width="358px"
            height="50px"
            className="rounded-md text-xl py-6"
          >
           {` Let's connect`}
          </Button>
        </div>
      </section>

      {/* Testimony */}
      <section className="w-full px-4 md:px-20 py-16 space-y-10">
        <div>
          <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-bold py-10">
            Testimonial
          </h1>
        </div>
        <Testimonial
          testimonial="I came to Ushaseer with just an idea, and today, that idea is a thriving business with real traction. His expertise in feasibility research and strategy development is unmatched!"
          author="Sarah K."
          designation="Startup Founder"
        />

        <Testimonial
          testimonial="We were struggling to scale our product, but Ushaseer’s guidance on product pitches and business strategy was transformative. He’s not just a consultant; he’s a true partner."
          author="David T."
          designation="CEO"
        />

        <Testimonial
          testimonial="Ushaseer helped me create a business plan that wowed our
             investors. His insight and professionalism are invaluable."
          author="Amaka E."
          designation="Entrepreneur"
        />
      </section>

      {/* Let's talk */}
      <section>
        <main>
          <section className="flex flex-col md:flex-row border">
            {/* Left side */}
            <div
              className="relative w-full md:w-[50%] h-screen bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${framebg.src})` }}
            >
              <div className="w-full">
                <h1 className="w-[80%] md:w-ful text-white leading-[30px] font-bold px-8 absolute bottom-[4rem]">
                  {`“Great coaching isn’t about answers; it’s about asking the
                  right questions.”`}
                </h1>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full bg-PurpleGray flex justify-center items-center py-10 ">
              <section className="w-full md:w-[60%] px-4 md:px-10">
                <div className="w-full mx-auto border bg-PurpleGray">
                  <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-bold py-10">
                    {`Let’s talk!`}
                  </h1>
                  <div className="py-10">
                    <p className="text-TextDarkBlue">
                      {`Not sure where to start? Have questions about your
                      business or product? Let’s chat! Sometimes, all you need
                      is a fresh perspective—and I’m here to provide it.`}
                    </p>
                  </div>
                </div>
                <div className=" flex justify-start md:items-center pt-8">
                  <Button
                    onClick={handleNavigateToConnect}
                    variant="tertiary"
                    width="358px"
                    height="50px"
                    className="rounded-md"
                  >
                    Connect with me!
                  </Button>
                </div>
              </section>
            </div>
          </section>
          {/* Accordion */}
          <section className="px-4 md:px-16 mt-10">
            <div className="py-8">
              <h1 className="text-3xl md:text-4xl font-bold text-TextDarkBlue">
                Frequently asked questions
              </h1>
            </div>
            <div className="w-full sm:w-[100%] md:w-[100%] space-y-6">
              <AccordionItem
                title="What consulting services do you offer?"
                content="Ushaseer provides advisory services, feasibility research, 
                product strategy, business consulting, business plans, and product pitches."
              />
              <AccordionItem
                title="How can consulting help my business?"
                content="Consulting sessions are designed to identify pain points, evaluate
                 opportunities, and implement strategies that drive growth, streamline operations,
                  and ensure product-market fit."
              />
              <AccordionItem
                title="Can startups work with you?"
                content="Absolutely! Ushaseer has extensive experience helping startups
                 navigate early-stage challenges, scale operations, and refine their product strategies."
              />
              <AccordionItem
                title="Do you work with established companies?"
                content="Yes, Ushaseer partners with both startups and established 
                organizations to enhance their product and business strategies for sustained success."
              />
              <AccordionItem
                title="How long does a consulting engagement last?"
                content="The duration varies based on the scope and complexity
                 of the project. Some engagements are short-term advisory, while
                  others may involve long-term collaboration."
              />
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default ProductConsulting;
