"use client";

import { ProjectCard, projectData, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { useState } from "react";

export default function ProjectPage() {
  const uniqueCategories: string[] = [
    "all",
    ...new Set(projectData.map((item) => item.category)),
  ];

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all");

  const filteredProjects = projectData.filter(project => {
    //if category is all return all
    return category === "all" ? project : project.category === category
  });

  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Proejcts
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize 2-[162px] md:w-auto"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
