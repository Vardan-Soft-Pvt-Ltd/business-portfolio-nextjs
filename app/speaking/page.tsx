"use client";
import React from "react";
import Button from "@/app/components/share/Button";
import frame from "@/public/assets/images/bg-dots.png";
import Image from "next/image";
import pict from "@/public/assets/images/usherseer.png";
import WhereSpeak from "../components/WhereSpeak";
import framebg from "@/public/assets/images/framebg.png";
import Testimonial from "../components/Testimonial";
import bookMe from "@/public/assets/images/book-me.png";
import { useRouter } from "next/navigation";

const Speaking = () => {
  const router = useRouter();
  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };
  return (
    <section className="relative w-full bg-white overflow-x-hidden">
      <div
        className="w-full bg-gray-50 grid grid-cols-1 gap-10 px-4 md:px-16 pt-4 md:pt-16 bg-cover bg-bottom bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url(${frame.src})` }}
      >
        <div className="w-full md:w-[50%] mx-auto flex flex-col gap-8">
          <h1
            className="text-PrimaryBlue text-center text-[30px] py-4 md:py-8 
          md:text-[60px] font-semibold leading-[30px] md:leading-[60px]"
          >
          {`  Let’s Inspire, Educate, and Transform`}
            <span className="text-SecondaryBlue">Together</span>
          </h1>
          <div className="w-full flex justify-center items-center">
            <p
              className="w-full md:w-[70%] text-center text-TextDarkBlue 
            tracking-tighter pt-0 md:pt-4 py-4"
            >
            {`  With speaking experiences in multiple events, I bring energy,
              insight, and actionable takeaways to every stage I step on.
              Whether it’s a room full of professionals or aspiring individuals
              eager to grow, I tailor my talks to resonate, inspire, and spark
              meaningful change.`}
            </p>
          </div>
          <div className="w-full flex justify-center items-center pb-20 md:pb-40">
            <Button
              onClick={handleNavigateToConnect}
              variant="tertiary"
              width="360px"
              height="53px"
              className="rounded-[8px]"
            >
              Book me
            </Button>
          </div>
        </div>
      </div>

      {/* From conference section */}
      <section className="bg-LightPurple h-full md:h-80 flex justify-between  py-10 items-center px-4 md:px-16 relative">
        <div className="w-[50%]">
          <h1 className="text-SecondaryBlue font-bold text-sm md:text-xl uppercase">
            {`From conferences to workshops, career fairs, and more,
            my speaking Engagements are more than presentations—they’re
             experiences designed to leave a lasting impact.`}
          </h1>
        </div>
        <div className="absolute bottom-0 -right-8">
          <Image
            src={pict}
            alt="pict"
            className="w-[200px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </section>

      {/* Where I speak */}
      <WhereSpeak />

      {/* What I bring to the table */}
      <section className="py-10 px-4 md:px-16 bg-white">
        <div>
          <h1 className="text-TextDarkBlue font-bold text-2xl md:text-4xl pt-8">
            What I Bring to the Stage
          </h1>
        </div>

        {/* Cards */}
        <section className="flex justify-center items-center mt-8 md:mt-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card  1*/}
            <div className="border border-purple-600 w-[100%] bg-PurpleGray px-10 py-8 rounded-2xl">
              <h4 className="text-TextDarkBlue py-4 mt-8 font-bold text-xl">
                Expertise Rooted in Experience
              </h4>
              <p className="text-TextDarkBlue py-8">
                Drawing from my journey as a Product Coach, Consultant, and Head
                of Product at Opex Consulting, I connect real-world lessons with
                actionable insights.
              </p>
            </div>
            {/* Card  2*/}
            <div className="border border-purple-600 w-[100%] bg-PurpleGray px-10 py-8 rounded-2xl">
              <h4 className="text-TextDarkBlue py-4 mt-8 font-bold text-xl">
                Inspiring Keynotes
              </h4>
              <p className="text-TextDarkBlue py-8">
                I craft presentations that inspire audiences to think bigger,
                act bolder, and achieve more—whether as individuals or
                organizations.
              </p>
            </div>
            {/* Card  3*/}
            <div className="border border-purple-600 w-[100%] bg-PurpleGray px-10 py-8 rounded-2xl">
              <h4 className="text-TextDarkBlue py-4 mt-8 font-bold text-xl">
                Tailored Talks
              </h4>
              <p className="text-TextDarkBlue py-8">
               {` Each talk is uniquely designed to fit the event’s theme and
                audience needs, ensuring every listener leaves with value.`}
              </p>
            </div>
            {/* Card  4*/}
            <div className="border border-purple-600 w-[100%] bg-PurpleGray px-10 py-8 rounded-2xl">
              <h4 className="text-TextDarkBlue py-4 mt-8 font-bold text-xl">
                Action-Oriented Approach
              </h4>
              <p className="text-TextDarkBlue py-8">
              {`  It’s not just about the “why” but the “how.” I ensure every
                session leaves attendees with practical steps they can implement
                immediately.`}
              </p>
            </div>
          </div>
        </section>
      </section>
      <div className="w-full flex justify-start md:justify-end items-start md:items-end px-4 md:px-16  py-14">
        <Button
          variant="tertiary"
          width="350px"
          height="50px"
          className="rounded-md"
        >
          Book me for a talk
        </Button>
      </div>

      {/* Let's talk */}
      <section>
        {/* <main> */}
        <section className="flex flex-col md:flex-row border">
          {/* Left side */}
          <div
            className="relative w-full md:w-[50%] h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${framebg.src})` }}
          >
            <div className="w-full">
              <h1 className="w-full text-white leading-[30px] font-bold px-8 absolute bottom-[4rem]">
              {`  “A great speech doesn’t just inspire—it transforms.” “Words have
                the power to create movements; let’s start one together.”`}
              </h1>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full bg-LightPurple flex justify-center items-center py-10 ">
            <section className="w-full md:w-[60%] px-10">
              <div className="w-full mx-auto bg-LightPurple">
                <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-bold py-10">
             {`     Let’s work together`}
                </h1>
                <div className="pb-10">
                  <p className="text-TextDarkBlue">
                    Are you planning a conference, workshop, or event? Need a
                    speaker who can educate, inspire, and leave a lasting impact
                    on your audience?
                  </p>
                </div>
              </div>
              <div>
                <button className="text-sm bg-PurpleGray px-6 py-1 font-bold text-TextDarkBlue rounded-full">
               {`   Let’s make it memorable`}
                </button>
              </div>
            </section>
          </div>
        </section>

        {/* <Testimonial /> */}
        <section className="w-full px-4 md:px-20 py-16 space-y-10 bg-[#eae6f0]">
          <div>
            <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-bold py-10">
              Testimonial
            </h1>
          </div>
          <Testimonial
            testimonial={`Ushaseer’s keynote at our conference was a game-changer.
               He connected with our audience effortlessly and left them motivated to take action."
            author="David T.`}
              author="Faruk K.,"
            designation="CEO"
          />
          <Testimonial
            testimonial={`We’ve had speakers before, but Ushaseer brought
               a unique mix of expertise, energy, and relatability that stood
                out. Our attendees loved every moment!`}
            author="Fatima S.,"
            designation="Workshop Coordinator."
          />
          <Testimonial
            testimonial="Hearing Ushaseer speak is like getting a personal
               guide to success. His storytelling and actionable insights are unmatched."
            author="Michael O."
            designation="Conference Attendee."
          />
        </section>
        {/* </main> */}
      </section>

      {/* Ready to book me */}
      <section
        className="bg-white h-full md:h-full flex flex-col
        lg:flex-row py-0 px-4sm:px-[4rem] md:px-[8rem] md:mt-[2rem] mx-auto "
      >
        <div className="w-full lg:w-[50%] py-8 px-4 md:px-0">
          <h1
            className="w-full lg:w-[50%] text-TextDarkBlue font-bold text-3xl 
          md:text-3xl lg:text-6xl py-8"
          >
            Ready to Book Me?
          </h1>
          <div>
            <p className="text-TextDarkBlue">
              Let’s create an unforgettable experience for your audience.
              Whether it’s a large-scale conference or an intimate workshop, I’m
              here to bring your event to life.
            </p>
          </div>
          <div className="w-full flex justify-start pt-12">
            <Button
              variant="tertiary"
              width="350px"
              height="50px"
              className="rounded-md"
            >
              Book me to speak
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={bookMe}
            alt="book-me-img"
            className="w-[250px] md:w-[500px] lg:w-[550px]"
          />
        </div>
      </section>
    </section>
  );
};

export default Speaking;
