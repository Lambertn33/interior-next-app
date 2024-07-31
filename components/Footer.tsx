"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);
  return (
    <div className="bg-[#ffe6e6] dark:bg-secondary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-center lg:text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                About us
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Careers
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Contact us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">Development</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">Connect</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Github
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Linkedin
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Twitter
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <p className="pb-4 text-xl font-semibold">Stay updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="text" id="first-name" placeholder="email address" />
            <button
              className="absolute bg-black dark:bg-white text-white dark:text-black rounded-full h-10 px-3 text-sm top-1 right-2
            hover:border-black dark:hover:border-white hover:border hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
            >
              Subscribe
            </button>
          </div>
          <p className="pt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            tempora dignissimos temporibus dolorum dolor cum explicabo vero
            optio assumenda culpa similique et in, amet natus facilis inventore
            harum sint sit!
          </p>
        </motion.div>
      </div>

      {/* copyright */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:justify-between lg:flex">
          <div>
            <p>&copy; {year} Interior. All right reserved</p>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              Privacy
            </Link>
            <Link href="/" className="p-4 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
