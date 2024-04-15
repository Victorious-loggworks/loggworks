import Image from "next/image";
import { Button } from "@/components/ui/button";
import iconOne from "@/public/assets/steps/step-1.svg";
import iconTwo from "@/public/assets/steps/step-2.svg";
import iconThree from "@/public/assets/steps/step-3.svg";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
    return (
        <div className="px-20">
            <div className="w-full h-[891px] container flex justify-center">
                <div className="relative flex w-fit rounded-lg overflow-hidden">
                    <Image src="/assets/steps/bg-image.png" alt="" width="1240" height="0" className="w-full h-auto" />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-10 from-45%  via-gray-10 via-30% to-transparent h-[400px]"></div>

                    <div className="flex flex-col gap-6 absolute bottom-16 left-16">
                        <div className="p-8 bg-[#EDE7F8] rounded-[8px] w-[448px]">
                            <div className="flex justify-between">
                                <h4 className="uppercase text-secondary-10 font-bold">Step one</h4>
                                <Image src={iconOne} alt={"Search icon"} />
                            </div>
                            <h5 className="text-2xl font-bold my-2">Search or Post a Job</h5>
                            <p className="text-gray-30 text-base">Search for nearby home service professionals or post a job request and wait for multiple quotes directly from professionals.</p>
                        </div>

                        <div className="p-8 bg-[#EDE7F8] rounded-[8px] w-[448px]">
                            <div className="flex justify-between">
                                <h4 className="uppercase text-secondary-10 font-bold">Step two</h4>
                                <Image src={iconTwo} alt={"Search icon"} />
                            </div>
                            <h5 className="text-2xl font-bold my-2">Get Free Quotes</h5>
                            <p className="text-gray-30 text-base">Obtain as many quotes as you wish, and select the best match for your budget and schedule.</p>
                        </div>

                        <div className="p-8 bg-[#EDE7F8] rounded-[8px] w-[448px]">
                            <div className="flex justify-between">
                                <h4 className="uppercase text-secondary-10 font-bold">Step three</h4>
                                <Image src={iconThree} alt={"Search icon"} />
                            </div>
                            <h5 className="text-2xl font-bold my-2">Rate and review</h5>
                            <p className="text-gray-30 text-base">Share your experience by rating and reviewing the service to help others make informed decisions about the provider's quality.</p>
                        </div>
                    </div>

                    <div className="w-fit absolute bottom-16 right-16">
                        <span className="px-4 py-3 text-lg text-white bg-secondary-10 rounded-[100px]">For Clients</span>
                        <h4 className="text-[32px] text-white mt-6 font-bold">How It Works</h4>
                        <p className="text-white mt-2 text-[18px]">
                            <span className="font-semibold block">Empowering Connections, Simplifying Solutions</span>
                            <span>Home Service Made Easy in Three Steps</span>
                        </p>

                        <div className="flex gap-3 mt-10 font-semibold">
                            <Button className="bg-transparent hover:bg-transparent border border-white py-3 px-5 rounded-md">Post a Job For Free</Button>
                            <Button className="bg-transparent hover:bg-transparent text-white py-3 px-5 rounded-lg">Learn More <ArrowRight className="ml-2" /> </Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}