import Image from "next/image";
import React from "react";
import profile from "@/public/assets/images/alex.jpg";

const WhatOthersSay = () => {
  return (
    <section className=" py-4 md:py-36 px-4 md:px-20">
      <div>
        <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-bold py-16">
          What Others Are Saying
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card  1*/}
          <div className="border w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl relative">
            <Image
              src={profile}
              alt="profile-img"
              className="w-10 h-10 rounded-full absolute top-[-15px]"
            />
            <p className="text-PrimaryBlue py-4 mt-8">
              {`"Ushaseer is not just a coach; he’s a guide who helps you find
                clarity and confidence. My product journey completely transformed
                under his mentorship."`}
            </p>
            <p className="text-TextDarkBlue font-bold text-2xl py-8">
              — Sarah K., Product Manager
            </p>
          </div>

          {/* Card 2 */}
          <div className="border w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl relative">
            <Image
              src={profile}
              alt="profile-img"
              className="w-10 h-10 rounded-full absolute top-[-15px]"
            />
            <p className="text-PrimaryBlue py-4 mt-8">
              {`"From our first consultation, Ushaseer brought insights that
              changed how we approached our business strategy. Highly
              recommend!"`}
            </p>
            <p className="text-TextDarkBlue font-bold text-2xl py-8">
              — Sarah K., Product Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOthersSay;
