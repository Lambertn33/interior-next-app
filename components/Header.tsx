"use client";

import ThemeToggler from "./theme/ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${
        header
          ? "py-4 bg-[#ffe6e6] shadow-lg dark:bg-[#0f1f3d]"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all`}
    >
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <h2 className="font-bold text-primary text-2xl uppercase">
            Interior Design
          </h2>

          {/* Theme toggler */}
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* Mobile Nav */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
