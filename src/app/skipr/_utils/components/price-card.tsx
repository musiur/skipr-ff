import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@udecode/cn";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});
const PriceCard = ({ data }: { data: any }) => {
  const { image, tagline, price, bottomPrice, bottomText } = data;
  return (
    <div className="min-w-[300px] w-[300px] max-w-[300px] shadow-[4px_4px_10px_black] p-6 [&>*]:text-white rounded-md">
      <div className="relative">
        <Image
          src={image}
          alt="priceCardBackgroundImage"
          fill={true}
          className="object-cover object-center z-[-1]"
        />
        <div className="space-y-4 text-center py-6 px-2">
          <p className="text-white text-xs">{tagline}</p>
          <div
            className={cn(
              bebas_neue.className,
              "leading-loose uppercase text-5xl md:text-6xl relative inline-block"
            )}
          >
            ${price}
            <span className="absolute -bottom-1 -right-4">PM</span>
          </div>
          <div>
            <p className="text-xs">ONGOING USAGE</p>
            <p className="text-xs">
              {bottomPrice} {bottomText}
            </p>
          </div>
          <button className="bg-white border-[3px] border-darkish text-darkish max-w-[150px] mx-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
