import Image from "next/image";
import { Button } from "@/components/ui/button";
import iconOne from "@/public/assets/steps/step-1.svg";
import iconTwo from "@/public/assets/steps/step-2.svg";
import iconThree from "@/public/assets/steps/step-3.svg";
import { ArrowRight } from "lucide-react";

export default function StepsTwo() {
  return (
    <div className="px-5 lg:px-20 container">
      <div className="w-full lg:h-[891px] flex justify-center">
        <div className="bg-no-repeat bg-cover bg-center w-full bg-black flex justify-between relative rounded-lg overflow-hidden items-center">
          <Image
            src="/assets/steps/bg-image.png"
            alt=""
            width="1240"
            height="0"
            className="w-full h-full object-cover bg-right absolute"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-10 from-45%  via-gray-10 via-30% to-transparent h-full lg:h-[400px]"></div>

          <div className="z-50 flex flex-col-reverse lg:flex-row gap-6 justify-between items-center w-full p-5 pt-9 pb-8 lg:p-0">
            <div className="flex flex-col gap-6 lg:ml-14">
              <div className="p-8 bg-[#EDE7F8] rounded-[8px] max-w-[448px]">
                <div className="flex justify-between">
                  <h4 className="uppercase text-secondary-10 font-bold">
                    Step one
                  </h4>
                  <Image src={iconOne} alt={"Search icon"} width={48} height={48} className="h-10 w-10 lg:h-12 lg:w-12" />
                </div>
                <h5 className="text-2xl font-bold my-2">
                  Search or Post a Job
                </h5>
                <p className="text-gray-30 text-base">
                  Search for nearby home service professionals or post a job
                  request and wait for multiple quotes directly from
                  professionals.
                </p>
              </div>

              <div className="p-8 bg-[#EDE7F8] rounded-[8px] max-w-[448px]">
                <div className="flex justify-between">
                  <h4 className="uppercase text-secondary-10 font-bold">
                    Step two
                  </h4>
                  <Image src={iconTwo} alt={"Search icon"} width={48} height={48} className="h-10 w-10 lg:h-12 lg:w-12"/>
                </div>
                <h5 className="text-2xl font-bold my-2">Get Free Quotes</h5>
                <p className="text-gray-30 text-base">
                  Obtain as many quotes as you wish, and select the best match
                  for your budget and schedule.
                </p>
              </div>

              <div className="p-8 bg-[#EDE7F8] rounded-[8px] max-w-[448px]">
                <div className="flex justify-between">
                  <h4 className="uppercase text-secondary-10 font-bold">
                    Step three
                  </h4>
                  <Image src={iconThree} alt={"Search icon"} width={58} height={58} className="h-10 w-10 lg:h-12 lg:w-12"/>
                </div>
                <h5 className="text-2xl font-bold my-2">Rate and review</h5>
                <p className="text-gray-30 text-base">
                  Share your experience by rating and reviewing the service to
                  help others make informed decisions about the provider's
                  quality.
                </p>
              </div>
            </div>

            <div className="lg:flex lg:items-end lg:h-[891px]">
              <div className="w-fit lg:mb-16 lg:mr-14">
                <span className="px-4 py-3 text-lg text-white bg-secondary-10 rounded-[100px] font-semibold">
                  For Clients
                </span>
                <h4 className="text-[32px] text-white mt-6 font-bold">
                  How It Works
                </h4>
                <p className="text-white mt-2 text-[18px]">
                  <span className="font-semibold block">
                    Empowering Connections, Simplifying Solutions
                  </span>
                  <span>Home Service Made Easy in Three Steps</span>
                </p>

                <div className="flex gap-3 mt-10">
                  <Button className="bg-transparent hover:bg-transparent border font-semibold border-white py-3 px-5 rounded-md">
                    Post a Job For Free
                  </Button>
                  <Button className="bg-transparent hover:bg-transparent font-semibold text-white py-3 px-5 rounded-lg">
                    Learn More <ArrowRight className="ml-2" />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
