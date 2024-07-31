"use client";

import { FC } from "react";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles?: string;
  endCountNum: number;
  endCountText: string;
}

const Badge: FC<BadgeProps> = ({
  containerStyles,
  endCountNum,
  endCountText,
}) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl leading-none font-bold">
          <CountUp end={endCountNum} delay={1} duration={4} /> {endCountText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
