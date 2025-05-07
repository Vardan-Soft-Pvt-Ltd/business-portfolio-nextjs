"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  connectSchema,
  ConnectData,
} from "../lib/validate";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import React from "react";
import framebg from "@/public/assets/images/framebg.png";
import AccordionItem from "../components/AccordionItem";
import PopupCard from "../components/PopupCard";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Nepal",
  "India",
];
const purpose = ["Partnership", "Enquiry", "Study"];

const LetGetStarted = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConnectData>({
    resolver: zodResolver(connectSchema),
  });

  const [countryDropdown, setCountryDropdown] = useState(false);
  const [cohortDropdown, setCohortDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [countryError, setCountryError] = useState<string | null>(null);
  const [purposeError, setPurposeError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ConnectData) => {
    if (!selectedCountry) {
      setCountryError("Country is required");
    } else {
      setCountryError(null);
    }

    if (!selectedPurpose) {
      setPurposeError("Purpose is required");
    } else {
      setPurposeError(null);
    }

    if (selectedCountry && selectedPurpose) {
      const formattedData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        country: selectedCountry,
        purpose: selectedPurpose,
        description: data.description,
      };

      console.log("Formatted Data:", formattedData);
      setIsLoading(true);
      try {
        togglePopup();
        // Clear the form fields
        reset();
        setSelectedCountry(null);
        setSelectedPurpose(null);
        // Show the popup after successful submission
      } catch (error) {
        console.error("Error submitting data:", error);
        // Handle error (e.g., show a notification)
      } finally {
        setIsLoading(false);
      }
    }
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
              <h1 className="w-full md:w-[60%] text-TextDarkBlue text-4xl md:text-5xl font-bold mt-20">
                Connect!
              </h1>
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${errors.fullName ? "border-red-500" : "border-gray-300"
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${errors.email ? "border-red-500" : "border-gray-300"
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className={`mt-1 block w-full px-4 py-2 border bg-white ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country of Residence
                  </label>
                  <div
                    className={`mt-1 flex justify-between items-center px-4 py-2 border bg-white ${countryError ? "border-red-500" : "border-gray-300"
                      } rounded-md cursor-pointer`}
                    onClick={() => setCountryDropdown(!countryDropdown)}
                  >
                    <span>{selectedCountry || "Select a country"}</span>
                    <span>
                      <IoChevronDownOutline />
                    </span>
                  </div>
                  {countryDropdown && (
                    <ul className="absolute bg-PrimaryBlue text-white z-20 border border-gray-300 rounded-md mt-1 w-full">
                      {countries.map((country) => (
                        <li
                          key={country}
                          className="px-4 py-2 hover:text-opacity-85 cursor-pointer"
                          onClick={() => {
                            setCountryError("");
                            setSelectedCountry(country);
                            setCountryDropdown(false);
                          }}
                        >
                          {country}
                        </li>
                      ))}
                    </ul>
                  )}
                  {countryError && (
                    <p className="text-red-500 text-sm">{countryError}</p>
                  )}
                </div>

                {/* Cohort */}
                {/* Preferred Cohort */}
                <div className="relative">
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Purpose for reaching out
                  </label>
                  <div
                    className={`mt-1 flex justify-between items-center px-4 py-2 bg-white border ${purposeError ? "border-red-500" : "border-gray-300"
                      } rounded-md cursor-pointer`}
                    onClick={() => setCohortDropdown(!cohortDropdown)}
                  >
                    <span>{selectedPurpose || "Select from the options"}</span>
                    <span>
                      <IoChevronDownOutline />
                    </span>
                  </div>
                  {cohortDropdown && (
                    <ul className="absolute bg-PrimaryBlue text-white border border-gray-300 rounded-md mt-1 w-full">
                      {purpose.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:text-opacity-85 cursor-pointer"
                          onClick={() => {
                            setPurposeError("");
                            setSelectedPurpose(item);
                            setCohortDropdown(false);
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {purposeError && (
                    <p className="text-red-500 text-sm">{purposeError}</p>
                  )}
                </div>

                {/* Goals */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Write a short description about your enquiry:
                  </label>
                  <textarea
                    id="description"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors?.description.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-BtnBg text-white rounded-md hover:bg-opacity-90 transition"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Connect"}
                  </button>
                  <PopupCard isOpen={isPopupOpen} onClose={togglePopup} />
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
      {/* Accordion */}
      <section className="px-4 md:px-16 mt-10">
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-TextDarkBlue">
            Frequently asked questions
          </h1>
        </div>
        <div className="w-full sm:w-[100%] md:w-[100%] space-y-6">
          <AccordionItem
            title="Who is Sachitananda Research Institute?"
            content="Sachitananda Research Institute offers Product Discovery Coaching,
               Product Leadership Coaching, and Career Coaching 
               (1:1 coaching tailored to unique individual needs)."
          />
          <AccordionItem
            title="Who can join us?"
            content="Professionals looking to transition 
              into product management, product leaders seeking to 
              refine their leadership skills, and individuals 
              exploring career growth in product management are all welcome."
          />

        </div>
      </section>
    </main>
  );
};

export default LetGetStarted;
