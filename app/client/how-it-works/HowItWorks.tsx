import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Steps() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="col-span-4 flex flex-col-reverse h-full lg:flex-row justify-between items-center rounded-[8px] overflow-hidden gap-4">
        <div className="lg:w-[40%] px-5 md:px-0">
          <h2 className="uppercase text-primary-20 font-normal lg:font-semibold text-[12px] lg:text-base leading-8">
            STEP ONE
          </h2>
          <h3 className="text-2xl lg:text-[2.5rem] capitalize leading-8 lg:leading-[3rem] font-semibold lg:font-bold text-gray-10 text-opacity-90 mb-4">
            Search or post a job
          </h3>
          <p className="text-gray-30 text-base lg:text-xl">
            Search for nearby professionals or post a job request and wait for
            multiple quotes direct from professionals.
          </p>

          <Button className="bg-white text-primary-20 border border-primary-20 hidden lg:flex hover:bg-primary-20 font-semibold mt-8 py-6 px-5 rounded-md">
            Post a Job For Free
          </Button>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center bg-gay-90">
          <Image
            src={"/assets/client-assets/how-it-works/Search-or-post-a-job.webp"}
            alt={"search or post a job"}
            width={1361}
            height={1178}
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}
