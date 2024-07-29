"use client";

import ThemeToggler from "./theme/ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <h2>Logo</h2>

          {/* Theme toggler */}
          <div className="flex items-center gap-x-6">
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />
            <ThemeToggler />

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
