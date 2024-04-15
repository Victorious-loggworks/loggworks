import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { MapPin } from "lucide-react";
import { Search } from 'lucide-react';

const links = [
    {
        id: "professional",
        href: "/professional",
        name: "Professional",
    },
    {
        id: "consumer",
        href: "/Consumer",
        name: "Consumer",
    }
]


export default function Navbar() {
    return (
        <header>
            <nav className="hidden container px-20 lg:flex items-center justify-between">
            <div className="bg-white lg:border-b lg:block hidden">
                <div className="grid grid-cols-9 gap-4 container px-20">

                    <Link href={"/"} className="col-start-1 col-end-3 py-4 flex items-center">
                        <Image src={logo} alt={"the website logo"} width={148} height={24} />
                    </Link>

                    <div className="col-start-3 col-end-8 gap-5 py-4">
                        <div className="flex items-center justify-between border border-gray-300 p-2 w-[420px] bg-white rounded-md">
                            <input type="text" placeholder="Electrician" className="border-r-2 outline-none w-40" />
                            <MapPin className="inline-block w-4 text-grey-40" />
                            <input type="text" placeholder="Town/postcode" className="border-none outline-none w-[165px]" />
                            <Search className="ml-2 inline-block w-4 text-grey-40" />
                        </div>

                    </div>

                    <div className="flex items-center justify-end col-start-8 col-end-10 gap-4 font-semibold ">
                        <Link href="#" className="text-gray-20">Professional</Link>
                        <Link href="#" className="border-primary text-gray-0 border-b-[3px] py-5">Consumer</Link>
                    </div>


                </div>
            </div>
                <div className="flex items-center gap-14 h-16 text-gray-10">
                        <div>
                            <Link href={"/"} className="text-base text-primary-20 font-medium">
                            Home
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            How it works
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            Services
                            <ChevronDown className="inline-block ml-2 w-4" />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            Resources
                            <ChevronDown className="inline-block ml-2 w-4" />
                            </Link>
                        </div>
                </div>

                <div className="flex items-center gap-6">
                    <div>
                        <Link href={"/"} className="text-gray-10 flex flex-col justify-center items-center" >
                            <HelpCircle className="w-[24px]" />
                            <span className="text-[12px] font-semibold">Help</span>
                        </Link>
                    </div>

                    <div>
                        <Link href={"/"} className="text-gray-10 flex flex-col justify-center items-center" >
                            <CircleUserRound className="w-[24px]" />
                            <span className="text-[12px] font-semibold">Account</span>
                        </Link>
                    </div>


                    <Button className="inline-block bg-primary-20 ml-2 hover:bg-primary-20 text-sm text-white">
                        <Plus className="inline-block w-5 mr-2" />
                        Post Job
                    </Button>
                </div>
            </nav>
        </header>
    );
}