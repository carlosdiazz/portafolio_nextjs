"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import { ThemeToggler } from "./ThemeToggler";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Añadir el evento de scroll
    window.addEventListener("scroll", handleScroll);
    //Remove event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/*Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              {/*Mobile nav */}
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
