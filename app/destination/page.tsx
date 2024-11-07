import Navbar from "@/components/Navbar";
import Image from "next/image";

const items = [
  {
    img_url: "/destination/shiekh-zayed1.jpg",
    title: "El Sheikh Zayed",
  },
  {
    img_url: "/destination/5th-settlement.jpg",
    title: "5th Settlement",
  },
  {
    img_url: "/destination/new-cairo.jpg",
    title: "New Cairo",
  },
  {
    img_url: "/destination/new-zayed.jpg",
    title: "New Zayed",
  },
  {
    img_url: "/destination/the-new-administrative-capital.jpg",
    title: "The New Administrative Capital",
  },
  {
    img_url: "/destination/sahel.jpg",
    title: "Sahel",
  },
  {
    img_url: "/destination/ain-sokhna.jpg",
    title: "Ain Sokhna",
  },
];

function Form() {
  return (
    <div className="bg-silver h-full">
      <Navbar />
      <div className="container pt-36 flex flex-col justify-center ">
        <h1 className="w-full text-navy text-center text-xl font-bold ">
          Pick up your Destination
        </h1>
        <div className="grid grid-cols-3 gap-4 p-16">
          {items.map((item) => (
            <div
              className="bg-blue-200 p-4 cursor-pointer"
              key={item.title.toUpperCase()}
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.img_url}
                  alt={item.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <p className="w-full text-center text-navy font-semibold pt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
