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
    image: "/work/1.png",
    category: "react js",
    name: "Pagina Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Proyecto Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Applicacion Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Carlos Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Jose Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Marcos Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Maria Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Juan Web",
    description:
      "Ullamco voluptate aute ad consectetur aute elit deserunt laboris. Exercitation exercitation laboris ad laboris aute officia ad ea voluptate nisi dolore ipsum fugiat mollit. ",
    link: "/",
    github: "/",
  },
];

export const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Ultimos Proyectos</h2>
          <p className="subtitle mb-8">
            Ut dolore sint elit mollit cupidatat cillum officia laborum. Dolor
            elit ad Lorem esse incididunt sit consequat. Mollit anim Lorem
            ullamco magna.
          </p>
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
