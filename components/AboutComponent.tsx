"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            alt=""
            src="/images/aboutfront.png"
            width={900}
            height={500}
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            We are awards winning company
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            World award
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam
            inventore mollitia et facere quam molestias illum doloremque optio
            earum quia exercitationem eius eligendi, ducimus ut voluptates,
            praesentium, facilis nihil.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            voluptatum ex placeat tempore? Velit beatae repudiandae ipsam culpa
            omnis eum incidunt, est vero. Nulla maxime ullam perferendis tempore
            nemo?
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
