"use client";
import { linksNavbar } from "@/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: Props) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {linksNavbar.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
