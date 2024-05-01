import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// import HowItWorks from "./HowItWorks";

export default function HeroSection() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="py-[8rem]">
        <div className="">
          <h2 className="text-primary-20 text-[12px] lg:text-xl uppercase text-center font-normal lg:font-semibold">
          HOW IT WORKS
          </h2>
          <p className="text-center text-gray-10 text-2xl lg:text-[2.5rem] font-bold leading-8 lg:leading-[48px] capitalize mt-2 lg:mt-6">
          Find reliable home service <br />professionals without the fuss

          </p>
          <p className="text-base lg:text-xl text-center mt-4 text-gray-30">
          Whether you are searching for a plumber or a childcare provider, <br />Loggworks allows you to stay in control of your bookings.
          </p>
        </div>
      </div>
    </div>
  );
}
