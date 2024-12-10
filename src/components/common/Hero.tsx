import { AppRouter } from "@/router";
import { Download, Send } from "lucide-react";
import Link from "next/link";

import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "../ui";
import { Social } from "./Social";

export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              FullStack Developer
            </div>
            <h1 className="h1 mb-4">Hola, mi nombre es Carlos Diaz</h1>
            <p className="subtitle m-w-[490px] mx-auto xl:mx-0">
            Soy Carlos Diaz, un apasionado Full Stack Developer con más de cinco años de experiencia en la industria. Mi enfoque se centra en el desarrollo ágil y eficiente de aplicaciones, utilizando tecnologías de vanguardia para transformar ideas en código funcional.
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={AppRouter.contact}>
                <Button className="gap-x-2">
                  Contacto <Send size={18} />
                </Button>
              </Link>
              <a
                href="/cv.pdf"
                download="Carlos_Diaz_CV.pdf"
                className="no-underline"
              >
                <Button variant={"secondary"} className="gap-x-2">
                  Descargar CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/*Social */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
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
