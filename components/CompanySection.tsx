"use client";

import React, { FC } from "react";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

interface CompanySectionBadgeProps {
  title: string;
  endCountNum: number;
  endCountText: string;
}

const CompanySectionBadge: FC<CompanySectionBadgeProps> = ({
  endCountNum,
  endCountText,
  title,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className="mx-auto flex max-w-xs flex-col gap-y-4"
    >
      <dt className="text-white leading-7">{title}</dt>
      <dd className="order-first text-3xl font-semibold  tracking-tight text-white sm:text-5xl">
        <Badge endCountNum={endCountNum} endCountText={endCountText} />
      </dd>
    </motion.div>
  );
};

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <CompanySectionBadge
            endCountNum={44}
            endCountText="million"
            title="Transactions every 24 hours"
          />
          <CompanySectionBadge
            endCountNum={781}
            endCountText="trillions"
            title="Assets under Running"
          />
          <CompanySectionBadge
            endCountNum={45000}
            endCountText="+"
            title="New users  Annually"
          />
        </dl>
      </div>
    </div>
  );
};

export default CompanySection;
