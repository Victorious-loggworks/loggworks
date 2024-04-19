import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const imageList = [
  {
    id: 1,
    name: "Catering",
    src: "/assets/dropdown-services/catering.webp",
  },
  {
    id: 2,
    name: "Beauty",
    src: "/assets/dropdown-services/beauty.webp",
  },
  {
    id: 3,
    name: "Cleaning",
    src: "/assets/dropdown-services/cleaning.webp",
  },
  {
    id: 4,
    name: "Entertainment",
    src: "/assets/dropdown-services/entertainment.webp",
  },
  {
    id: 5,
    name: "Appliance Repair",
    src: "/assets/dropdown-services/appliance-repair.webp",
  },
  {
    id: 6,
    name: "Mobile Mechanic",
    src: "/assets/dropdown-services/mobile-mechanic.webp",
  },
  {
    id: 7,
    name: "Personal Assistance",
    src: "/assets/dropdown-services/personal-assistance.webp",
  },
  {
    id: 8,
    name: "Pet Grommers",
    src: "/assets/dropdown-services/pet-groomer.webp",
  },
  {
    id: 1,
    name: "Catering",
    src: "/assets/dropdown-services/catering.webp",
  },
  {
    id: 2,
    name: "Beauty",
    src: "/assets/dropdown-services/beauty.webp",
  },
  {
    id: 3,
    name: "Cleaning",
    src: "/assets/dropdown-services/cleaning.webp",
  },
  {
    id: 4,
    name: "Entertainment",
    src: "/assets/dropdown-services/entertainment.webp",
  },
  {
    id: 5,
    name: "Appliance Repair",
    src: "/assets/dropdown-services/appliance-repair.webp",
  },
  {
    id: 6,
    name: "Mobile Mechanic",
    src: "/assets/dropdown-services/mobile-mechanic.webp",
  },
  {
    id: 7,
    name: "Personal Assistance",
    src: "/assets/dropdown-services/personal-assistance.webp",
  },
  {
    id: 8,
    name: "Pet Grommers",
    src: "/assets/dropdown-services/pet-groomer.webp",
  },
];

export default function Clients() {
  return (
    <div className="absolute top-8 w-full">
      <div className="container">
        <div className="flex rounded-md overflow-hidden">
          {/* left side */}
          <div className="bg-gray-200 w-[32%] py-12 px-6">
            <p className="text-[12px] font-medium text-gray-30">FOR CLIENTS</p>
            <div className="flex flex-col gap-3 mt-6 tracking-wide">
              <Button className="flex justify-between gap-2 py-10 px-6 rounded-md w-full focus:bg-gray-90 hover:bg-gray-90">
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/step.svg"
                      width={24}
                      height={24}
                      alt="paper icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      How it works
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Seamless steps to using Loggworks
                    </p>
                  </div>
                </div>
                <ArrowRight className="text-gray-10 w-4 h-4" />
              </Button>

              <Button className="flex justify-between gap-2 py-10 px-6 rounded-md w-full focus:bg-gray-90 hover:bg-gray-90">
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/step.svg"
                      width={24}
                      height={24}
                      alt="paper icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      How it works
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Seamless steps to using Loggworks
                    </p>
                  </div>
                </div>
                <ArrowRight className="text-gray-10 w-4 h-4" />
              </Button>

              <Button className="flex justify-between gap-2 py-10 px-6 rounded-md w-full focus:bg-gray-90 hover:bg-gray-90">
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/step.svg"
                      width={24}
                      height={24}
                      alt="paper icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      How it works
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Seamless steps to using Loggworks
                    </p>
                  </div>
                </div>
                <ArrowRight className="text-gray-10 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* right side */}
          {/* <div className="bg-gray-90 w-[68%] py-12 pl-12 pr-16 flex justify-between">
          <div>
            <p className="text-[12px] font-medium text-gray-30">
              START HIRING ON LOGGWORKS
            </p>
            <div className="flex flex-col gap-3 mt-6 tracking-wide">
              <Button className="flex gap-2 py-10 px-6 rounded-md w-fit bg-gray-90">
                <div className="flex items-end h-full">
                  <Image
                    src="/assets/dropdown/book.svg"
                    width={24}
                    height={24}
                    alt="paper icon"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base font-bold text-gray-10">
                    Start Hiring on Loggworks
                  </p>
                  <p className="text-[12px] font-medium text-gray-30">
                    Post a job for free or find professionals
                  </p>
                </div>
              </Button>

              <Button className="flex gap-2 py-10 px-6 rounded-md w-fit bg-gray-90">
                <div className="flex items-end h-full">
                  <Image
                    src="/assets/dropdown/tag.svg"
                    width={24}
                    height={24}
                    alt="paper icon"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base font-bold text-gray-10">
                    Start Hiring on Loggworks
                  </p>
                  <p className="text-[12px] font-medium text-gray-30">
                    Post a job for free or find professionals
                  </p>
                </div>
              </Button>
            </div>
          </div>
          <div>
            <div className="w-[351px] h-[314px] bg-slate-200"></div>
          </div>
        </div> */}

          {/* <div className="w-[68%] py-12 pl-12 pr-16 bg-gray-400">
            <div className="flex justify-between items-center  h-[85%] w-full">
              <div>
                <Image
                  src={"/assets/dropdown/search-job.svg"}
                  alt="clients"
                  width={135}
                  height={119}
                  className="h-[119px] w-[135px]"
                />
                <p className="text-center text-[20px] font-bold leading-6">
                  Search or <br /> post a job
                </p>
              </div>

              <Image
                src={"/assets/dropdown/arrow.svg"}
                alt="arrow"
                width={166.715}
                height={39.492}
                className=""
              />

              <div>
                <Image
                  src={"/assets/dropdown/search-job.svg"}
                  alt="clients"
                  width={135}
                  height={119}
                  className="h-[119px] w-[135px]"
                />
                <p className="text-center text-[20px] font-bold leading-6">
                  Search or <br /> post a job
                </p>
              </div>

              <Image
                src={"/assets/dropdown/arrow.svg"}
                alt="arrow"
                width={166.715}
                height={39.492}
                className=""
              />
              <div>
                <Image
                  src={"/assets/dropdown/search-job.svg"}
                  alt="clients"
                  width={135}
                  height={119}
                  className="h-[119px] w-[135px]"
                />
                <p className="text-center text-[20px] font-bold leading-6">
                  Search or <br /> post a job
                </p>
              </div>
            </div>

            <Button className="text-gray-10 font-bold">
              Learn more <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div> */}

          <div className="w-[68%] py-12 pl-12 pr-16 bg-gray-400">
            <div className="grid grid-cols-4 gap-4">
              {imageList.map((image) => (
                <div
                  key={image.id}
                  className="relative flex w-fit rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={168}
                    height={88}
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-[50px]"></div>

                  <p className="text-white text-[12px] absolute bottom-3 font-semibold left-2">
                    {image.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
