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
    title: "Web Design",
    description:
      "Aliqua esse ex consectetur nisi. Culpa aliqua ad magna id ea laborum non non ad ea commodo. Irure tempor cupidatat ad ex quis sit ea. Commodo anim incididunt fugiat nisi amet amet sint Lorem. Exercitation consectetur ad sunt non cupidatat.",
  },
  {
    icon: <Blocks size={72} strokeOpacity={0.8} />,
    title: "Web Development",
    description:
      "Aliqua esse ex consectetur nisi. Culpa aliqua ad magna id ea laborum non non ad ea commodo. Irure tempor cupidatat ad ex quis sit ea. Commodo anim incididunt fugiat nisi amet amet sint Lorem. Exercitation consectetur ad sunt non cupidatat.",
  },
  {
    icon: <Gem size={72} strokeOpacity={0.8} />,
    title: "App Development",
    description:
      "Aliqua esse ex consectetur nisi. Culpa aliqua ad magna id ea laborum non non ad ea commodo. Irure tempor cupidatat ad ex quis sit ea. Commodo anim incididunt fugiat nisi amet amet sint Lorem. Exercitation consectetur ad sunt non cupidatat.",
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
