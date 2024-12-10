"use client";

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
  { path: "https://www.linkedin.com/in/carlosdiaz08/", name: <RiLinkedinFill /> },
  { path: "https://github.com/carlosdiazz", name: <RiGithubFill /> },
  { path: "https://www.instagram.com/carlosdiazz08", name: <RiInstagramFill /> },
  { path: "https://wa.me/+18293569000", name: <RiWhatsappFill /> },
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
