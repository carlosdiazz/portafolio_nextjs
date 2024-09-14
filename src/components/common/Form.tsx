"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button, Input, Textarea } from "../ui";

export const FormCustom = () => {
  return (
    <form className=" flex flex-col gap-y-4">
      {/*Input Name */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6 " size={20} />
      </div>

      {/*Input Email*/}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6 " size={20} />
      </div>

      {/* Texttarea */}
      <div className="relative flex items-center">
        <Textarea id="text" placeholder="Texto" />
        <MessageSquare className="absolute right-6 top-4 " size={20} />
      </div>
      <Button className="flex items-center gap-x-1  max-w-[166px]">
        Enviar
        <ArrowRightIcon size={20}></ArrowRightIcon>
      </Button>
    </form>
  );
};
