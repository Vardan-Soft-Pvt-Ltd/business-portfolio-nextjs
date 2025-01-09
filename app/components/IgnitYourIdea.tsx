import React from "react";
import Button from "./share/Button";
import { useRouter } from "next/navigation";

const IgniteYourIdea = () => {
  const router = useRouter();

  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="w-full md:w-4/5 py-2 font-medium">
        <h1 className="w-full text-[30px] md:text-[35px] text-PrimaryBlue leading-8 md:leading-[40px]">
          IGNITE YOUR IDEAS, SCALE YOUR PRODUCTS, AND TRANSFORM YOUR CAREER.
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row space-y-8 gap-x-16">
        {/* card */}
        <div className="bg-[#ffff] flex-1 text-TextDarkBlue px-4 md:px-16 py-6 md:py-12 mt-8 shadow-custom-purple rounded-lg ">
          <div className="text-6xl">
            <svg
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.07617 0.746582H12.5054L9.04639 20.5981H0.8125L6.07617 0.746582ZM21.3784 0.746582H27.8452L24.499 20.5981H16.2651L21.3784 0.746582Z"
                fill="#320972"
              />
            </svg>
          </div>
          <p className="my-6">
            {`From startups to established enterprises, career shifters to
            aspiring entrepreneurs, I tailor my services to meet your unique
            goals. Let’s turn your challenges into opportunities and your dreams
            into achievements.`}
          </p>
          <div className="text-6xl flex justify-end">
            <svg
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.07617 0.746582H12.5054L9.04639 20.5981H0.8125L6.07617 0.746582ZM21.3784 0.746582H27.8452L24.499 20.5981H16.2651L21.3784 0.746582Z"
                fill="#320972"
              />
            </svg>
          </div>
        </div>
        <div
          className="flex lg:justify-end justify-start items-center
         md:items-end"
        >
          <Button
            onClick={handleNavigateToConnect}
            variant="tertiary"
            width="378px"
            height="53px"
            className="rounded-[8px] w-[100%]"
          >
            {`Let's connect`}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IgniteYourIdea;
