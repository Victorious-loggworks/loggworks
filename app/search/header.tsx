import Navbar from "../components/Home/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Spacer from "../components/Home/Spacer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function SearchHeader() {
  return (
    <div>
      <Navbar />
      <Spacer />
      <div className="container px-5 lg:px-20">
        <Breadcrumb className="mb-8 text-[12px] md:text-base">
          <BreadcrumbList>
            <BreadcrumbItem className="uppercase font-mediun text-gray-10 text-opacity-90 font-medium">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="uppercase font-mediun text-gray-10 text-opacity-90 font-medium">
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="uppercase font-mediun">
              <BreadcrumbPage className="text-primary-20 font-medium">
                Breadcrumb
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h2 className="text-base lg:text-[2.5rem] text-gray-10 text-opacity-90 font-bold">
          Caterers near London
        </h2>

        <div className="flex gap-6 text-gray-10 text-opacity-90 mt-6">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm lg:text-lg outline-none py-2 px-5 bg-gray-90 rounded-full">
                Sort By
                <ChevronDown className="ml-2 w-4 h-4 text-gray-10" />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex w-[280px] p-8 text-gray-10 text-opacity-90">
                <div className="">
                  <form action="" className="flex flex-col gap-3">
                    <p className="flex items-center">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity- ml-4"
                      >
                        Relevance
                      </label>
                    </p>
                    <p className="flex items-center">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity- ml-4"
                      >
                        Nearest
                      </label>
                    </p>
                    <p className="flex items-center">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity- ml-4"
                      >
                        Most Reviewed
                      </label>
                    </p>
                    <p className="flex items-center">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity- ml-4"
                      >
                        Top Rated
                      </label>
                    </p>
                  </form>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
