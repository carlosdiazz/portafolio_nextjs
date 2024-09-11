import { AppRouter } from "./AppRouter";

interface LinkInterface {
  path: string;
  name: string;
}

export const linksNavbar: LinkInterface[] = [
  { name: "Home", path: AppRouter.home },
  { name: "My projects", path: AppRouter.projects },
  { name: "Contact", path: AppRouter.contact },
];
