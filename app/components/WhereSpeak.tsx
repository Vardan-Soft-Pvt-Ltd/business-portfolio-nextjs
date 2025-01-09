import Image from "next/image";
import React from "react";
import profilePic from "@/public/assets/images/profile.png";

const WhereSpeak = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-PrimaryBlue">
      <div className="pt-10">
        <div className="flex gap-6 items-center">
          <Image
            src={profilePic}
            alt="profile-pic"
            width={50}
            className="hidden md:block"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">Where I Speak</h1>
            <p className="text-white text-sm">
              I bring my expertise to a variety of platforms
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="flex justify-center items-center mt-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card  1*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              Conferences
            </h4>
            <p className="text-white py-8">
              From industry gatherings to global summits, I deliver keynote
              speeches that inspire and challenge the status quo.
            </p>
          </div>
          {/* Card  2*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              Career Fairs
            </h4>
            <p className="text-white py-8">
              Guiding attendees on how to navigate career transitions, find
              their passions, and excel in their chosen fields
            </p>
          </div>
          {/* Card  3*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              Skill Acquisition Workshops
            </h4>
            <p className="text-white py-8">
              Equipping audiences with the tools and mindset to master new
              skills and adapt to evolving industries.
            </p>
          </div>
          {/* Card  4*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              Corporate Events
            </h4>
            <p className="text-white py-8">
              Energizing and educating teams with practical insights to elevate
              their performance and drive innovation.
            </p>
          </div>
          {/* Card  5*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              University and Academic Engagements
            </h4>
            <p className="text-white py-8">
              Empowering the next generation of leaders with guidance on
              careers, skills, and innovation.
            </p>
          </div>
          {/* Card  6*/}
          <div className="border border-purple-600 w-[100%] bg-[#502c87] px-10 py-8 rounded-2xl">
            <h4 className="text-white py-4 mt-8 font-bold text-xl">
              Panel Discussions, Webinars and Online Conferences
            </h4>
            <p className="text-white py-8">
              Sharing insights as a panelist or moderator to foster engaging and
              thought-provoking conversations as well as delivering impactful
              virtual sessions tailored for global audiences.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhereSpeak;
