"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const cardList = [
  {
    id: 1,
    name: "Caterer",
    src: "/assets/dropdown-pro/caterer.webp",
    desc: "Serve up your culinary excellence to clients seeking memorable dining experiences.",
  },
  {
    id: 2,
    name: "Beauty Professioinals",
    src: "/assets/dropdown-pro/beauty-pro.webp",
    desc: "Bring out the best in clients with your beauty and wellness expertise.",
  },
  {
    id: 3,
    name: "Cleaners",
    src: "/assets/dropdown-pro/cleaners.webp",
    desc: "Offer your meticulous cleaning services to clients who appreciate a spotless environment.",
  },
  {
    id: 4,
    name: "Entertainers",
    src: "/assets/dropdown-pro/entertainers.webp",
    desc: "Captivate audiences by matching with clients looking for standout entertainment.",
  },
  {
    id: 5,
    name: "Appliance Repair Specialists",
    src: "/assets/dropdown-pro/appliance-repair.webp",
    desc: "Resolve technical issues by connecting with clients needing your repair skills.",
  },
  {
    id: 6,
    name: "Mobile Mechanics",
    src: "/assets/dropdown-pro/mechanic.webp",
    desc: "Keep clients on the move by providing your expert automotive repair services.",
  },
];

const ProfessionalDropDown: React.FC = () => {
  const [activeBox, setActiveBox] = useState<"box1" | "box2" | "box3" | null>(
    "box1"
  );

  const handleToggle = (boxId: "box1" | "box2" | "box3") => {
    if (activeBox !== boxId) {
      setActiveBox(boxId); // Set the active box only if it's not already active
    }
  };

  return (
    <div className="absolute">
      <div className="container">
        <div className="flex rounded-md w-[1260px] overflow-hidden shadow-md">
          {/* left side */}
          <div className="bg-white w-[32%] py-12 px-6">
            <p className="text-[12px] font-medium text-gray-30">FOR CLIENTS</p>
            <div className="flex flex-col gap-3 mt-6 tracking-wide">
              <Button
                className={`flex justify-between gap-2 py-10 px-6 rounded-md w-full ${
                  activeBox === "box1"
                    ? "bg-gray-90 hover:bg-gray-90"
                    : "bg-transparent text-white"
                }`}
                onClick={() => handleToggle("box1")}
              >
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/paper.svg"
                      width={24}
                      height={24}
                      alt="paper icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      Start Hiring On Loggworks
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Post a job for free or find professionals
                    </p>
                  </div>
                </div>
                {activeBox === "box1" && (
                  <ArrowRight className="text-gray-10 w-4 h-4" />
                )}
              </Button>

              <Button
                className="flex justify-between gap-2 py-10 px-6 rounded-md w-full focus:bg-gray-90 hover:bg-transparent"
                onClick={() => handleToggle("box2")}
              >
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/step.svg"
                      width={24}
                      height={24}
                      alt="steps icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      How it works
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Seamless steps to using Loggworks
                    </p>
                  </div>
                </div>
                {activeBox === "box2" && (
                  <ArrowRight className="text-gray-10 w-4 h-4" />
                )}
              </Button>

              <Button
                className="flex justify-between gap-2 py-10 px-6 rounded-md w-full focus:bg-gray-90 hover:bg-transparent"
                onClick={() => handleToggle("box3")}
              >
                <div className="flex">
                  <div className="flex items-end h-full">
                    <Image
                      src="/assets/dropdown/binocular.svg"
                      width={24}
                      height={24}
                      alt="binocular icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 ml-2">
                    <p className="text-base font-bold text-gray-10">
                      Explore Services
                    </p>
                    <p className="text-[12px] font-medium text-gray-30">
                      Browse the available service categories
                    </p>
                  </div>
                </div>
                {activeBox === "box3" && (
                  <ArrowRight className="text-gray-10 w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* right side */}
          {activeBox === "box1" && (
            <div className="bg-gray-90 w-[68%] py-12 pl-12 pr-16 flex justify-between">
              <div>
                <p className="text-[12px] font-medium text-gray-30">
                  START HIRING ON LOGGWORKS
                </p>
                <div className="flex flex-col gap-3 mt-6 tracking-wide">
                  <Button className="flex gap-2 py-10 px-6 rounded-md w-fit bg-gray-90">
                    <div className="flex items-end h-full">
                      <Image
                        src="/assets/dropdown/tag.svg"
                        width={24}
                        height={24}
                        alt="paper icon"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-base font-bold text-gray-10">
                        Learn More
                      </p>
                      <p className="text-[12px] font-medium text-gray-30">
                        Learn more about hiring professionals
                      </p>
                    </div>
                  </Button>

                  <Button className="flex gap-2 py-10 px-6 rounded-md w-fit bg-gray-90">
                    <div className="flex items-end h-full">
                      <Image
                        src="/assets/dropdown/book.svg"
                        width={24}
                        height={24}
                        alt="paper icon"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-base font-bold text-gray-10">Log In</p>
                      <p className="text-[12px] font-medium text-gray-30">
                        Welcome back! Log in your Loggworks account
                      </p>
                    </div>
                  </Button>
                </div>
              </div>
              <div>
                <div className="w-[351px] h-[314px] bg-slate-200"></div>
              </div>
            </div>
          )}

          {activeBox === "box2" && (
            <div className="w-[68%] py-12 pl-12 pr-16 bg-gray-90">
              <div className="grid grid-cols-3 gap-6 mt-12">
                {cardList.map((card) => (
                  <div key={card.id} className="bg-white rounded-sm overflow-hidden shadow-lg">
                    <Image
                      src={card.src}
                      width={248}
                      height={88}
                      alt=""
                      className="w-full h-24"
                    />
                    <div className="px-4 py-4">
                      <div className="">
                        <h4 className="text-sm mb-1 font-bold text-gray-10 leading-6">
                          {card.name}
                        </h4>
                        <p className="text-gray-20 text-[8px]">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBox === "box3" && (
            <div className="w-[68%] py-12 pl-12 pr-16 bg-gray-90">
              <div className="flex justify-between items-center gap-16  h-[85%] w-full">
                <div className="rounded-lg w-full h-64 overflow-hidden relative">
                  <Image
                    src={"/assets/dropdown-pro/pay-lady.webp"}
                    alt="payment image"
                    width={351}
                    height={274}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#202020] opacity-50"></div>
                  <div className="absolute text-white px-6 pt-10">
                    <p className="text-2xl font-bold">PayG</p>
                    <p className="text-base mt-3 mb-10">
                      For users on a project-by-project <br />
                      basis
                    </p>
                    <div className="flex gap-3 items-center">
                      <span className="text-5xl font-bold">15%</span>
                      <span className="text-base">
                        pay as you go <br />
                        per commission
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg w-full h-64 overflow-hidden relative">
                  <Image
                    src={"/assets/dropdown-pro/pay-guy.webp"}
                    alt="payment image"
                    width={351}
                    height={274}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#202020] opacity-50"></div>
                  <div className="absolute text-white px-6 pt-10">
                    <p className="text-2xl font-bold">Monthly</p>
                    <p className="text-base mt-3 mb-10">
                      For users on a regular and ongoing <br/>basis
                    </p>
                    <div className="flex gap-3 items-center">
                      <span className="text-5xl font-bold">$100</span>
                      <span className="text-base">
                        monthly <br />
                        subscription
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Link href={"/"} className="text-gray-10 font-bold mt-4 flex items-center">
                Learn more <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDropDown;
