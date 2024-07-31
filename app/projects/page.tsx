"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

const projects = [
  {
    id: 1,
    name: "Drowing room for family time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum deleniti alias accusamus mollitia vel unde quidem quo repellendus eligendi nostrum, illum placeat cum esse veritatis commodi dignissimos culpa iure",
    image: "/images/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Modern Kitchen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum deleniti alias accusamus mollitia vel unde quidem quo repellendus eligendi nostrum, illum placeat cum esse veritatis commodi dignissimos culpa iure",
    image: "/images/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Perfect living room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum deleniti alias accusamus mollitia vel unde quidem quo repellendus eligendi nostrum, illum placeat cum esse veritatis commodi dignissimos culpa iure",
    image: "/images/project4.png",
    link: "",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="bg-[url('/images/backgroundproject.jpg')]">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container py-64 text-6xl font-semibold tracking-widest text-white"
        >
          Our Projects
        </motion.h1>
      </div>

      <div className="container grid  lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div
              className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end
            w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0"
            >
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
