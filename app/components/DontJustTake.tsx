import Image from "next/image";
import React from "react";
import profile from "@/public/assets/images/alex.jpg";
import Button from "./share/Button";
import Link from "next/link";

const DontJustTake = () => {
  return (
    <section className="px-4 md:px-20 py-20">
      <div className="w-full md:w-[56%] py-10">
        <h1 className="text-3xl md:text-5xl text-TextDarkBlue font-medium mt-20">
          {`Don’t just take my word for it—hear from those who’ve been there and
          done it with me!`}
        </h1>
      </div>

      <div className="flex justify-center items-center mt-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Card  1*/}
          <div className="border w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl relative">
            <Image
              src={profile}
              alt="profile-img"
              className="w-10 h-10 rounded-full absolute top-[-15px]"
            />
            <p className="text-PrimaryBlue py-4 mt-8">
              {` "Ushaseer is not just a coach; he’s a guide who helps you find
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
              {` "From our first consultation, Ushaseer brought insights that
              changed how we approached our business strategy. Highly
              recommend!"`}
            </p>
            <p className="text-TextDarkBlue font-bold text-2xl py-8">
              — Sarah K., Product Manager
            </p>
          </div>
          {/* Card 3 */}
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
          {/* Card 4 */}
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
      <section className="px-4">
        <h1 className="w-full md:w-[80%] text-3xl md:text-5xl text-TextDarkBlue py-8 mt-20">
          {`Want results like these? Let’s make it happen! Connect with me now!`}
        </h1>
        <div className="w-full flex justify-start py-8">
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
      </section>
    </section>
  );
};

export default DontJustTake;
