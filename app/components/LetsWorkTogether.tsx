import React from "react";
import Button from "./share/Button";
import { useRouter } from "next/navigation";

const LetsWorkTogether = () => {
  const router = useRouter();

  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };

  return (
    <section className="w-full pb-[4rem] px-4 md:px-16">
      <div className="w-full md:w-3/5">
        <h1 className="pt-10 pb-4 w-full md:w-3/5 text-4xl md:text-5xl font-bold text-TextDarkBlue">{`Let’s work together`}</h1>
        <p className="pb-6 w-full md:w-3/5 text-TextDarkBlue">
          {`Whether you’re here to explore, Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        </p>
        <div className="md:w-[50%] mt-8 flex justify-center sm:justify-start">
          <Button
            onClick={handleNavigateToConnect}
            variant="tertiary"
            width="100%"
            height="100%"
            className="rounded-md py-3"
          >
            {`Let's connect`}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LetsWorkTogether;
