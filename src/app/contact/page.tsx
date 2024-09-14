
import { FormCustom } from "@/components";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="">
      <div className="container mx-auto">
        {/* Text & Illustracion */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let Work dasboas</h1>
            <p className="subtitle max-w-[400px]">
              Minim minim pariatur officia dolore et adipisicing excepteur
              cillum incididunt id. Cupidatat aliqua adipisicing sunt laborum ex
              nulla ex amet id eiusmod ipsum.{" "}
            </p>
          </div>
          {/* Ilustracion */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* Info Text & FOrm */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info Text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg">
            {/*Email */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>c.diazadriann@gmail.com</div>
            </div>

            {/*Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>La Vega, Rep. Dom.</div>
            </div>

            {/*Email */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+1 809-573-0000</div>
            </div>
          </div>
          <FormCustom/>
        </div>
      </div>
    </section>
  );
}
