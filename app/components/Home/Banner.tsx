import Image from "next/image";
import MobileOne from "@/public/assets/mobile-11.webp";
import MobileTwo from "@/public/assets/mobile-22.webp";
import AppleIcon from "@/public/assets/apple-icon.svg";
import GoogleIcon from "@/public/assets/play-icon.svg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="container px-5 lg:px-20">
      <div className="flex flex-col gap-6 lg:flex-row items-center rounded-xl overflow-hidden bg-[#2E2E2E] lg:h-[464px] p-6 lg:p-0">
        <div className="lg:flex-1 px-5 lg:pl-24">
          <div className="">
            <h2 className="text-xl lg:text-[32px] leading-[1.875rem] lg:leading-[38.4px] font-bold text-white mb-4">
              Access Loggworks on <br />
              your mobile phone
            </h2>
            <p className="text-gray-70 text-[14px] lg:text-[18px]">
              Enjoy the full experience of Loggworks on our mobile app. What’s
              more? You get to enjoy all of our services convieniently.{" "}
            </p>

            <div className="mt-8 flex flex-col lg:flex-row gap-4">
              <Link
                href={"/"}
                className="border-[3px] border-[#8E8E8E] rounded-md flex justify-center items-center gap-3 w-fit px-4 py-2"
              >
                <Image
                  src={AppleIcon}
                  alt="apple icon"
                  width={22.509}
                  height={26.68}
                />
                <p className="flex flex-col text-white leading-5">
                  <span className="text-[10px]">Downlaod on the</span>
                  <span className="text-[18px] -mt-1 font-bold">App Store</span>
                </p>
              </Link>

              <Link
                href={"/"}
                className="border-[3px] border-[#8E8E8E] rounded-md flex justify-center items-center gap-3 w-fit px-4 py-2"
              >
                <Image
                  src={GoogleIcon}
                  alt="apple icon"
                  width={22.509}
                  height={26.68}
                />
                <p className="flex flex-col text-white leading-5">
                  <span className="text-[10px]">Downlaod on the</span>
                  <span className="text-[18px] -mt-1 font-bold">
                    Google Play
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative lg:w-1/2">
          <div className="absolute lg:right-72 lg:top-20">
            <Image
              src={MobileOne}
              alt="phone app image"
              className="lg:w-[350px]"
            />
          </div>
          <div className="absolute lg:top-4 lg:right-20 w-fit">
            <Image
              src={MobileTwo}
              alt="phone app image"
              className="lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
