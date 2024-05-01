import Accordian, { AccordianItem } from "./Accordion";
import Image from "next/image";

export default function Operations() {
  const defaultValue = "0";

  return (
    <div className="mt-8 lg:mt-16 flex flex-col-reverse lg:flex-row-reverse gap-8">
      <div className="w-full lg:w-[713px] h-[400px] lg:h-[655px] overflow-hidden bg-slate-200 rounded-lg ">
        <Image
          src={"/assets/why-choose-loggworks/showcase-your-expertise.webp"}
          alt={"showcase your expertise"}
          width={1465}
          height={1380}
          className="h-full w-full"
        />
      </div>
      <main className="flex flex-col mb-10 lg:w-[40%] lg:pr-8">
        <Accordian value={defaultValue} className="">
          <AccordianItem value="1" trigger="1. Create Your Profile">
            <h4 className="text-2xl lg:text-[2rem] font-semibold lg:font-bold mt-2 text-gray-10 text-opacity-90">
              Showcase Your Expertise
            </h4>
            <p className="text-gray-40 lg:text-[18px] mt-4">
              Sign up and showcase your expertise by creating a professional
              profile. Highlight your skills, display past jobs, and set the
              stage for clients to find you.
            </p>
          </AccordianItem>

          <AccordianItem value="2" trigger="2. Customers Job Requests">
            <h4 className="text-2xl lg:text-[2rem] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 lg:text-[18px] mt-4">
              Centralize and automate scheduling to effortlessly manage jobs,
              appointments, and deadlines. Save time and reduce stress with
              Loggworks.
            </p>
          </AccordianItem>

          <AccordianItem value="3" trigger="3. Quote And Invoice">
            <h4 className="text-2xl lg:text-[2rem] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 lg:text-[18px] mt-4">
              Centralize and automate scheduling to effortlessly manage jobs,
              appointments, and deadlines. Save time and reduce stress with
              Loggworks.
            </p>
          </AccordianItem>

          <AccordianItem value="4" trigger="4. Completion and Payment">
            <h4 className="text-2xl lg:text-[2rem] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 lg:text-[18px] mt-4">
              Centralize and automate scheduling to effortlessly manage jobs,
              appointments, and deadlines. Save time and reduce stress with
              Loggworks.
            </p>
          </AccordianItem>
        </Accordian>
      </main>
    </div>
  );
}
