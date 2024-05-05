import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

function ReceiveTransmissionSection() {
  return (
    <section className="flex flex-col items-center">
      <p className="text-[2rem] md:text-[50px] font-bold">
        Receive transmissions
      </p>
      <div className="text-subtitle flex mb-6">
        Unsubscribe at any time.{" "}
        <span className="text-white px-1">Privacy Policy</span>{" "}
        <ArrowRight className="rotate-[-45deg]" color="#fff" />
      </div>
      <div className="relative md:w-[304px]">
        <Input
          type="email"
          placeholder="Email Address"
          className="h-[45px] bg-[#0B0B0F]"
          gradientClassName="h-[50px]"
        />

        <ArrowRight
          className="absolute top-3 right-3 z-20"
          size="20"
          color="#565976"
        />
      </div>
    </section>
  );
}

export default ReceiveTransmissionSection;
