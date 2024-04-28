import data from "@/app/data/listcard";
import Image from "next/image.js";

export default function Client() {
  return (
    <div className="lg:px-20 px-5 container">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-primary-20 text-[0.75rem] lg:text-xl uppercase lg:text-center font-semibold">
            FOR CLIENTS
          </h2>
          <p className="lg:text-center text-gray-10 text-2xl lg:text-[2.5rem] font-semibold lg:font-bold leading-8 lg:leading-[48px] capitalize mt-2 lg:mt-6">
            Discover, Compare, and Hire
          </p>
          <p className="lg:text-xl text-base lg:text-center mt-4 text-gray-30">
            Find Your Perfect Professional with Loggworks
          </p>
        </div>
        <div className="w-full my-8 lg:my-[72px] rounded-xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%" }}
            className="h-fit object-cover"
          >
            <source src="videos/loggworks-video.mp4" />
          </video>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12">
          {data.map((image) => (
            <div
              key={image.id}
              className="flex flex-col gap-2 justify-center p-4 lg:p-6 bg-gray-card rounded-[4px] lg:rounded-2xl"
            >
              <div className="">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={48}
                  height={48}
                  className="w-8 lg:w-12 h-8 lg:h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-10">
                {image.title}
              </h3>
              <p className="text-sm font-medium text-gray-30">{image.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
