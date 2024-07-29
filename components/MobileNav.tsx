import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {" "}
            <h2 className="font-bold text-primary text-2xl uppercase">
              Interior Design
            </h2>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl font-semibold"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
