"use client";
import { AppRouter } from "@/router";
import Link from "next/link";
import {
  //RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  //{ path: AppRouter.home, name: <RiYoutubeFill /> },
  { path: AppRouter.home, name: <RiLinkedinFill /> },
  { path: AppRouter.home, name: <RiGithubFill /> },
  { path: AppRouter.home, name: <RiInstagramFill /> },
  { path: AppRouter.home, name: <RiWhatsappFill /> },
];

interface Props {
  containerStyles?: string;
  iconsStyles?: string;
}

export const Social = ({ containerStyles, iconsStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
