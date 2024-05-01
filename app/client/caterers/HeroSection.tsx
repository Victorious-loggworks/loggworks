import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// import HowItWorks from "./HowItWorks";

export default function HeroSection() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="pt-[8rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-gray-10 text-2xl lg:text-5xl font-semibold leading-8 lg:leading-[48px] capitalize mt-2 lg:mt-6">
            Caterers
          </h1>
          <p className="text-base lg:text-xl text-center mt-4 max-w-2xl text-gray-30">
          Find reliable catering services that create unforgettable moments through exceptional food experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
