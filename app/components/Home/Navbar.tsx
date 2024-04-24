"use client";

import Link from "next/link";
import { Clipboard } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { MapPin } from "lucide-react";
import { Search } from "lucide-react";
import ClientDropDown from "./dropdown/Clients";
import ProfessionalDropDown from "./dropdown/Professional";
import ResourcesDropDown from "./dropdown/Resources";
import { useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleToggle = (menuItem: string) => {
    setActiveMenu(menuItem === activeMenu ? null : menuItem);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container px-10">
        <div className="flex justify-between items-center py-2">
          <Link
            href={"/"}
            className="col-start-1 col-end-3 py-4 flex items-center"
          >
            <Image
              src={logo}
              alt={"the website logo"}
              width={148}
              height={24}
            />
          </Link>

          <div className="flex gap-2">
            <div className="flex gap-2 items-center p-2 border rounded w-[211px]">
              <Clipboard className="w-5 h-5 text-gray-40" />
              <input
                type="text"
                placeholder="Choose service"
                className="border-none w-full outline-none"
              />
            </div>

            <div className="flex gap-2 items-center p-2 border rounded w-[199px]">
              <MapPin className="w-5 h-5 text-gray-40" />
              <input
                type="text"
                placeholder="Town/postcode"
                className="border-none w-full outline-none"
              />
            </div>

            <Button className="py-4 px-3 text-white bg-[#ECECEC]">
              <Search className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center gap-6 h-16 text-gray-10">
            <Button
              className="text-base p-0 text-gray-10 font-medium flex items-center"
              onClick={() => handleToggle("menuItem1")}
            >
              <p>For Clients</p>
              <ChevronDown className="inline-block ml-2 w-4" />
            </Button>

            <Button
              className="text-base p-0 text-gray-10 font-medium flex items-center"
              onClick={() => handleToggle("menuItem2")}
            >
              <p>For Professionals</p>
              <ChevronDown className="inline-block ml-2 w-4" />
            </Button>

            <Button
              className="text-base p-0 text-gray-10 font-medium flex items-center"
              onClick={() => handleToggle("menuItem3")}
            >
              <p>Resources</p>
              <ChevronDown className="inline-block ml-2 w-4" />
            </Button>
          </div>

          <div className="flex gap-3">
            <Button className="bg-white hover:bg-transparent text-gray-30 font-medium border-primary-20 py-3 px-5 rounded-lg">
              Log In
            </Button>
            <Button className="bg-primary-20 hover:bg-primary-20 py-3 px-5 rounded-md">
              Post a Job
            </Button>
          </div>
        </div>

        {activeMenu === "menuItem1" && <ClientDropDown />}

        {activeMenu === "menuItem2" && <ProfessionalDropDown />}
        {activeMenu === "menuItem3" && <ResourcesDropDown />}
      </nav>
    </header>
  );
}
