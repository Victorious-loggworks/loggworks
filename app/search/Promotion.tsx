import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";

const SearchList = [
  {
    id: 1,
    src: "/assets/electrician.webp",
    logo: "/assets/dyson.webp",
    categoryTitle: "Job category",
    categoryOne: "power contractors",
    categoryTwo: "Generatoe installation",
  },
  {
    id: 2,
    src: "/assets/electrician.webp",
    logo: "/assets/dyson.webp",
    categoryTitle: "Job category",
    categoryOne: "power contractors",
    categoryTwo: "Generator installation",
  },
  {
    id: 3,
    src: "/assets/electrician.webp",
    logo: "/assets/dyson.webp",
    categoryTitle: "Job category",
    categoryOne: "power contractors",
    categoryTwo: "Generator installation",
  },
];

export default function Promotion() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="flex items-center gap-3 mt-16">
        <h3 className="text-black text-base lg:text-xl font-semibold">Promotions</h3>
        <span className="text-white text-[12px] bg-[#E2B801] px-1 rounded-sm">Ads</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {SearchList.map((searchCard) => (
          <div
            key={searchCard.id}
            className="shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={searchCard.src}
              alt="Professional worker image"
              width={360}
              height={130}
              className="w-full object-cover h-40 bg-center bg"
            />
            <div className="p-3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={searchCard.logo}
                    alt="Professional worker logo"
                    width={26}
                    height={26}
                  />
                  <h5 className="text-gray-0 text-base font-semibold">
                    Dyson Electricals
                  </h5>
                </div>

                <div className="text-gray-20 text-sm flex items-center gap-1">
                  <Star className="text-primary-20 w-5 h-5" />
                  5.0 (300K)
                </div>
              </div>
              <p className="text-sm text-gray-20">{searchCard.categoryTitle}</p>
              <div className="flex gap-2 items-center text-sm">
                <p className="bg-gray-90 text-gray-20 px-2 py-1 rounded-full">
                  {searchCard.categoryOne}
                </p>
                <p className="bg-gray-90 text-gray-20 px-2 py-1 rounded-full">
                  {searchCard.categoryTwo}
                </p>
              </div>
              <Button className="w-full py-3 text-primary-20 border border-primary-20 rounded-md">
                Request Quote
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
