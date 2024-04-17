import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/logo-footer.png";
import Image from "next/image";
import facebook from "@/public/assets/socials/facebook-fill.svg";
import twitter from "@/public/assets/socials/twitter-fill.svg";
import instagram from "@/public/assets/socials/instagram-fill.svg";
import linkedin from "@/public/assets/socials/linkedin-box-fill.svg";
import youtube from "@/public/assets/socials/youtube-fill.svg";

export default function Footer() {
    return (
        <div className="lg:bg-gray-10">
            <div className="container px-5 lg:px-20 pt-10 pb-5 lg:py-16 divide-y">
                <div className="hidden lg:grid grid-cols-2 lg:grid-cols-5 gap-16 text-white pb-6">
                    <div className="hidden lg:flex flex-col gap-4">
                        <Image src={Logo} alt="logo" />
                        <Button className="py-5 border bg-transparent">Become a Professional</Button>
                        <Button className="py-5 border bg-transpa60 text-[18px]">Post a Job</Button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h5 className="text-xl font-bold">Homeowners</h5>
                        <Link href={"/"} className="text-gray-60">Post a Job</Link>
                        <Link href={"/"} className="text-gray-60">How it works</Link>
                        <Link href={"/"} className="text-gray-60">Contact Us</Link>
                        <Link href={"/"} className="text-gray-60">Helps & FAQs</Link>
                        <Link href={"/"} className="text-gray-60">User Agreement</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h5 className="text-xl font-bold">Professionals</h5>
                        <Link href={"/"} className="text-gray-60">Sign Up</Link>
                        <Link href={"/"} className="text-gray-60">Blog</Link>
                        <Link href={"/"} className="text-gray-60">Contact Us</Link>
                        <Link href={"/"} className="text-gray-60">Helps & FAQs</Link>
                        <Link href={"/"} className="text-gray-60">User Agreement</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h5 className="text-xl font-bold">Loggworks</h5>
                        <Link href={"/"} className="text-gray-60">About us</Link>
                        <Link href={"/"} className="text-gray-60">Careers</Link>
                        <Link href={"/"} className="text-gray-60">Partners</Link>
                        <Link href={"/"} className="text-gray-60">Affliate</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h5 className="text-xl font-bold">Follow us</h5>
                        <Link href={"/"} className="flex items-center gap-1 text-gray-60 text-[18px]">
                            <Image src={facebook} alt="facebook" className="inline-block w-5 h-5" />
                            Facebook
                        </Link>
                        <Link href={"/"} className="flex items-center gap-1 text-gray-60 text-[18px]">
                            <Image src={twitter} alt="twitter" className="inline-block w-5 h-5" />
                            Twitter
                        </Link>
                        <Link href={"/"} className="flex items-center gap-1 text-gray-60 text-[18px]">
                            <Image src={instagram} alt="instagram" className="inline-block w-5 h-5" />
                            Instagram
                        </Link>
                        <Link href={"/"} className="flex items-center gap-1 text-gray-60 text-[18px]">
                            <Image src={youtube} alt="youtube" className="inline-block w-5 h-5" />
                            Youtube
                        </Link>
                        <Link href={"/"} className="flex items-center gap-1 text-gray-60 text-[18px]">
                            <Image src={linkedin} alt="linkedin" className="inline-block w-5 h-5" />
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col lg:flex-row justify-between pt-6 text-white">
                    <p className="text-center lg:text-left">©Copyright 2024 loggwork Ltd. All Rights Reserved</p>
                    <div className="hidden lg:flex place-items-end divide-x">
                        <Link href={"/"} className="px-2">Terms of Use</Link>
                        <Link href={"/"} className="px-2">Privacy Policy</Link>
                        <Link href={"/"} className="px-2">Cookies</Link>
                        <Link href={"/"} className="px-2">Sitemap</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}