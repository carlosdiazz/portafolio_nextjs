import { AppRouter } from "./AppRouter";

interface Link {
  path: string;
  name: string;
}

export const linksNavbar: Link[] = [
  { name: "Home", path: AppRouter.home },
  { name: "My projects", path: AppRouter.projects },
  { name: "Contact", path: AppRouter.contact },
];
