import React from "react";
import coachimg from "../../public/assets/images/coachimg.jpg";
import Button from "./share/Button";
import Link from "next/link";

const ProductLeadership = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${coachimg.src})` }}
      >
        {/* Text Content */}
        <div className="w-full lg:w-[80%]  relative h-full px-4 md:px-20">
          <h1
            className="w-full lg:w-[50%] text-SecondaryBlue text-[30px] md:text-[40px]
            leading-[40px] md:leading-[50px] font-bold py-4 mt-16"
          >
            Product Leadership Coaching
          </h1>
          <p className=" text-TextDarkBlue pt-10 pb-4 font-semibold">
            Lead your team with clarity, confidence, and impact.
          </p>
          <p className="py-2 w-full md:w-[60%] text-TextDarkBlue">
            {`Being a product leader isn’t easy. Between managing stakeholders,
            leading teams, and delivering results, it can feel like you’re
            constantly walking a tightrope. I specialize in helping product
            leaders like you master the skills to inspire teams, create
            alignment, and transform chaos into clarity. We’ll focus on building
            leadership skills, crafting product visions, and turning the focus
            from outputs to outcomes.`}
          </p>
          <h5 className=" text-SecondaryBlue font-semibold py-6">
            Who it’s for
          </h5>
          <ul className="text-sm text-TextDarkBlue list-disc list-inside space-y-2 pb-10">
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Heads of Product, CPOs, and senior product leaders managing
              multiple product lines, Senior PMs and cross-functional teams.
            </li>
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Product executives who want to empower their teams and achieve
              game-changing results.
            </li>
            <li className="marker:text-black marker:w-2 marker:h-2 marker:bg-black marker:rounded-full">
              Companies who want to equip their product leaders by a
              transformative adaptive product operating model.
            </li>
          </ul>
          <div>
            <h1 className="text-TextDarkBlue text-3xl md:text-4xl font-bold pt-8">
              Let’s make it happen!
            </h1>
            <h5 className="text-PrimaryBlue font-bold py-3">
              Recommend me to your company or reach out to me directly!
            </h5>
          </div>
          <div className="w-full flex justify-start items-center pb-32 pt-16">
            <Link href={"/let-connect"}>
              <Button
                variant="tertiary"
                width="320px"
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

export default ProductLeadership;
