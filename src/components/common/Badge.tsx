"use client";
import CountUp from "react-countup";

interface Props {
  containerStyles?: string;
  icon?: React.ReactElement;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
}


export const BadgeCustom = ({badgeText, containerStyles,endCountNum,endCountText,icon}:Props) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[13px] font-medium text-black">{ badgeText}</div>
      </div>
    </div>
  )
}
