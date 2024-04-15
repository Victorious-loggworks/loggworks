import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="container px-20">
            <div className="py-20 flex flex-col items-center">
                <h1 className="font-bold text-5xl text-gray-10 flex flex-col text-center leading-[57.6px]">
                    <span>Home Services</span>
                    <span>Simplified</span>
                </h1>

                <p className="text-xl text-gray-30 max-w-md text-center mt-6">Connect Seamlessly with Vetted Professionals for All Your Home Service Needs</p>

                <div className="flex gap-3 mt-8">
                    <Button className="bg-primary-20 hover:bg-primary-20 py-3 px-5 rounded-md">Post a Job For Free</Button>
                    <Button className="bg-white hover:bg-transparent text-primary-20 border-primary-20 border py-3 px-5 rounded-lg">Join as a Pro</Button>
                </div>

                <div className="my-14 h-[684px] w-full bg-slate-300"></div>
            </div>
        </div>
    );
}