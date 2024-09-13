import Link from "next/link";
import { Button } from "../ui";
import { AppRouter } from "@/router";

export const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Ex culpa sint adipisicing ex esse amet. Ipsum do do aute sunt enim.{" "}
          </h2>
          <Link href={AppRouter.contact}>
            <Button>Contacto</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
