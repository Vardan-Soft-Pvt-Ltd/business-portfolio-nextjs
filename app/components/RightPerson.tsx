import Image from "next/image";
import React from "react";
import coach from "@/public/assets/images/coach.png";

const RightPerson = () => {
  return (
    <section className="w-full bg-PurpleGray px-4 py-10 md:px-20 relative">
      <div className="w-full lg:w-2/5 py-10">
        <h1 className="text-TextDarkBlue text-3xl md:text-5xl font-medium">
          {`Here’s why I’m the right person for the job`}
        </h1>
      </div>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:flex-row gap-4 pb-[14rem]">
        {/* First card */}
        <div className="w-full md:w-[80%] mt-8">
          <h1 className="text-PrimaryBlue text-2xl md:text-3xl font-semibold py-4">
            World-Class Expertise
          </h1>
          <p className="w-full text-sm md:text-xl text-TextDarkBlue">
            I’ve completed two masterclasses with the Silicon Valley Product
            Group (SVPG) and was selected as one of only 20 candidates across
            Africa for a prestigious Coach-the-Coaches program.
          </p>
        </div>
        {/* Second card */}
        <div className="w-full lg:w-[80%] pb-8 mt-8">
          <h1 className="text-PrimaryBlue text-2xl md:text-3xl font-semibold py-4">
            Proven Impact
          </h1>
          <p className="w-full text-sm md:text-xl text-TextDarkBlue">
            I’ve trained over 10,000 individuals globally and mentored top
            product leaders in shaping products, careers, and organizations.
          </p>
        </div>
        {/* third card */}
        <div className="ww-full md:w-[80%] pb-8 mt-8">
          <h1 className="text-PrimaryBlue text-2xl md:text-3xl font-semibold py-4">
            Tailored Approach
          </h1>
          <p className="w-full text-sm md:text-xl text-TextDarkBlue">
           {` Whether you’re an individual or a team, I won’t just give you
            answers—I’ll help you discover your own, guiding you to unlock your
            unique strengths.`}
          </p>
        </div>
      </section>
      <section className="w-full flex justify-between items-end">
        <h1 className="w-[50%] text-2xl md:text-3xl text-SecondaryBlue">
          {`Let’s take this journey together. You bring your passion, and I’ll
          bring the tools and strategies to make it all happen.`}
        </h1>
        <Image
          src={coach}
          alt="profile-img"
          className="w-[200px] md:w-[400px] absolute bottom-0 right-0"
        />
      </section>
    </section>
  );
};

export default RightPerson;
