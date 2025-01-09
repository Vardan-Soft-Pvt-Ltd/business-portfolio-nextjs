import React from "react";
import coachimg from "../../public/assets/images/coachimg.jpg";
import Button from "./share/Button";
import Link from "next/link";

const CoachingPackages = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${coachimg.src})` }}
      >
        {/* Text Content */}
        <div className="w-full md:w-[60%] relative h-full px-4 md:px-20">
          <h1 className="text-TextDarkBlue text-[30px] md:text-[50px]  leading-[40px] md:leading-[46px] font-bold py-10">
            Coaching packages
          </h1>
          <h2 className="w-[100%] md:w-[40%] text-2xl font-bold text-SecondaryBlue ">
            Product Discovery Coaching
          </h2>
          <p className="text-sm text-TextDarkBlue py-10 font-semibold">
            Fall in love with the problem, and let the solution find its soul.
          </p>
          <p className="py-6 w-full md:w-[90%]  text-TextDarkBlue">
            Do you have a product idea or a team working on something great, but
            you’re not quite sure how to refine it? I’ll help you clarify your
            vision, identify the right strategies, and uncover the hidden
            strengths of your product that you might be overlooking. This is
            about digging deep to understand the problem before rushing to
            solutions—and trust me, that’s where the magic happens.
          </p>
          <h5 className=" text-SecondaryBlue font-semibold py-6">
            Who it’s for
          </h5>
          <ul className="text-sm text-TextDarkBlue list-disc list-inside space-y-2 pb-10">
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Individuals or teams building innovative solutions.
            </li>
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Companies seeking to align their vision with actionable
              strategies.
            </li>
          </ul>
          <div>
            <h1 className="text-TextDarkBlue text-2xl md:text-4xl font-bold pt-8">
              Sound like what you need? Let’s talk.
            </h1>
            <h5 className="text-PrimaryBlue font-bold py-3">
              Connect with me today!
            </h5>
          </div>
          <div className="w-full flex justify-start pb-32 pt-16">
            <Link href={"/let-connect"}>
              <Button
                variant="tertiary"
                width="320px"
                height="53px"
                className="rounded-md py-6 text-xl"
              >
                Start chat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingPackages;
