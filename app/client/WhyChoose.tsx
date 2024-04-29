import Image from "next/image";
import imageOne from "@/public/assets/client-assets/Privacy-Protection.webp";
import imageTWo from "@/public/assets/client-assets/Multiple-offer-and-deals.webp";
import imageThree from "@/public/assets/client-assets/Vetted-Home-Service-Professionals.webp";
import imageFour from "@/public/assets/client-assets/Payment-Protection.webp";

export default function WhyChoose() {
  return (
    <div className="">
      <h2 className="text-primary-20 text-[12px] lg:text-xl uppercase text-left lg:text-center font-normal lg:font-semibold">
        Why Choose Loggworks?
      </h2>
      <p className="text-left lg:text-center text-gray-10 text-2xl lg:text-[2.5rem] font-bold leading-8 lg:leading-[48px] capitalize mt-2 lg:mt-6">
        Security, Satisfaction, Support
      </p>
      <p className="text-base lg:text-xl lg:text-center mt-4 text-gray-30">
        Experience Peace of Mind with Protected Payments and <br />
        Expert Home Services—Guaranteed
      </p>

      <div className="mt-8 lg:mt-[4.5rem] grid grid-cols-1 lg:grid-cols-4 gap-6 pb-4">
        <div className="col-span-4 flex flex-col-reverse lg:flex-row justify-between items-center rounded-[8px] overflow-hidden shadow-lg px-4 lg:px-0 py-4 lg:py-0 gap-4">
          <div className="lg:w-[40%] lg:px-10 bg-white">
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Privacy Protection
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Your privacy is our top priority. At Loggworks, we ensure your
              personal information remains confidential and secure. Our system
              is meticulously designed, so you never need to share sensitive
              details directly with tradespeople or home service professionals.
              You can communicate securely using our platform's direct messaging
              feature, maintaining your privacy until you're ready to make a
              booking.
            </p>
          </div>
          <div className="lg:w-[60%] bg-gray-90 p-12">
            <Image
              src={imageOne}
              alt={"privacy protection image"}
              className="w-full object-cover "
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5 px-4 lg:px-0 py-4 lg:py-0">
          <div className="w-full px-10 py-5  rounded-md bg-gray-90">
            <Image
              src={imageTWo}
              alt="Multiple-offer-and-deals"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-4 lg:p-12">
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Multiple offer and deals
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Receive multiple offers and 'deal of the day' from professionals,
              enabling you to save even more.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse h-full justify-between col-span-4 lg:col-span-2 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5 px-4 lg:px-0 py-4 lg:py-0">
          <div className="w-full py-11 lg:py-[4.5rem] px-5 lg:px-8 bg-gray-90">
            <Image
              src={imageThree}
              alt="Multiple-offer-and-deals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-4 lg:p-12">
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Vetted Home Service Professionals
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              We are committed to your peace of mind. Loggworks employs the
              rigorous Self-Employed Quality Control Scheme (SEQCS) to
              thoroughly vet every home service professional on our platform.
              This ensures that whether you're looking for transport services,
              pet groomers, plumbers, or even dry cleaning and laundry
              specialists, you’ll find the UK’s most reliable professionals
              right here on Loggworks.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col-reverse lg:flex-row-reverse justify-between items-center rounded-[8px] overflow-hidden shadow-lg px-4 lg:px-0 py-4 lg:py-0">
          <div className="lg:w-[40%] bg-white lg:px-10 mt-4">
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Payment Protection
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Your financial security is our top priority. Loggworks offers an
              integrated escrow service to secure transactions and protect
              clients from premature payments. Your funds are held safely in
              escrow until the job is confirmed to be completed to your
              satisfaction, ensuring that you only pay for work that meets your
              standards. This service provides peace of mind and financial
              security, eliminating concerns about paying upfront without
              guaranteed results.
            </p>
          </div>
          <div className="lg:w-[60%] bg-gray-70 lg:py-12 lg:pl-28 lg:pr-20 p-9">
            <Image src={imageFour} alt={"privacy protection image"} className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
