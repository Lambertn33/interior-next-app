"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC, useRef } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

interface TeamProps {
  image: string;
  title: string;
  subtitle: string;
}

const TeamMembers: TeamProps[] = [
  {
    image: "/images/profile2.jpg",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatibus fugiat nobis quis error rerum asperiores quidem quibusdam minima. Numquam optio nihil labore et eius hic exercitationem natus voluptatibus maiores?",
    title: " Building Surveys",
  },
  {
    image: "/images/profile3.jpg",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatibus fugiat nobis quis error rerum asperiores quidem quibusdam minima. Numquam optio nihil labore et eius hic exercitationem natus voluptatibus maiores?",
    title: " Building Surveys",
  },
  {
    image: "/images/profile1.jpg",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatibus fugiat nobis quis error rerum asperiores quidem quibusdam minima. Numquam optio nihil labore et eius hic exercitationem natus voluptatibus maiores?",
    title: " Building Surveys",
  },
];

const TeamCard: FC<TeamProps> = ({ image, subtitle, title }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={desVariants}
      className="border-2 border-primary"
    >
      <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-secondary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
        <Image
          className="mx-auto rounded-full"
          src={image}
          width={200}
          alt=""
          height={200}
        />
        <h2 className="py-4 text-2xl font-semibold uppercase">{title}</h2>
        <p className="text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-[url('/images/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl text-black font-semibold text-bold tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great Interior design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-xl text-center font-medium pb-10 mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            saepe eos dolor aut molestias assumenda eaque natus laborum sunt
            ratione laboriosam, ab cum debitis praesentium ullam suscipit culpa
            error explicabo.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          <motion.div ref={ref} style={{ scale }} className="w-full">
            <Image
              src="/images/gallery1123.jpg"
              width={700}
              height={700}
              alt=""
            />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              laboriosam distinctio ea voluptas nemo ipsa, quis impedit odio
              officia harum tempore nisi officiis incidunt placeat, provident
              nostrum unde fugit atque. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Est sit enim maxime aspernatur consectetur
              minima ad asperiores rem odit, id debitis alias quidem
              voluptatibus. Saepe expedita itaque ullam asperiores at.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis
              facere voluptatum aliquid ullam cumque minus, repellat vitae
              doloribus. Rem, dignissimos aut mollitia omnis et id magni libero
              illo tempore! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ratione non exercitationem molestiae libero necessitatibus
              similique quo fuga distinctio assumenda aut praesentium quaerat
              magni qui quam aliquam, vel repellendus nulla esse. <br />
              <br />
            </p>
            <Button className="rounded-full inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-900 ring-offset-2">
              Read more
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Team */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              Meet the Team
            </motion.h1>
          </div>

          <div className="grid py-8 gap-x-20 lg:grid-cols-3">
            {TeamMembers.map((member, key) => (
              <TeamCard
                key={key}
                image={member.image}
                title={member.title}
                subtitle={member.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
