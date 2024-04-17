import Image from "next/image";
import MobileOne from "@/public/assets/mobile-11.webp";
import MobileTwo from "@/public/assets/mobile-22.webp";
import AppleIcon from "@/public/assets/apple-icon.svg";
import GoogleIcon from "@/public/assets/play-icon.svg";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="container px-5 lg:px-20">
            <div className="relative flex items-center rounded-xl overflow-hidden bg-[#2E2E2E] h-[464px]">
                <div className="flex-1 px-5 lg:px-24">
                    <div className="w-1/2">
                        <h2 className="text-2xl lg:text-[32px] leading-[38.4px] font-bold text-white mb-4">Access Loggworks on <br />your mobile phone</h2>
                        <p className="text-gray-70 text-[18px]">Enjoy the full experience of Loggworks on our mobile app. What’s more? You get to enjoy all of our services convieniently. </p>

                        <div className="mt-8 flex gap-4">
                            <Link href={"/"} className="border-[3px] border-[#8E8E8E] rounded-md flex justify-center items-center gap-3 w-fit px-4 py-2">
                                <Image src={AppleIcon} alt="apple icon" width={22.509} height={26.68} />
                                <p className="flex flex-col text-white leading-5">
                                    <span className="text-[10px]">Downlaod on the</span>
                                    <span className="text-[18px] -mt-1 font-bold">App Store</span>
                                </p>
                            </Link>

                            <Link href={"/"} className="border-[3px] border-[#8E8E8E] rounded-md flex justify-center items-center gap-3 w-fit px-4 py-2">
                                <Image src={GoogleIcon} alt="apple icon" width={22.509} height={26.68} />
                                <p className="flex flex-col text-white leading-5">
                                    <span className="text-[10px]">Downlaod on the</span>
                                    <span className="text-[18px] -mt-1 font-bold">Google Play</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute right-72 top-20">
                    <Image src={MobileOne} alt="phone app image" className="w-[350px]" />
                </div>
                <div className="absolute top-4 right-20 w-fit">
                    <Image src={MobileTwo} alt="phone app image" className="w-[350px]" />
                </div>
            </div>
        </div>
    );
}