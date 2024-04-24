import Accordian, { AccordianItem } from "./Accordion";

export default function Operations() {
  const defaultValue = "0";

  return (
    <div className="mt-16 flex flex-row-reverse gap-8">
      <div className="w-[713px] h-[655px] bg-gray-200 rounded-lg "></div>
      <main className="flex flex-col mb-10 w-[40%] pr-8">
        <Accordian value={defaultValue} className="">
          <AccordianItem
            value="1"
            trigger="1. Create Your Profile"
          >
            <h4 className="text-[32px] font-bold mt-2 text-gray-10 text-opacity-90">
              Showcase Your Expertise
            </h4>
            <p className="text-gray-40 text-[18px] mt-4">
              Sign up and showcase your expertise by creating a professional
              profile. Highlight your skills, display past jobs, and set the
              stage for clients to find you.
            </p>
          </AccordianItem>

          <AccordianItem
            value="2"
            trigger="2. Customers Job Requests"
          >
            <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 text-[18px] mt-4">
              Centralize and automate scheduling to effortlessly manage jobs,
              appointments, and deadlines. Save time and reduce stress with
              Loggworks.
            </p>
          </AccordianItem>

          <AccordianItem
            value="3"
            trigger="3. Quote And Invoice"
          >
            <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 text-[18px] mt-4">
              Centralize and automate scheduling to effortlessly manage jobs,
              appointments, and deadlines. Save time and reduce stress with
              Loggworks.
            </p>
          </AccordianItem>

          <AccordianItem
            value="4"
            trigger="4. Completion and Payment"
          >
            <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">
              Streamline Operations
            </h4>
            <p className="text-gray-40 text-[18px] mt-4">
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
