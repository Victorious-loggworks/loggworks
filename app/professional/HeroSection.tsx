import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="container px-10 py-[8rem] flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="capitalize text-gray-10 opacity-90 font-bold leading-[3.6rem] text-5xl">
            The better way to <br />
            manage, earn and scale <br />
            up - anytime, anywhere
          </h1>
          <div className="mt-6 mb-8">
            <p className="text-xl text-gray-10 leading-9">
              <Check className="text-primary-20 inline w-6 h-6" /> free Business
              Promotion, listing & Tools{" "}
            </p>
            <p className="text-xl text-gray-10 leading-9">
              <Check className="text-primary-20 inline w-6 h-6" /> free
              Automated Job Reminder & Management{" "}
            </p>
            <p className="text-xl text-gray-10 leading-9">
              <Check className="text-primary-20 inline w-6 h-6" /> Only pay
              commission on completed jobs{" "}
            </p>
          </div>
          <div className="flex gap-3">
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
      <div className="w-[365px] h-[365px] bg-primary-20 absolute -top-[10%] -left-[10%] rounded-full -z-40 blur-[350px]"></div>
      <div className="w-[465px] h-[465px] bg-primary-20 absolute -bottom-[15%] -right-[10%] rounded-full -z-40 blur-[350px]"></div>
    </div>
  );
}
