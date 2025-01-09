"use client";
import React, { useRef } from "react";
import Button from "@/app/components/share/Button";
import frame from "@/public/assets/images/bg-dots.png";
import masterbg from "@/public/assets/images/masterbg.png";
import Image from "next/image";
import BenefitOfJoining from "../components/BenefitOfJoining";
import master from "@/public/assets/images/master.png";
import FrequentlyAskQuostion from "../components/FrequentlyAskQuostion";
import ScheduleTable from "../components/ScheduleTable";
import caution from "@/public/assets/images/caution.png";
import Registration from "../registration/page";


const MasterClass = () => {
    const registerRef = useRef<HTMLDivElement | null>(null);

      const scrollToRegister = () => {
        registerRef.current?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <section className="bg-white">
      <section className="relative w-full bg-white  ">
        <div
          className="w-full bg-gray-50 grid grid-cols-1 gap-10 px-4 md:px-16 pt-4 md:pt-16 bg-cover bg-bottom bg-no-repeat md:bg-center"
          style={{ backgroundImage: `url(${frame.src})` }}
        >
          <div className="w-full md:w-[70%] lg:w-[34%] mx-auto flex flex-col gap-8">
            <h1
              className="text-PrimaryBlue text-center text-[34px] pt-8 md:text-[60px]
             font-semibold leading-[40px] md:leading-[60px]"
            >
              Transform Your Career or Build the
              <span className="text-[#5c16cc]"> Next Big Thing!</span>
            </h1>
            <div className="w-full flex justify-center items-center">
              <p className="w-full  text-center text-TextDarkBlue pt-4 pb-4">
                Join an exclusive, hands-on masterclass designed for
                professionals looking to transition into product management or
                build their own scalable products. With only 10 seats per
                cohort, this program provides personalized coaching, tailored
                learning, and continuous mentorship to help you achieve your
                product goals.
              </p>
            </div>
            <div className="w-full flex justify-center items-center pb-10 md:pb-40">
              <Button
                onClick={scrollToRegister}
                variant="tertiary"
                width="360px"
                height="53px"
                className="rounded-[8px]"
              >
                Register now
              </Button>
            </div>
          </div>
        </div>
        {/* Others */}
        {/* Master Overview */}
        <section>
          <Image src={masterbg} alt="masterbg" />
        </section>
      </section>

      {/* Benefit of joining */}
      <div className="">
        <BenefitOfJoining />
      </div>

      {/* Schedule and availability Table */}
      <section className="w-full py-10 md:py-20">
        <div>
          <div
            className="w-full flex flex-col md:flex-row justify-between
           md:items-center px-4 md:px-20 py-10 border"
          >
            <div className="w-full">
              <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-semibold py-6">
                Schedule & Availability
              </h1>
              <p className="text-TextDarkBlue pb-10 md:px-20">
                You can secure a seat in any cohort of your choice
              </p>
            </div>
            <div className="w-full flex justify-start md:justify-end">
              <Button
                variant="tertiary"
                width="350px"
                height="48px"
                className="rounded-md"
              >
                Register now
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-20 px-4 md:px-20">
          <ScheduleTable />

          {/* Caution and Warning */}
          <div className="flex flex-col md:flex-row justify-between md:items-center bg-[#ffe5b3] px-6 py-2 space-y-2 rounded-md mt-10">
            <div className="flex flex-col md:flex-row md:tems-center space-x-2">
              <Image src={caution} alt="caution" width={30} />
              <p className="text-TextDarkBlue md:text-xl font-semibold py-2 md:py-0">
                Seats are limited! Secure your spot on a first-come,
                first-served basis.
              </p>
            </div>
            <div>
              <p className="text-TextDarkBlue">
                Price per seat{" "}
                <span className="text-TextDarkBlue text-xl font-semibold">
                  - NGN500,000
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Products for love */}
      <section
        ref={registerRef}
        className="flex flex-col md:flex-row justify-between"
      >
        {/* Left side */}
        <div
          className="relative w-full md:w-2/5 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${master.src})` }}
        >
          <div className="w-full pt-[4rem]">
            <h1 className="text-white text-3xl md:text-5xl font-bold px-2 md:px-8 py-4">
              Craft products people love and build teams that deliver results.
            </h1>
            <p className="text-white text-2xl font-normal px-8 pt-12">
              Gain hands-on experience in...
            </p>

            {/* Badge */}
            <div className="w-full pt-16 px-2 md:px-8 space-y-12 flex flex-col items-center md:items-start py-6">
              <div
                className="w-60 px-6 py-2 bg-PurpleGray font-bold border
                 border-white rounded-full
             text-TextDarkBlue text-xl "
              >
                Product Stratagy
              </div>
              <div
                className="w-60 px-6 py-2 bg-PurpleGray font-bold border
                 border-white rounded-full
             text-TextDarkBlue text-xl "
              >
                Product discovery
              </div>
              <div
                className="w-60 px-6 py-2 bg-PurpleGray font-bold border
                 border-white rounded-full
             text-TextDarkBlue text-xl "
              >
                Product analytics
              </div>

              <div
                className="w-72 md:w-80 px-6 py-2 bg-PurpleGray font-bold border
                 border-white rounded-full
             text-TextDarkBlue "
              >
                Finding product-market fit
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full bg-white flex-1">
          <div className="w-full  mx-auto pl-6">
            <div className="w-full md:w-[80%] mx-auto">
              <h1
                className="w-full md:w-[60%] text-TextDarkBlue 
              text-2xl md:text-5xl font-bold mt-20 py-8"
              >
                Register now
              </h1>
              <p className="w-full md:w-[80%] text-TextDarkBlue py-4 pr-4">
                Ready to join? Complete the form below to lodge your interest
                and secure your seat.
              </p>
            </div>
          </div>
          <Registration />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-10 px-4 md:px-20">
        <div className="py-8">
          <h1 className="text-TextDarkBlue text-2xl font-bold ">
            Frequently asked questions
          </h1>
        </div>
        <FrequentlyAskQuostion />
      </section>
    </section>
  );
};

export default MasterClass;

