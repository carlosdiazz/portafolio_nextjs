"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "../ui";
import { AppRouter } from "@/router";

import { ProjectCard } from "./ProjectCard";

export interface ProjectDataInterface {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export const projectData: ProjectDataInterface[] = [
  {
    image: "/work/premios_rd.png",
    category: "flutter",
    name: "Premios RD",
    description:
      "Una aplicación móvil disponible en Google Play y Apple Store, con mas de 4,000 descargas, diseñada para consultar los resultados de las loterías en República Dominicana. Ofrece actualizaciones en tiempo real, una interfaz fácil de usar, y notificaciones personalizadas.",
    link: "https://www.premiosrd.com",
    github: "https://www.premiosrd.com",
  },
  {
    image: "/work/panama.png",
    category: "flutter",
    name: "Premios PTY",
    description:
      "Aplicación móvil disponible en Google Play y Apple Store, con mas de 500 descargas, enfocada en el mercado de loterías en Panamá. Permite a los usuarios verificar resultados de sorteos locales al instante y ofrece herramientas para seguir sus números favoritos de manera sencilla.",
    link: "https://www.premiospty.com",
    github: "https://www.premiospty.com",
  },
  {
    image: "/work/lotto_ayiti.png",
    category: "flutter",
    name: "Lotto Ayiti",
    description:
      "Aplicación móvil disponible en Google Play y Apple Store, con mas de 1,000 descargas, Ofrece resultados actualizados en tiempo real de los sorteos nacionales de Haiti, con un diseño intuitivo que permite a los usuarios consultar fácilmente sus números ganadores.",
    link: "https://ayiti.diazcode.com",
    github: "https://ayiti.diazcode.com",
  },
  {
    image: "/work/haiti_bolet.png",
    category: "NestJs",
    name: "Haiti Bolet",
    description:
      "Un proyecto que consistió en la creación de la página web oficial para la lotería de Haití. La plataforma ofrece una experiencia moderna y accesible para los usuarios, mostrando resultados de sorteos en tiempo real, información sobre premios y otras funciones clave.",
    link: "https://haitibolet.net/",
    github: "https://haitibolet.net/",
  },
  {
    image: "/work/lottery_screen.png",
    category: "fullstack",
    name: "Lottery Screen",
    description:
      "Una innovadora aplicación diseñada específicamente para Android TV, que transforma cualquier pantalla en un dinámico centro de información sobre loterías. La aplicación permite mostrar imágenes, videos y resultados de sorteos en tiempo real, ofreciendo una experiencia visual atractiva y profesional. Ideal para locales comerciales o entornos donde se requiera una presentación clara y moderna de la información de loterías.",
    link: "https://dev.diazcode.com/",
    github: "https://dev.diazcode.com/",
  },
];

export const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Ultimos Proyectos</h2>

          <Link href={AppRouter.projects}>
            <Button>Todos los Proyectos</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[650px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView:2
            }
          }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable:true}}
          >
            {/* Mostrare los 4 primeros proyectos */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
