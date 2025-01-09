import React from "react";
import craft from "../../public/assets/images/craft.png";

const CraftProduct = () => {
  return (
    <div>
      <div
        className="relative h-[50vh] w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${craft.src})` }}
      >
        {/* Blue Overlay */}
        {/* <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div> */}
        {/* Text Content */}
        <div className="w-full md:w-[40%] relative h-full flex items-center md:pl-[8rem] px-4">
          <h1 className="text-white text-[30px] md:text-[50px]  leading-[38px] md:leading-[50px] font-bold">
            Craft products people love and build teams that deliver results.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CraftProduct;
