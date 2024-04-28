import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SquareCheck } from "lucide-react";
import { Square } from "lucide-react";

const imageList = [
  {
    id: 1,
    name: "Event Planner",
    src: "/assets/bottom-banner/image-1.webp",
  },
  {
    id: 2,
    name: "Florist",
    src: "/assets/bottom-banner/image-2.webp",
  },
  {
    id: 3,
    name: "Caterer",
    src: "/assets/bottom-banner/image-3.webp",
  },
  {
    id: 4,
    name: "Chauffeur",
    src: "/assets/bottom-banner/image-4.webp",
  },
  {
    id: 5,
    name: "DJ Hire",
    src: "/assets/bottom-banner/image-5.webp",
  },
];

export default function BottomBanner() {
  return (
    <div className="px-5 lg:px-20 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl pt-8 lg:pt-16 flex flex-col items-center bg-gray-10 bg-opacity-90 overflow-hidden">
          <h4 className="text-white text-center text-xl lg:text-3xl font-bold mb-5">
            Find the Best Jobs <br />
            In Your Field
          </h4>
          <Button variant="default" className="bg-primary-20 w-fit mb-9 py-6 px-5">
            Join as a Pro
          </Button>

          <div className="w-[688px] flex gap-5 pb-8">
            {imageList.map((image) => (
              <div key={image.id} className="p-2 bg-white rounded-sm">
                <div className="w-full">
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={123.676}
                    height={152.46}
                    className="object-cover h-[123.676px] w-[152.46px]"
                  />
                </div>
                <p className="text-[11.1px] text-center font-semibold mt-1">
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl pt-16 bg-gray-10 bg-opacity-90 overflow-hidden hidden lg:flex items-center flex-col">
          <div className="h-1/2 flex flex-col items-center">
            <h4 className="text-white text-center text-3xl font-bold mb-5">
              Find the Best Home <br />
              Service Professionals
            </h4>
            <Button variant="default" className="bg-primary-20 w-fit mb-9 py-6 px-5">
              Post a Job For Free
            </Button>
          </div>

          <div className="flex justify-between w-full">
            <div className="">
              <p className="bg-white bg-opacity-95 ml-2 p-2 mt-3 rounded-md w-fit h-fit flex items-center text-sm font-medium">
                <Square className="inline-block mr-2 text-primary-20" /> Get a
                caterer for bestie's party
              </p>
            </div>

            <div className="">
              <p className="bg-white bg-opacity-95 mr-3 p-2 rounded-md w-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" />
                Get a Find a groomer for my cat
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <p className="bg-white bg-opacity-95 mr-3 p-2 rounded-md w-fit flex items-center text-sm font-medium">
              <SquareCheck className="inline-block mr-2 text-primary-20" />
              Clean my apartment
            </p>
          </div>

          <div className="flex justify-between items-center w-[110%]">
            <div className="ml-3">
              <p className="bg-white bg-opacity-95 mt-2 ml-2 p-2 rounded-md w-fit h-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" /> Hire a moving truck
              </p>
            </div>

            <div className="">
              <p className="bg-white bg-opacity-95 mt-2 mr-3 p-2 rounded-md w-fit flex items-center text-sm font-medium">
                <Square className="inline-block mr-2 text-primary-20" />
                Finish my grocery shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
