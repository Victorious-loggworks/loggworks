import Image from "next/image";

export default function Blog() {
  return (
    <div className="px-20 container">
      <div className="">
        <h2 className="text-[40px] font-bold text-gray-10 mb-4">Our Blog</h2>
        <div className="text-gray-10">
          <span className="bg-gray-90 py-3 px-4 rounded-full mr-3">
            For Consumers
          </span>
          <span className="bg-gray-90 py-3 px-4 rounded-full mr-3">
            For Professionals
          </span>
          <span className="bg-gray-90 py-3 px-4 rounded-full">
            News & Updates
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={"/assets/blog/image-1.webp"}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="w-full h-auto"
            />
            <div className="px-5 py-6">
              <span className="bg-gray-90 tracking-wide text-gray-10 text-[12px] font-semibold p-2 rounded-full mr-3">
                Business Advice
              </span>
              <span className="text-gray-10 text-[12px] tracking-wide">
                3 mins read
              </span>
              <div className="">
                <h4 className="text-[20px] mt-4 mb-3 font-bold text-gray-10 leading-6">
                  Navigating Challenges: Lessons from Business Failures
                </h4>
                <p className="text-gray-20 text-[12px]">
                  Loggworks helps you get special offers, connect you to top
                  vetted and reliable service professionals with the
                </p>

                <div className="text-[12px] text-gray-30 mt-4">
                  <span className="mr-3">Christina Williams</span>
                  <span>January 18th, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={"/assets/blog/image-2.webp"}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="w-full h-auto"
            />
            <div className="px-5 py-6">
              <span className="bg-gray-90 tracking-wide text-gray-10 text-[12px] font-semibold p-2 rounded-full mr-3">
              How To
              </span>
              <span className="text-gray-10 text-[12px] tracking-wide">
                3 mins read
              </span>
              <div className="">
                <h4 className="text-[20px] mt-4 mb-3 font-bold text-gray-10 leading-6">
                Health, Wellness & Beauty Pricing Guide
                </h4>
                <p className="text-gray-20 text-[12px]">
                Embarking on a journey toward optimal health, wellness, and beauty involves not only commitment but...
                </p>

                <div className="text-[12px] text-gray-30 mt-4">
                  <span className="mr-3">Christina Williams</span>
                  <span>January 18th, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={"/assets/blog/image-3.webp"}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="w-full h-auto"
            />
            <div className="px-5 py-6">
              <span className="bg-gray-90 tracking-wide text-gray-10 text-[12px] font-semibold p-2 rounded-full mr-3">
                Finance Advice
              </span>
              <span className="text-gray-10 text-[12px] tracking-wide">
                3 mins read
              </span>
              <div className="">
                <h4 className="text-[20px] mt-4 mb-3 font-bold text-gray-10 leading-6">
                    Smart Investment Strategies for Business Owners
                </h4>
                <p className="text-gray-20 text-[12px]">
                We are committed to providing you with the best tools possible, and our product updates are designed...
                </p>

                <div className="text-[12px] text-gray-30 mt-4">
                  <span className="mr-3">Christina Williams</span>
                  <span>January 18th, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
