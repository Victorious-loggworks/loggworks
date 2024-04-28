import Accordian, { AccordianItem } from "./Accordion";

export default function Operations() {

    const defaultValue = "0";

  return (
    <div className="container px-5 lg:px-20">
      <div className="text-center">
        <p className="text-primary-20 font-semibold uppercase text-[20px] mb-4">FOR PROFESSIONALS</p>
        <h2 className="text-2xl lg:text-[40px] font-bold mb-4 text-gray-10">
          Optimize Operations, Minimize Costs, Maximize Reach
        </h2>
        <p className="text-xl text-gray-30">
          Transform Your Home Service Business with Loggworks
        </p>
      </div>
      <div className="mt-16 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[713px] h-[388px] lg:h-[815px] bg-gray-200 rounded-lg "></div>
        <main className="flex flex-col mb-10 lg:w-[40%] pl-8">
                <Accordian value={defaultValue} className="">
                    <AccordianItem value="1" trigger="Efficient Job Management" imageName="icon-1.svg">
                        <h4 className="text-[32px] font-bold mt-2 text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>

                    <AccordianItem value="2" trigger="Keep Your Admin Costs Low" imageName="icon-2.svg">
                        <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>

                    <AccordianItem value="3" trigger="Cut Business Costs" imageName="icon-3.svg">
                        <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>

                    <AccordianItem value="4" trigger="Expand Your Reach" imageName="icon-4.svg">
                        <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>

                    <AccordianItem value="5" trigger="Simplified Financial Management" imageName="icon-5.svg">
                        <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>

                    <AccordianItem value="6" trigger="Online Business Visibility" imageName="icon-6.svg">
                        <h4 className="text-[32px] font-bold text-gray-10 text-opacity-90">Streamline Operations</h4>
                        <p className="text-gray-40 text-[18px] mt-4">Centralize and automate scheduling to effortlessly manage jobs, appointments, and deadlines. Save time and reduce stress with Loggworks.</p>
                    </AccordianItem>
                </Accordian>

            </main>
      </div>
    </div>
  );
}
