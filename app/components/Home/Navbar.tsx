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
        <header className="bg-white">
            <nav className="container">
                <Link href={"/"} className="col-start-1 col-end-3 py-4 flex items-center">
                    <Image src={logo} alt={"the website logo"} width={148} height={24} />
                </Link>
            </nav>
        </header>
    );
}