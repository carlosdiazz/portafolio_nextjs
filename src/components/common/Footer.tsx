import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/*Socials */}
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] hover:text-white transition-all"
          />

          {/* Copy */}
          <div className="text-muted-foreground">
            {" "}
            Copyright &copy; Carlos Diaz. All rigths reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
