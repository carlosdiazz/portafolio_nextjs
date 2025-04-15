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
    name: "Premios RD Loterias Dominicanas",
    description:
      "Una aplicación móvil disponible en Google Play y Apple Store, con mas de 5,000 descargas, diseñada para consultar los resultados de las loterías en República Dominicana. Ofrece actualizaciones en tiempo real, una interfaz fácil de usar, y notificaciones personalizadas.",
    link: "https://www.premiosrd.com",
    github: "https://www.premiosrd.com",
  },
  {
    image: "/work/panama.png",
    category: "flutter",
    name: "Lotto latina Resultados Latinos",
    description:
      "Aplicación móvil disponible en Google Play y Apple Store, con mas de 1000 descargas, Lotto Latina: Resultados de Todas las Loterías de América Latina en un solo Lugar, contamos con más de 100 loterías oficiales de toda América Latina, Centroamérica, el Caribe, y también de Estados Unidos.",
    link: "https://www.premiospty.com",
    github: "https://www.premiospty.com",
  },
  {
    image: "/work/lotto_ayiti.png",
    category: "flutter",
    name: "Lotto Ayiti Loterias Haiti",
    description:
      "Aplicación móvil disponible en Google Play y Apple Store, con mas de 5,000 descargas, Ofrece resultados actualizados en tiempo real de los sorteos nacionales de Haiti, con un diseño intuitivo que permite a los usuarios consultar fácilmente sus números ganadores.",
    link: "https://ayiti.diazcode.com",
    github: "https://ayiti.diazcode.com",
  },
  {
    image: "/work/haiti_bolet.png",
    category: "NestJs",
    name: "Haiti Bolet",
    description:
      "Implementé un API robusto y eficiente para gestionar y actualizar la premiación de la plataforma. Este API se encarga de recibir los resultados de los sorteos, actualizando la información en tiempo real para que los usuarios puedan consultar los datos sin demora. La integración de este servicio con la página web se realizó de manera fluida, lo que garantiza que los usuarios siempre tengan acceso a los resultados más recientes.",
    link: "https://haitibolet.net/",
    github: "https://haitibolet.net/",
  },
  {
    image: "/work/dizlote.png",
    category: "NestJs",
    name: "DizLotte",
    description:
      "DizzLote es una plataforma integral diseñada para la creación, gestión y automatización de loterías, juegos y sorteos. Esta plataforma no solo permite a los administradores crear y configurar sorteos de manera sencilla, sino que también incluye una potente funcionalidad de web scraping para obtener resultados en tiempo real de diversas fuentes externas. Este sistema de scraping asegura que la plataforma siempre esté actualizada con los resultados más recientes, lo que permite a los usuarios acceder a la información de forma rápida y precisa.",
    link: "https://dev.diazcode.com/",
    github: "https://dev.diazcode.com/",
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
