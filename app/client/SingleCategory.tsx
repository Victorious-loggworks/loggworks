import { Button } from "@/components/ui/button";
import Image from "next/image";
import Spacer from "../components/Home/Spacer";

const imageList = [
  {
    id: 1,
    name: "Electrician",
    src: "/assets/services/electrician.png",
  },
  {
    id: 2,
    name: "Carpenters",
    src: "/assets/services/carpenters.png",
  },
  {
    id: 3,
    name: "Gardeners",
    src: "/assets/services/gardener.png",
  },
  {
    id: 4,
    name: "Painter",
    src: "/assets/services/painter.png",
  },
  {
    id: 5,
    name: "Removal",
    src: "/assets/services/removal.webp",
  },

  {
    id: 6,
    name: "Domestic Removals",
    src: "/assets/services/domestic-removal.webp",
  },

  {
    id: 7,
    name: "Commercial Removals",
    src: "/assets/services/commercial-removal.webp",
  },
  {
    id: 8,
    name: "Local Removals",
    src: "/assets/services/local-removal.webp",
  },
];

export default function SingleCategory() {
  return (
    <div className="container px-5 lg:px-20 pt-10 pb-2">
      <div>
        <div className="text-gray-10 text-opacity-90 flex justify-between items-center">
          <h2 className="text-2xl lg:text-[2.5rem] font-semibold lg:font-bold">
            Removal Services
          </h2>
          <Button className="bg-transparent text-sm lg:text-2xl font-semibold text-gray-10 text-opacity-90 ">
            View All
          </Button>
        </div>

        <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-12">
          {imageList.slice(4, 8).map((image) => (
            <div
              key={image.id}
              className="relative flex w-fit rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.name}
                width={292}
                height={344}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-[100px]"></div>

              <p className="text-white text-[18px] absolute bottom-3 font-medium left-2">
                {image.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Spacer />
      <div className="">
        <div className="text-gray-10 text-opacity-90 flex justify-between items-center">
          <h2 className="text-2xl lg:text-[2.5rem] font-semibold lg:font-bold">Tradesmen</h2>
          <Button className="bg-transparent text-sm lg:text-2xl font-medium lg:font-semibold text-gray-10 text-opacity-90 ">
            View All
          </Button>
        </div>

        <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-12">
          {imageList.slice(0, 4).map((image) => (
            <div
              key={image.id}
              className="relative flex w-fit rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.name}
                width={292}
                height={344}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-[100px]"></div>

              <p className="text-white text-[18px] absolute bottom-3 font-medium left-2">
                {image.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
