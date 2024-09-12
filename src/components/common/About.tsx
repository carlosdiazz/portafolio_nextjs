import React from "react";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { DevImg } from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";

interface InfoDataInterface {
  icon: React.ReactElement;
  text: string;
}

const infoData: InfoDataInterface[] = [
  { icon: <User2 size={28} />, text: "Carlos Diaz" },
  { icon: <PhoneCall size={28} />, text: "+1 829 802 5258" },
  { icon: <MailIcon size={28} />, text: "c.diazadriann@gmail.com" },
  {
    icon: <GraduationCap size={28} />,
    text: "Ingenerio de Ciencias de la Computacion",
  },
  { icon: <HomeIcon size={28} />, text: "La Vega, Rep. Dom." },
];

interface DataExperiencia {
  company: string;
  carrera: string;
  years: string;
}

const qualificationData = [
  {
    title: "Educacion",
    data: [
      {
        company: "Universidad Catolica Del Cibao",
        carrera: "Ingeniero en Sistemas",
        years: "2018 - 2022",
      },
      {
        company: "Platzi",
        carrera: "Backend Developer",
        years: "2021 - 2022",
      },
      {
        company: "Platzi",
        carrera: "FullStack Developer",
        years: "2023 - 2024",
      },
    ],
  },
  {
    title: "Experiencia",
    data: [
      {
        company: "Orkapi Technology",
        carrera: "QA Tester",
        years: "2021 - 2022",
      },
      {
        company: "Scientific Games Panama",
        carrera: "Sofware Developer",
        years: "2023",
      },
      {
        company: "Orkapi Technology",
        carrera: "Backend Developer",
        years: "2022 - Actual",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { name: "Front-end Development" },
      { name: "Back-end Development" },
      { name: "NestJs" },
      { name: "NextJs" },
      { name: "Flutter" },
      { name: "Docker" },
      { name: "Typescript" },
    ],
  },
  {
    title: "Tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

export const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Acerca De
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[182px] xl:w-auto" value="personal">
                  Informacion Personal
                </TabsTrigger>
                <TabsTrigger className="w-[182px] xl:w-auto" value="estudios">
                  Estudios
                </TabsTrigger>
                <TabsTrigger className="w-[182px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/*Personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-4">
                      Inginiero en sistemas con mas de 4 anos de experiencia
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Estamos a la varguandia en la tencologia, loq ue nos
                      permite ofrecerle a nuestro cleintes los mejores proectos
                      del emrcado, utilziando siempre las ultimas tecnologias
                      que es lo que nos caracteriza
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Estudios */}
                <TabsContent value="estudios">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Mis estudios
                    </h3>
                    {/* Experience & education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experencie */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experiencia").title}
                          </h4>
                        </div>
                        {/*List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experiencia").data.map(
                            (item: DataExperiencia, index: number) => {
                              const { company, carrera, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-2">
                                      {carrera}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6" >
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Educacion").title}
                          </h4>
                        </div>
                        {/*List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Educacion").data.map(
                            (item: DataExperiencia, index: number) => {
                              const { company, carrera, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-2">
                                      {carrera}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
