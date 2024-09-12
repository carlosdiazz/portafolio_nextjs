import { AppRouter } from "@/router";
import { Download, Send } from "lucide-react";
import Link from "next/link";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Button } from "../ui";
import { Social } from "./Social";
import { DevImg } from "./DevImg";
import { BadgeCustom } from "./Badge";

export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              FullStack Developer
            </div>
            <h1 className="h1 mb-4">Hola, mi nombre es Carlos Diaz</h1>
            <p className="subtitle m-w-[490px] mx-auto xl:mx-0">
              Soy Ingeniero en sistema, con más de 4 años de experiencia
              desarrollando soluciones tecnológicas eficientes y escalables.
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={AppRouter.contact}>
                <Button className="gap-x-2">
                  Contacto <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Descargar CV <Download size={18} />
              </Button>
            </div>
            {/*Social */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <BadgeCustom
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              badgeText="Años de experiencia"
            />

            {/* Badge 2 */}
            <BadgeCustom
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={12}
              badgeText="Proyeto finalizado"
            />

            {/* Badge 3 */}
            <BadgeCustom
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={2}
              endCountText="K"
              badgeText="App descargada"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developerr.png"
            />
          </div>

          {/* Icon */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
