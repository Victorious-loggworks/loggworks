import categories from "@/app/data/clientCategories";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="container px-5 lg:px-20">
        <h1 className="text-2xl lg:text-[2.5rem] text-left lg:text-center font-semibold lg:font-bold capitalize text-gray-10 text-opacity-90">
          Explore services by categories
        </h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-[4.5rem]">
        {categories.map((category) => (
            <div key={category.id} className="bg-gray-90 px-4 py-2 md:p-6 flex items-center gap-4 font-medium rounded-lg">
                <Image src={category.src} alt={"category icon"} width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-[10px] md:text-base">{category.name}</span>
            </div>
        ))}
      </div>
    </div>
  );
}
