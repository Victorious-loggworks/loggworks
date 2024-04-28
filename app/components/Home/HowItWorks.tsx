import Image from "next/image";
import { Button } from "@/components/ui/button";
import iconOne from "@/public/assets/steps/step-1.svg";
import iconTwo from "@/public/assets/steps/step-2.svg";
import iconThree from "@/public/assets/steps/step-3.svg";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="px-5 lg:px-20 container">
      <div className="w-full lg:h-[1026px] flex justify-center">
        <div className="bg-no-repeat bg-cover bg-center w-full bg-black flex justify-between relative rounded-lg overflow-hidden items-center">
          <Image
            src="/assets/how-it-works.png"
            alt=""
            width="1240"
            height="0"
            className="w-full h-full object-cover absolute"
          />

          <div className="absolute hidden lg:block bottom-0 left-0 right-0 bg-gradient-to-r from-gray-10 from-5%  via-gray-10 via-15% to-transparent h-full"></div>
          {/* for mobile */}
          {/* <div className="absolute block lg:hidden bottom-0 left-0 right-0 bg-gradient-to-t from-gray-10 from-45% via-gray-10 via-30%  h-full"></div> */}
          <div className="absolute block lg:hidden inset-0 bg-gradient-to-t from-[#000000] to-[#202020] opacity-60"></div>
          {/*// for mobile */}

          <div className="z-50 flex flex-col gap-10 justify-center items-center w-full p-5 pt-9 pb-8 lg:p-0">
            <div className="w-full">
              <div className="w-fit lg:ml-16">
                <span className="px-4 py-3 text-lg text-white font-semibold bg-primary-20 rounded-[100px]">
                  For Professionals
                </span>
                <h4 className="text-[32px] text-white mt-6 font-bold">
                  How It Works
                </h4>
                <p className="text-white mt-2 text-[18px] max-w-md">
                  <span className="font-semibold block">
                    Build Your Business, Connect with Clients
                  </span>
                  <span>
                    Your Professional Growth Journey Made Easy in Four Steps
                  </span>
                </p>

                <div className="mt-10 font-semibold">
                  <Button className="bg-transparent hover:bg-transparent border border-white py-3 px-5 rounded-md">
                    Join as a Pro
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:px-16">
              <div className="grid md:grid-cols-2 gap-6 ">
                <div className="p-8 bg-[#EDE7F8] rounded-[6px] max-w-[546px]">
                  <div className="flex flex-col">
                    <h4 className="uppercase text-primary-20 font-bold">
                      Step one
                    </h4>
                    <div className="h-12 w-12"></div>
                  </div>
                  <h5 className="text-2xl font-bold my-2">
                    Create Your Profile
                  </h5>
                  <p className="text-gray-30 text-base">
                    Sign up and showcase your expertise by creating a
                    professional profile. Highlight your skills, display past
                    jobs, and set the stage for clients to find you.
                  </p>
                </div>

                <div className="p-8 bg-[#EDE7F8] rounded-[6px] max-w-[546px]">
                  <div className="flex flex-col">
                    <h4 className="uppercase text-primary-20 font-bold">
                      Step two
                    </h4>
                    <div className="h-12 w-12"></div>
                  </div>
                  <h5 className="text-2xl font-bold my-2">
                    Customers Job Requests
                  </h5>
                  <p className="text-gray-30 text-base">
                    Browse job requests from clients seeking services you offer
                    and select the ones you're interested in.
                  </p>
                </div>

                <div className="p-8 bg-[#EDE7F8] rounded-[6px] max-w-[546px]">
                  <div className="flex flex-col">
                    <h4 className="uppercase text-primary-20 font-bold">
                      Step three
                    </h4>
                    <div className="h-12 w-12"></div>
                  </div>
                  <h5 className="text-2xl font-bold my-2">Quote And Invoice</h5>
                  <p className="text-gray-30 text-base">
                    Provide clients with clear quotes and invoices through
                    Loggworks.
                  </p>
                </div>

                <div className="p-8 bg-[#EDE7F8] rounded-[6px] max-w-[546px]">
                  <div className="flex flex-col">
                    <h4 className="uppercase text-primary-20 font-bold">
                      Step four
                    </h4>
                    <div className="h-12 w-12"></div>
                  </div>
                  <h5 className="text-2xl font-bold my-2">
                    Completion and Payment
                  </h5>
                  <p className="text-gray-30 text-base">
                    Complete jobs to the client’s satisfaction and receive
                    payments promptly through the platform's secure transaction
                    system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
