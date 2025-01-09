import React from "react";
import coachimg from "../../public/assets/images/coachimg.jpg";
import Button from "./share/Button";
import Link from "next/link";

const CareerCoaching = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${coachimg.src})` }}
      >
        {/* Text Content */}
        <div className="w-full lg:w-[80%]  relative h-full px-4 md:px-20">
          <h1
            className="w-full lg:w-[50%] text-SecondaryBlue text-[28px]
           md:text-[40px] font-bold py-4 mt-16 leading-[40px] md:leading-[48px]"
          >
            Career Coaching (1:1 Coaching)
          </h1>
          <p className=" text-TextDarkBlue pt-10 pb-4 font-semibold">
            Make your transition into product management smooth, fast, and
            fulfilling.
          </p>
          <p className="w-full md:w-[60%] py-2 text-TextDarkBlue tracking-wider">
            Here’s the thing: Most universities don’t teach product management
            as a career path, so I know how overwhelming it can be to figure it
            out on your own. That’s where I come in. I’ll guide you step by
            step, helping you leverage your background and skills to create a
            unique edge. Whether you’re transitioning from another field or
            looking to stand out in your current role, we’ll make it happen
            together—and faster than you think.
          </p>
          <h5 className=" text-SecondaryBlue font-semibold py-6">
            Who it’s for
          </h5>
          <ul className="text-sm text-TextDarkBlue list-disc list-inside space-y-2 pb-10">
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Professionals transitioning into product management from other
              fields.
            </li>

            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Practicing PMs looking to grow and stand out
            </li>
          </ul>

          <div>
            <h1 className="text-TextDarkBlue text-3xl md:text-4xl font-bold pt-8">
              Let’s make it happen!
            </h1>
            <h5 className="text-PrimaryBlue font-bold py-3">
              Ready to take the leap?{" "}
            </h5>
          </div>
          <div className="w-full flex justify-start pb-32 pt-16">
            <Link href={"/let-connect"}>
              <Button
                variant="tertiary"
                width="300px"
                height="50px"
                className="rounded-md"
              >
                Connect with me!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCoaching;
