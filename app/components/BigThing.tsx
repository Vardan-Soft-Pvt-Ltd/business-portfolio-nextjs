import React from "react";
import craft from "../../public/assets/images/bg.png";
import Image from "next/image";
import usherseer from "../../public/assets/images/usherseer.png";

const BigThing = () => {
  return (
    <div className="relative flex-col md:flex-row gap-8">
      <div
        className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-bottom bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url(${craft.src})` }}
      >
        {/* Text Content */}
        <div
          className="max-w-[100%] sm:max-w-[60%] md:max-w-[50%] relative h-full
         flex md:items-center md:pl-[8rem] px-4 pt-8"
        >
          <h1
            className="text-white text-[30px] md:text-[50px] 
           leading-[36px] md:leading-[48px] font-bold"
          >
            “Big things happen when bold ideas meet the right guidance.”
          </h1>
        </div>
        <div>
          <Image
            src={usherseer}
            alt="userseer-pic"
            className="absolute w-[400px] md:w-[500px] -bottom-6 right-0 mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default BigThing;
