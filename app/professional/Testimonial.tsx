"use client";
// import trustpilot from "@/public/assets/trustpilot.png";
import Image from "next/image";
import data from "@/app/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Testimonial() {
    return (
        <div className="bg-white">
            <div className="container px-5 lg:px-20">
                <div className="lg:text-center">
                    <h2 className="text-2xl lg:text-[2.5rem] font-semibold lg:font-bold mb-4 text-gray-10">See What Our Satisfied Professionals are Saying</h2>
                    <p className="text-base lg:text-xl text-gray-30">Hear what home service professionals have to say about Loggworks.</p>
                </div>

                {/* DESKTOP VIEW */}
                <div className=" mt-16 hidden lg:block">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Pagination, Navigation]}

                        className="mt-4 pb-6 bg-primary-90 rounded-md"
                    >
                        {data.map((testimonial, id) => (
                            <SwiperSlide key={testimonial.id} className="pb-4 px-48 !py-28">
                                <div className="p-5 flex flex-col gap-8 items-center justify-center rounded-lg w-full">
                                    <p className="mb-3 text-[24px] text-center leading-9 text-gray-10">{testimonial.message}</p>
                                    <div className="flex gap-2 items-center rounded-lg">
                                        <p className="block font-semibold text-[24px]">{testimonial.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler-desktop">
                            <div className="swiper-button-prev slider-arrow p-1 rounded-full bg-white text-gray-800 hover:bg-white h-8 w-8">
                                <ChevronLeft />
                            </div>
                            <div className="swiper-button-next slider-arrow p-1 rounded-full bg-white text-gray-800 hover:bg-white">
                                <ChevronRight />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>

                {/* MOBILE VIEW */}
                <div className="mt-8 lg:hidden">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Pagination, Navigation]}

                        className="mt-4 pb-6 h-[300px]"
                    >
                        {data.map((testimonial, id) => (
                            <SwiperSlide key={testimonial.id} className="pb-4">
                                <div className="p-5 flex flex-col justify-between bg-primary-90 rounded-lg w-full h-[236px]">
                                    <p className="mb-3">{testimonial.message}</p>
                                    <div className="flex gap-2 items-center rounded-lg">
                                        <Image src={testimonial.avatar} alt="image showing sign up" className="rounded-full" width={32} height={32} />
                                        <p className="block font-medium text-lg">{testimonial.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow p-1 rounded-full bg-white text-gray-800 hover:bg-white h-8 w-8">
                                <ChevronLeft />
                            </div>
                            <div className="swiper-button-next slider-arrow p-1 rounded-full bg-white text-gray-800 hover:bg-white">
                                <ChevronRight />
                            </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-mobile"></div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}