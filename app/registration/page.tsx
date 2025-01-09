"use client";
import { useState } from "react";
import { Country } from "country-state-city";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registrationSchema, RegistrationData } from "../lib/validate";
import PopupCard from "../components/PopupCard";

const cohorts = ["Cohort 1", "Cohort 2", "Cohort 3"];

export default function Registration() {
  let countryData = Country.getAllCountries();
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
    <div className="w-full md:w-4/5 py-10 px-6 mx-auto bg-transparent">
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
            className={`mt-1 bg-[#f8fafc] py-3 block w-full px-4 border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
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
            className={`mt-1 bg-[#f8fafc] py-3 block w-full px-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
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
            className={`mt-1 bg-[#f8fafc] py-3 block w-full px-4 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Country of Residence */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-TextDarkBlue"
          >
            Country of Residence
          </label>
          <select
            id="country"
            className={`mt-1 text-TextDarkBlue py-3 block w-full px-4 border ${
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
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* Preferred Cohort */}
        <div>
          <label
            htmlFor="cohort"
            className="block text-sm font-medium text-TextDarkBlue"
          >
            Preferred Cohort
          </label>
          <select
            id="cohort"
            className={`mt-1 text-TextDarkBlue py-3 block w-full px-4 border ${
              errors.cohort ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            {...register("cohort")}
          >
            <option value="" disabled>
              Select a cohort
            </option>
            {cohorts.map((cohort) => (
              <option
                key={cohort}
                value={cohort}
                className="bg-BtnBg text-white"
              >
                {cohort}
              </option>
            ))}
          </select>
          {errors.cohort && (
            <p className="text-red-500 text-sm">{errors.cohort.message}</p>
          )}
        </div>

        {/* Goals */}
        <div>
          <label
            htmlFor="goals"
            className="block text-sm font-medium text-TextDarkBlue"
          >
            Tell Us About Your Goals (Optional)
          </label>
          <textarea
            id="goals"
            className="mt-1 bg-[#f8fafc] py-3 block w-full px-4 border border-gray-300 rounded-md"
            rows={4}
            {...register("goals")}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-10">
          <div>
            <button
              onClick={togglePopup}
              type="submit"
              className="w-full py-3 bg-BtnBg text-white text-xl font-bold rounded-md hover:bg-opacity-90 transition"
            >
              Register now
            </button>
            <PopupCard
              isOpen={isPopupOpen}
              onClose={togglePopup}
              heading="Thank You for Signing Up!"
              paragra={`Your application has been received! Check
             your email shortly for payment details and next steps to secure your spot.`}
              subheading="Excited to have you on board!"
              fontSize="large"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
