"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const CatalogSwiperSection = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Modern Classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="uppercase pb-6 text-xl font-bold tracking-wider mt-5"
          >
            Luxury decor to create comfort in our home
          </motion.h2>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ducimus excepturi aliquid tempora, aperiam maiores quidem iure totam
            rerum ipsa amet repellat dicta voluptatem veritatis ex in ratione
            modi asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eveniet quam unde ullam deserunt dolor, enim libero sequi,
            esse porro, id sed nihil. Debitis optio ab eaque officiis ex commodi
            exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            ipsum nihil praesentium, eaque qui accusantium illo dolores id
            perferendis, voluptates voluptatem, in sed ea ipsam! Maiores, ut
            laborum! Reiciendis, corporis! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Sunt, ad dolorem fugiat dolore,
            itaque doloremque quod provident dolorum nesciunt, corporis tempora
            animi amet. Quam earum ut adipisci id deleniti eius!
          </p>
        </motion.div>

        <Link href="/gallery" data-cy="home-gallery-link">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallery
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            alt=""
            src="/images/swiper1.jpg"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src="/images/swiper2.jpg"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src="/images/swiper3.jpg"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src="/images/swiper4.jpg"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src="/images/swiper5.jpg"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CatalogSwiperSection;
