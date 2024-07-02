import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Icon__CheckCircle from "./_utils/assets/check.icon";
import PriceCard from "./_utils/components/price-card";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Page = () => {
  return (
    <>
      <Navbar color="black" />
      <div className="container py-36 flex flex-col min-[1100px]:flex-row items-center justify-between gap-10">
        <ANIM__FadeInOutOnScroll className="space-y-8">
          <h1
            className={cn(
              bebas_neue.className,
              "text-left leading-10 uppercase"
            )}
          >
            EXPERIENCE THE ULTIMATE
            <br />
            LEVEL OF PRIVACY & SECURITY
          </h1>
          <div className="space-y-2">
            <p className="text-sm">ZERO KNOWLEDGE GUARANTEE</p>
            <ul>
              {Data__ListOne.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 text-xs">
                    <Icon__CheckCircle className="mr-2" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm">TAILORED TO YOUR NEEDS</p>
            <ul>
              {Data__ListTwo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 text-xs">
                    <Icon__CheckCircle className="mr-2" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </ANIM__FadeInOutOnScroll>
        <div className="flex flex-col min-[780px]:flex-row items-center justify-end gap-10">
          {Data__PriceCards.map((card) => {
            return <PriceCard key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;

const Data__ListOne = [
  "No one knows your identty, including Skipr.",
  "Your email and credentals are not required.",
  "We do not know your locaton.",
  "We have no way of monitoring your actvites.",
  "Even Skipr cannot trace anything about you.",
];

const Data__ListTwo = [
  "7 Day Trial",
  "All Features Included",
  "30 Day Money Back Guarantee",
  "Use on Upto 5 devices",
  "All Locatons Included",
  "Cancel Anytme",
];

const Data__PriceCards = [
  {
    id: 1,
    image: "/price-bg-1.png",
    price: "16.99",
    tagline: "MOST POPULAR",
    bottomPrice: "16.99",
    bottomText: "billed every month.",
  },
  {
    id: 2,
    image: "/price-bg-2.png",
    price: "14.99",
    tagline: "BEST DEAL",
    bottomPrice: "174.88",
    bottomText: "billed once anually",
  },
];
