import { Button } from "@/components/ui/button";
import Image from "next/image";
import florist from "@/public/assets/Professional-assets/florist.webp";
import carpenter from "@/public/assets/Professional-assets/carpenter.webp";

export default function Banner() {
  return (
    <div className="">
      <div className="container px-5 lg:px-20">
        <div className="grid grid-rows-4 grid-cols-4 gap-5">
          <div className="row-span-2 lg:row-span-4 col-span-4 lg:col-span-2 lg:h-[968px] rounded-[8px] overflow-hidden bg-gray-10 bg-opacity-90 place-content-center px-6 lg:px-20 py-6">
            <div className="">
              <h2 className="capitalize text-xl lg:text-[32px] leading-[30px] lg:leading-[38.4px] font-bold text-white mb-2 lg:mb-4">
                A community of
                <br />
                diverse professionals
              </h2>
              <p className="text-gray-70 text-sm lg:text-xl">
                Create a free profile and dive into a vast pool of service jobs
                without any charges. Pay commission only when job is completed.
              </p>

              <Button className="bg-primary-20 hover:bg-primary-20 font-semibold mt-6 lg:mt-8 lg:py-6 px-5 rounded-md">
                Join as a Pro
              </Button>
            </div>
          </div>
          <div className="row-span-2 col-span-2 bg-gray-200 h-1/2 lg:h-[472px] rounded-[6px] overflow-hidden">
            <Image
              src={florist}
              alt="Flower girl"
              width={563.582}
              height={472}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="row-span-2 col-span-2 bg-gray-200 h-1/2 lg:h-[472px] rounded-[6px] overflow-hidden">
            <Image
              src={carpenter}
              alt="carpenter"
              width={563.582}
              height={472}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
