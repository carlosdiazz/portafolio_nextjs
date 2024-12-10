import { AppRouter } from "./AppRouter";

interface LinkInterface {
  path: string;
  name: string;
}

export const linksNavbar: LinkInterface[] = [
  { name: "Home", path: AppRouter.home },
  { name: "Proyectos", path: AppRouter.projects },
  { name: "Contacto", path: AppRouter.contact },
];
