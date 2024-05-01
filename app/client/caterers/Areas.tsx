"use client";

import areas from "@/app/data/area"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dot } from 'lucide-react';

export default function Areas() {
    const [show, setShow] = useState(false);

    return (
        <div className="container px-5 lg:px-20">
            <h2 className="text-xl text-center lg:w-full lg:text-3xl font-bold capitalize">explore Caterers in These locations</h2>
            <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-y-6 mt-12">
                {areas.map((area) => (
                    <div key={area.id} className="flex items-center">
                        <Dot className="w-8 h-8 text-primary-20" />
                        <p className="text-base font-medium text-gray-20">{area.name}</p>
                    </div>
                ))}
            </div>

            {/* MOBILE VERISON */}

            <div className="grid grid-cols-2 md:hidden gap-y-6 mt-12">
                {areas.slice(0, 8).map((area) => (
                    <div key={area.id} className="flex items-center">
                        <Dot className="w-8 h-8 text-primary-20" />
                        <p className="text-sm font-medium text-gray-20">{area.name}</p>
                    </div>
                ))}
            </div>

            {show &&
                <div className="grid grid-cols-2 lg:hidden lg:grid-cols-6 gap-y-6 mt-6">
                    {areas.slice(8).map((area) => (
                        <div key={area.id} className="flex items-center">
                            <Dot className="w-8 h-8 text-primary-20" />
                            <p className="text-sm font-medium text-gray-20">{area.name}</p>
                        </div>
                    ))}
                </div>
            }

            <div className="text-center">
                <Button onClick={() => setShow(!show)} variant="outline" className="mt-10 inline-block md:hidden w-[224px] h-[48px] text-primary-20 focus:text-primary-20 hover:bg-transparent font-bold rounded-md border-primary-20">
                    {show === true ? "Close" : "View all Locations"}
                </Button>
            </div>
            {/* MOBILE VERISON END*/}
        </div>
    )
}