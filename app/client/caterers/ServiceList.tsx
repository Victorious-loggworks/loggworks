import Image from "next/image";

const imageList = [
    {
        id: 1,
        name: "Electrician",
        src: "/assets/services/electrician.png"
    },
    {
        id: 2,
        name: "Handyman",
        src: "/assets/services/handyman.png"
    },
    {
        id: 3,
        name: "Carpenters",
        src: "/assets/services/carpenters.png"
    },
    {
        id: 4,
        name: "Cleaners",
        src: "/assets/services/cleaners.png"
    },
];

export default function ServiceList() {
    return (
        <div className="">
            <div className="container px-5 lg:px-20">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-12">
                    {imageList.map((image) => (
                        <div key={image.id} className="relative flex w-fit rounded-lg overflow-hidden">
                            <Image src={image.src} alt={image.name} width={292} height={344} />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-[100px]"></div>

                            <p className="text-white text-[18px] absolute bottom-3 font-medium left-2">{image.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}