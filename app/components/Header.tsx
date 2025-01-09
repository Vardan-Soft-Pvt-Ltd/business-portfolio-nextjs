"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "@/app/components/Logo";
import NavLinks from "../components/NavLinks";
import Button from "./share/Button";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigateToRegistration = () => {
    router.push("/let-connect");
  };

  const routes = [
    "/coaching",
    "/product-consulting",
    "/masterclass",
    "/speaking",
  ];

  return (
    <header
      className={`flex items-center justify-between sticky 
      top-0 left-0 z-50 md:px-16 py-4 ${
        routes.includes(pathname) ? "bg-white" : "bg-[#320972]"
      }  md:px-16`}
    >
      <Logo />
      <div className="hidden md:flex md:items-center md:space-x-6">
        <NavLinks isOpen={true} />
      </div>
      <div className="flex items-center space-x-8 px-3">
        <Button
          onClick={handleNavigateToRegistration}
          variant={routes.includes(pathname) ? "transparent" : "outline"} // Corrected syntax
          className={`px-4 py-2 rounded-full text-sm ${
            routes.includes(pathname)
              ? "text-[#2B3674] border-[#2B3674]"
              : "text-white border-white"
          }`}
        >
          {`Let's connect`}
        </Button>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiX color={routes.includes(pathname) ? "#320972" : "white"} />
          ) : (
            <HiMenuAlt3
              color={routes.includes(pathname) ? "#320972" : "white"}
            />
          )}
        </button>
      </div>
      <div
        className={`absolute w-full top-12 z-10 transition-opacity mt-4
         ${
           menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
         } md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        {menuOpen && <NavLinks isOpen={menuOpen} />}
      </div>
    </header>
  );
};

export default Header;
