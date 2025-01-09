import React from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  profileImg: StaticImageData;
  testimonial: string;
  author: string;
  designation: string;
}

const Testimonial: React.FC<TestimonialCardProps> = ({
  profileImg,
  testimonial,
  author,
  designation,
}) => {
  return (
    <div className="border w-[100%] bg-[#f7f3ff] px-10 py-8 rounded-2xl relative">
      {/* <Image
        src={profileImg}
        alt="profile-img"
        className="w-10 h-10 rounded-full absolute top-[-15px]"
      /> */}
      <p className="text-PrimaryBlue py-4 mt-8">{testimonial}</p>
      <div className="py-8">
        <p className="text-TextDarkBlue font-bold text-2xl">{`— ${author}`}</p>
        <p className="text-TextDarkBlue text-sm">{designation}</p>
      </div>
    </div>
  );
};

export default Testimonial;
