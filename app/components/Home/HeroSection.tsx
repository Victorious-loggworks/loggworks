import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="container lg:px-20 px-5">
            <div className="pt-32 lg:pb-20 flex flex-col items-center">
                <h1 className="font-bold text-2xl lg:text-5xl text-gray-10 flex flex-col text-center leading-8 lg:leading-[57.6px]">
                    <span>Home Services</span>
                    <span>Simplified</span>
                </h1>

                <p className="text-base md:text-xl text-gray-30 max-w-md text-center mt-6">Connect Seamlessly with Vetted Professionals for All Your Home Service Needs</p>

                <div className="flex flex-col w-full lg:justify-center lg:flex-row gap-3 mt-8">
                    <Button className="bg-primary-20 hover:bg-primary-20 py-6 px-5 rounded-md">Post a Job For Free</Button>
                    <Button className="bg-white hover:bg-transparent text-primary-20 border-primary-20 border-opacity-70 border py-6 px-5 rounded-lg">Join as a Pro</Button>
                </div>

                <div className="my-10 lg:my-14 h-[185px] lg:h-[684px] w-full bg-slate-300"></div>
            </div>
        </div>
    );
}