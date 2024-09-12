import { AlignJustify } from "lucide-react";

import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { Social } from "./Social";
import { Sheet, SheetContent, SheetTrigger } from "../ui";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className=" cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div className=" flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyles="flex flex-col items-center gap-y-6"/>
          </div>
          <Social containerStyles="flex gap-x-4" iconsStyles="text-2xl"/>

        </div>
      </SheetContent>
    </Sheet>
  );
};
