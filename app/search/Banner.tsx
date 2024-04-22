import Image from "next/image";
import { SquareCheck } from "lucide-react";
import { Square } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Banner() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="relative flex items-center gap-8 justify-between rounded-xl overflow-hidden bg-gray-10 bg-opacity-90 h-[464px]">
        <div className="px-5 lg:pl-20 w-1/2">
          <div className="w-">
            <h2 className="text-2xl lg:text-[32px] leading-[38.4px] font-bold text-white mb-4">
              Find the Best Home Service
              <br />Professionals On Loggworks
            </h2>
            <p className="text-gray-70 text-[18px]">
            Post jobs for free on Loggworks and find reliable home service professionals in your area. Choose the best options for your budgets and timeline. 
            </p>

            <Button className="bg-primary-20 hover:bg-primary-20 mt-8 py-6 px-5 rounded-md">Post a Job For Free</Button>
           
          </div>
        </div>

        <div className="w-1/2 flex flex-col h-full gap-12 justify-center">
          <div className="flex justify-between">
            <div className="">
              <p className="bg-white bg-opacity-95 ml-2 px-4 py-3 mt-3 rounded-md w-fit h-fit flex items-center text-sm font-medium">
                <Square className="inline-block mr-2 text-primary-20" /> Get a
                caterer for bestie's party
              </p>
            </div>

            <div className="">
              <p className="bg-white bg-opacity-95 mr-3 px-4 py-3 rounded-md w-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" />
                Get a Find a groomer for my cat
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center w-[110%] pl-10">
            <div className="ml-3">
              <p className="bg-white bg-opacity-95 mt-2 ml-2 px-4 py-3 rounded-md w-fit h-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" />{" "}
                Hire a moving truck
              </p>
            </div>

            <div className="">
              <p className="bg-white bg-opacity-95 mt-2 mr-3 px-4 py-3 rounded-md w-fit flex items-center text-sm font-medium">
                <Square className="inline-block mr-2 text-primary-20" />
                Finish my grocery shopping
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <p className="bg-white bg-opacity-95 mr-3 px-4 py-3 rounded-md w-fit flex items-center text-sm font-medium">
              <SquareCheck className="inline-block mr-2 text-primary-20" />
              Clean my apartment
            </p>
          </div>

          <div className="flex justify-between">
            <div className="">
              <p className="bg-white bg-opacity-95 ml-2 px-4 py-3 mt-3 rounded-md w-fit h-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" />{" "}
                Get a Repair the linking sink
              </p>
            </div>

            <div className="">
              <p className="bg-white bg-opacity-95 mr-3 px-4 py-3 rounded-md w-fit flex items-center text-sm font-medium">
                <SquareCheck className="inline-block mr-2 text-primary-20" />
                Hire a baby sitter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
