import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import SearchCard from "@/app/data/SearchList";

export default function FullSearchResults() {
  return (
    <div className="container px-20">
      <div className="flex items-center gap-3 mt-16">
        <h3 className="text-black text-xl font-semibold">All Electricians</h3>
        {/* <span className="text-white bg-[#E2B801] px-1 rounded-sm">Ads</span> */}
      </div>
      <div className="grid grid-cols-4 gap-6 my-12">
        {SearchCard.map((searchCard) => (
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
              {/* <div className="flex items-center justify-between"> */}
              <div className="flex items-center gap-2">
                <Image
                  src={searchCard.logo}
                  alt="Professional worker logo"
                  width={26}
                  height={26}
                />
                <h5 className="text-gray-0 text-sm font-semibold">
                  Dyson Electricals
                </h5>
              </div>

              <div className="text-gray-20 text-[12px] font-medium flex items-center gap-1">
                <div className="flex">
                  <Star className="text-primary-20 w-4 h-4" />
                  <Star className="text-primary-20 w-4 h-4" />
                  <Star className="text-primary-20 w-4 h-4" />
                  <Star className="text-primary-20 w-4 h-4" />
                  <Star className="text-gray-30 w-4 h-4" />
                </div>
                5.0 (300K)
              </div>
              <div className="flex gap-2 items-center text-[12px]">
                <p className="bg-gray-90 text-gray-20 px-2 py-1 rounded-full">
                  {searchCard.categoryOne}
                </p>
                <p className="bg-gray-90 text-gray-20 px-2 py-1 rounded-full">
                  {searchCard.categoryTwo}
                </p>
              </div>
              <p className="text-[12px] text-gray-20 font-medium divide-x-2 divide-gray-30">
                <span className="px-1">Job Category</span>
                <span className="px-1">Distance</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <Button className="w-fit py-6 px-5 capitalize text-primary-20 bg-primary-20 bg-opacity-10  rounded-md">
        load more results
      </Button>
      </div>
      
    </div>
  );
}
