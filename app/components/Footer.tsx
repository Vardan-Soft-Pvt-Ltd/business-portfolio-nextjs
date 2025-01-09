"use client";

import React from "react";
import Button from "./share/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/usher-logo.png";

const Footer = () => {
  return (
    <footer
      className="min-h-80 w-full 
    gap-10 bg-[#320972] text-white flex justify-between md:items-center
      px-4 md:px-16 py-8"
    >
      <section className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div className="space-y-8">
          <div className="flex justify-between">
            {/* <Logo /> */}

            <Image src={logo} alt="logo" width={100} />

            <Link href={"/let-connect"}>
              <Button
                variant="outline"
                className="md:hidden px-2 py-1 rounded-full"
              >
                {`Let's connect`}
              </Button>
            </Link>
          </div>
          <div className="p-4">
            {/* <Image src={linkedin} alt="linkedin-logo" width={50} /> */}
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2101_521)">
                <path
                  d="M41.3438 6.125H7.65625C6.81056 6.125 6.125 6.81056 6.125 7.65625V41.3438C6.125 42.1894 6.81056 42.875 7.65625 42.875H41.3438C42.1894 42.875 42.875 42.1894 42.875 41.3438V7.65625C42.875 6.81056 42.1894 6.125 41.3438 6.125Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9688 21.4375V33.6875"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8438 21.4375V33.6875"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9688 26.7969C22.9688 25.3755 23.5334 24.0123 24.5385 23.0072C25.5436 22.0021 26.9067 21.4375 28.3281 21.4375C29.7495 21.4375 31.1127 22.0021 32.1178 23.0072C33.1229 24.0123 33.6875 25.3755 33.6875 26.7969V33.6875"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6406 16.0781C16.6406 15.9659 16.7316 15.875 16.8438 15.875C16.9559 15.875 17.0469 15.9659 17.0469 16.0781C17.0469 16.1903 16.9559 16.2812 16.8438 16.2812C16.7316 16.2812 16.6406 16.1903 16.6406 16.0781Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="5"
                />
              </g>
              <defs>
                <clipPath id="clip0_2101_521">
                  <rect width="49" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div>
          {/* <NavLinks /> */}
          <nav className="w-full">
            <ul className="w-full space-y-2 md:space-y-6 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-0 ">
              {[
                { href: "/coaching", text: "Coaching" },
                { href: "/product-consulting", text: "Product consulting" },
                { href: "/masterclass", text: "Masterclass" },
                { href: "/speaking", text: "Speaking" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <div className="hidden md:grid gap-y-8 h-full">
        <Link href={"/let-connect"}>
          <div>
            <Button
              variant="outline"
              className="px-4 py-2 min-w-max rounded-full"
            >
              {`Let's connect`}
            </Button>
          </div>
        </Link>
        <div>
          <p>
            <Link href="mailto:info@ushaseer.com">
              <span>info@ushaseer.com</span>
            </Link>
          </p>
          <p>
            <Link href="tel:+2349050742802">
              <span>+234 9050 74 2802</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
