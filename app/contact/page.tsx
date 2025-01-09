"use client";
import { Country } from "country-state-city";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import framebg from "@/public/assets/images/framebg.png";
import { registrationSchema, RegistrationData } from "../lib/validate";
import PopupCard from "../components/PopupCard";

const purpose = ["Purpose 1", "Purpose 2", "Purpose 3"];

interface Props {
  heading?: string;
  paragra?: string;
}

const Contact: React.FC<Props> = ({ heading, paragra }) => {
  const countryData = Country.getAllCountries();
  const [countries] = useState(countryData);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationData) => {
    console.log("Form Data:", data);
  };

  return (
    <main>
      <section className="flex border">
        {/* Left side */}
        <div
          className="relative w-[50%] bg-cover bg-top bg-no-repeat  hidden lg:flex"
          style={{ backgroundImage: `url(${framebg.src})` }}
        >
          <div className="w-full relative">
            <h1 className="text-white leading-[30px] font-bold px-8 absolute bottom-12">
              {` “Great coaching isn’t about answers; it’s about asking the right
              questions.”`}
            </h1>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full bg-PurpleGray">
          <div className="w-full  mx-auto pl-6">
            <div className="w-full md:w-[80%] mx-auto border">
              <h1 className="w-full md:max-w-[50%] text-TextDarkBlue text-4xl md:text-6xl font-bold mt-20">
                {heading}
              </h1>
              <p className="w-full md:w-[80%] text-2xl py-6 text-TextDarkBlue">
                {paragra}
              </p>
            </div>
          </div>

          {/* Registration */}
          <section className="w-full md:w-[80%] flex justify-center items-center mx-auto my-auto">
            <div className="w-full mx-auto py-10 px-6 bg-transparent">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Country of Residence */}
                <div className="relative">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Country of Residence
                  </label>
                  <select
                    id="country"
                    className={`mt-1 bg-white text-TextDarkBlue py-3 block w-full px-4 border ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("country")}
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    {countries.map((country) => (
                      <option
                        key={country.isoCode}
                        value={country.name}
                        className="bg-BtnBg text-white"
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-sm">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                {/* Purpose of reaching out */}
                <div className="relative">
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Purpose of reaching out
                  </label>
                  <select
                    id="cohort"
                    className={`mt-1 bg-white text-TextDarkBlue py-3 block w-full px-4 border ${
                      errors.cohort ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("cohort")}
                  >
                    <option value="" disabled>
                      Select from the options
                    </option>
                    {purpose.map((item) => (
                      <option
                        key={item}
                        value={item}
                        className="bg-BtnBg text-white"
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.cohort && (
                    <p className="text-red-500 text-sm">
                      {errors.cohort.message}
                    </p>
                  )}
                </div>

                {/* Goals */}
                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-TextDarkBlue"
                  >
                    Write short description of your enquiry
                  </label>
                  <textarea
                    id="goals"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    {...register("goals")}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={togglePopup}
                    type="submit"
                    className="w-full py-3 bg-BtnBg text-white font-bold rounded-md hover:bg-opacity-90 transition"
                  >
                    Submit
                  </button>
                  <PopupCard isOpen={isPopupOpen} onClose={togglePopup} />
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Contact;
