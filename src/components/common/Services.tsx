import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui";

interface ServiceData {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    icon: <GanttChartSquare size={72} strokeOpacity={0.8} />,
    title: "Desarrollo de APIs Backend",
    description:
      "Diseño y creación de APIs robustas y escalables utilizando NestJS, garantizando alto rendimiento y seguridad para tus aplicaciones.",
  },
  {
    icon: <Blocks size={72} strokeOpacity={0.8} />,
    title: "Aplicaciones Web",
    description:
      "Creación de aplicaciones web dinámicas y responsivas con Next.js, asegurando una experiencia de usuario fluida y tecnologías de vanguardia.",
  },
  {
    icon: <Gem size={72} strokeOpacity={0.8} />,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo de aplicaciones móviles personalizadas con Flutter, optimizadas para Android e iOS, con interfaces modernas y funcionales.",
  },
];

export const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Mis Servicios
        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title }</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
