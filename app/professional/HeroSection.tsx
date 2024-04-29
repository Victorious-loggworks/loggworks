import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import HowItWorks from "./HowItWorks";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="container px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10  items-center py-[8rem]">
          <div className="lg:w-1/2">
            <h1 className="capitalize text-gray-10 opacity-90 text-center lg:text-left font-bold leading-8 lg:leading-[3.6rem] text-2xl lg:text-5xl">
              The better way to <br />
              manage, earn and scale <br />
              up - anytime, anywhere
            </h1>
            <div className="mt-6 mb-8 text-[14px] lg:text-xl">
              <p className=" text-gray-10 leading-9">
                <Check className="text-primary-20 inline w-6 h-6" /> free
                Business Promotion, listing & Tools{" "}
              </p>
              <p className="text-gray-10 leading-9">
                <Check className="text-primary-20 inline w-6 h-6" /> free
                Automated Job Reminder & Management{" "}
              </p>
              <p className="text-gray-10 leading-9">
                <Check className="text-primary-20 inline w-6 h-6" /> Only pay
                commission on completed jobs{" "}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-3">
              <Button className="bg-primary-20 hover:bg-primary-20 font-semibold py-6 px-5 rounded-md">
                Join as a Pro
              </Button>
              <Button className="bg-white hover:bg-transparent text-primary-20 border-primary-20 border-opacity-70 font-semibold border py-6 px-5 rounded-lg">
                See How It Works
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/Professional-assets/hero-image.webp"}
              alt="hero image"
              height={568}
              width={609}
              className="border border-gray-200 rounded-[8px]"
            />
          </div>
        </div>
        <HowItWorks />
      </div>
      <div className="w-[365px] h-[365px] bg-primary-20 absolute -top-[10%] -left-[10%] rounded-full -z-40 blur-[350px]"></div>
      <div className="w-[465px] h-[465px] bg-primary-20 absolute top-[15%] -right-[10%] rounded-full -z-40 blur-[350px]"></div>
    </div>
  );
}
