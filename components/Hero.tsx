import React from "react";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
      {/* Left section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <p className="uppercase tracking-widest">Best interior offering</p>
        <h1 className="h1">
          Make your home a <br /> place of art
        </h1>
        <p className="pb-6 xl:pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.
          Odio vero maiores quis ea dolore id, eum qui rerum doloribus ducimus
          ipsum pariatur ab placeat dolorem magnam voluptas voluptatum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolore, accusamus
          eum nihil, nesciunt porro molestiae qui autem iusto totam asperiores
          delectus tempore recusandae in dolores odio deleniti, dolor
          consectetur voluptatibus?
        </p>
        <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2">
          Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* right section */}
      <div className="w-1/2">
        <Image
          src="/images/hall.jpg"
          width={800}
          height={500}
          alt=""
          className="absolute right:20 hidden lg:block xl:h-[440px] xl:w-[700px] lg:h-[344px] lg:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
