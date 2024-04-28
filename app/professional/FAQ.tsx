import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import useInitialOpen from "@/components/ui/initialOpen";

export default function FAQs() {
  const defaultValue = "0";

  return (
    <div className="container px-20">
      <div className="mt-16 flex gap-8">
        <div className="w-[40%]">
          <h2 className="uppercase text-primary-20 font-semibold text-xl leading-8">
            FAQs
          </h2>
          <h3 className="text-[2.5rem] capitalize leading-[3rem] font-bold text-gray-10 text-opacity-90 mb-4">
            Have questions?
            <br />
            We’ve got the solution.
          </h3>
          <p className="text-gray-30 text-xl lead">
            To get in touch with the Loggworks team, <br />
            send us an email at Info@loggworks.co.uk
          </p>

          <Button className="bg-primary-20 hover:bg-primary-20 font-semibold mt-8 py-6 px-5 rounded-md">
            Contact Support
          </Button>
        </div>
        <div className="flex flex-col mb-10 w-[60%] pl-8">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-6 text-gray-10 text-opacity-90"
          >
            <AccordionItem
              value="item-1"
              className="bg-gray-90 border-none p-8 rounded-[6px]"
            >
              <AccordionTrigger className="text-xl hover:no-underline py-0">
                What is Loggworks?
              </AccordionTrigger>
              <AccordionContent className="text-[1.125rem] mt-6 pb-0 leading-7">
                Loggworks is a platform connecting Home service consumers
                (Homeowners, Tenants and Property managers) to Service
                Professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-gray-90 border-none p-8 rounded-[6px]"
            >
              <AccordionTrigger className="text-xl hover:no-underline py-0">
                How does Loggworks work?
              </AccordionTrigger>
              <AccordionContent className="text-[1.125rem] mt-6 pb-0 leading-7">
                Loggworks is a platform connecting Home service consumers
                (Homeowners, Tenants and Property managers) to Service
                Professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-gray-90 border-none p-8 rounded-[6px]"
            >
              <AccordionTrigger className="text-xl hover:no-underline py-0">
                Why would I use Loggworks
              </AccordionTrigger>
              <AccordionContent className="text-[1.125rem] mt-6 pb-0 leading-7">
                Loggworks is a platform connecting Home service consumers
                (Homeowners, Tenants and Property managers) to Service
                Professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-gray-90 border-none p-8 rounded-[6px]"
            >
              <AccordionTrigger className="text-xl text hover:no-underline py-0">
                Do you vet service professionals who sign up on Loggworks
              </AccordionTrigger>
              <AccordionContent className="text-[1.125rem] mt-6 pb-0 leading-7">
                Loggworks is a platform connecting Home service consumers
                (Homeowners, Tenants and Property managers) to Service
                Professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="bg-gray-90 border-none p-8 rounded-[6px]"
            >
              <AccordionTrigger className="text-xl hover:no-underline py-0">
                I have more questions
              </AccordionTrigger>
              <AccordionContent className="text-[1.125rem] mt-6 pb-0 leading-7">
                Loggworks is a platform connecting Home service consumers
                (Homeowners, Tenants and Property managers) to Service
                Professionals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
