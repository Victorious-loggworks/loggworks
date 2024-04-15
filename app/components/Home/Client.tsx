import data from "@/app/data/listcard";
import Image from "next/image.js";


export default function Client() {
    return (
        <div className="py-[144px] px-20 container">
            <div className="flex flex-col items-center">
                <h2 className="text-primary-20 text-xl uppercase text-center font-semibold">FOR CLIENTS</h2>
                <p className="text-center text-gray-10 text-[40px] font-bold leading-[48px] capitalize mt-6">Discover, Compare, and Hire</p>
                <p className="text-xl mt-4 text-gray-30">Find Your Perfect Professional with Loggworks</p>

                <div className="my-[72px] w-full h-[674px] bg-gray-500">
                </div>
            </div>

            <div>
                <div className="hidden lg:grid grid-cols-3 lg:grid-cols-3 gap-6 gap-y-6 mt-12">
                    {data.map((image) => (
                        <div key={image.id} className="flex flex-col gap-2 justify-center p-6 bg-gray-card rounded-2xl">
                            <div className="">
                                <Image src={image.src} alt={image.title} width={48} height={48} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-10">{image.title}</h3>
                            <p className="text-sm font-medium text-gray-30">{image.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}