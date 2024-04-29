import categories from "@/app/data/clientCategories";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="container px-20">
      {/* <div class> */}
        <h1 className="text-3xl text-center font-bold capitalize text-gray-10 text-opacity-90">
          Explore services by categories
        </h1>
      {/* </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-[4.5rem]">
        {categories.map((category) => (
            <div key={category.id} className="bg-gray-90 p-6 flex items-center gap-4 font-medium rounded-lg">
                <Image src={category.src} alt={"category icon"} width={32} height={32} />
                <span>{category.name}</span>
            </div>
        ))}
      </div>
    </div>
  );
}
