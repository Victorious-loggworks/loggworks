import Image from "next/image";
import { SquareCheck } from "lucide-react";
import { Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageList from "@/app/data/imageList";

export default function BottomBanner() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="relative flex items-center gap-8 justify-between rounded-xl overflow-hidden bg-gray-10 bg-opacity-90 h-[464px]">
        <div className="px-5 lg:pl-20 w-1/2">
          <div className="w-">
            <h2 className="text-2xl lg:text-[32px] leading-[38.4px] font-bold text-white mb-4">
              Find the Best Home Service
              <br />
              Professionals On Loggworks
            </h2>
            <p className="text-gray-70 text-[18px]">
              Post jobs for free on Loggworks and find reliable home service
              professionals in your area. Choose the best options for your
              budgets and timeline.
            </p>

            <Button className="bg-primary-20 hover:bg-primary-20 mt-8 py-6 px-5 rounded-md">
              Post a Job For Free
            </Button>
          </div>
        </div>

        <div className="w-1/2 relative flex h-full gap-12 justify-center overflow-hidden">
          <div className=" absolute left-0 -top-16 h-[688px] flex flex-col gap-5">
            {ImageList.slice(0,3).map((image) => (
              <div key={image.id} className="p-1 w-fit bg-white rounded-sm">
                <div className="w-full">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={123.676}
                    height={152.46}
                    className="object-cover h-[150px]"
                  />
                </div>
                <p className="text-[11.1px] text-center font-semibold mt-1">
                  {image.name}
                </p>
              </div>
            ))}
          </div>

          <div className=" absolute -top-4 left-[9.2rem] h-[688px] flex flex-col gap-5">
            {ImageList.slice(3,6).map((image) => (
              <div key={image.id} className="p-1 w-fit bg-white rounded-sm">
                <div className="w-full">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={123.676}
                    height={152.46}
                    className="object-cover h-[150px]"
                  />
                </div>
                <p className="text-[11.1px] text-center font-semibold mt-1">
                  {image.name}
                </p>
              </div>
            ))}
          </div>

          <div className=" absolute -top-24 right-[11rem] h-[688px] flex flex-col gap-5">
            {ImageList.slice(6,9).map((image) => (
              <div key={image.id} className="p-1 w-fit bg-white rounded-sm">
                <div className="w-full">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={123.676}
                    height={152.46}
                    className="object-cover h-[150px]"
                  />
                </div>
                <p className="text-[11.1px] text-center font-semibold mt-1">
                  {image.name}
                </p>
              </div>
            ))}
          </div>

          <div className=" absolute -top-8 right-[1.8rem] h-[688px] flex flex-col gap-5">
            {ImageList.slice(9,12).map((image) => (
              <div key={image.id} className="p-1 w-fit bg-white rounded-sm">
                <div className="w-full rounded-sm overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={123.676}
                    height={152.46}
                    className="object-cover h-[150px]"
                  />
                </div>
                <p className="text-[11.1px] text-center font-semibold mt-1">
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
