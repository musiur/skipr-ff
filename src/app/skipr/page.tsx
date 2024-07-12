import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";
import { Bebas_Neue, Lato } from "next/font/google";
import Icon__CheckCircle from "./_utils/assets/check.icon";
import PriceCard from "./_utils/components/price-card";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const lato = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "The Skipr Scoop",
  description: "Generated by create next app",
  keywords: "The Skipr Scoop",
  openGraph: {
    images: [
      {
        url: "https://w3mantra.com/skipr_wp/wp-content/uploads/2021/10/Group-1.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};
const Page = () => {
  return (
    <>
      <Navbar color="black" />
      <div className="container py-48 flex flex-col [@media(min-width:1100px)]:flex-row items-center justify-between gap-10">
        <ANIM__FadeInOutOnScroll className="space-y-8 ">
          <h1
            className={cn(
              bebas_neue.className,
              "text-left leading-[32px] uppercase text-[#001C2F]  xl:text-[37px]"
            )}
          >
            EXPERIENCE THE ULTIMATE
            <br />
            LEVEL OF PRIVACY & SECURITY
          </h1>
          <div className="space-y-2">
            <p className={cn(lato.className, ` text-sm text-[#001C2F]`) }>ZERO KNOWLEDGE GUARANTEE</p>
            <ul className={cn(lato.className) }>
              {Data__ListOne.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 text-xs pb-[5px] text-[#001C2F]">
                    <Icon__CheckCircle className="mr-2" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <p className={cn(lato.className, ` text-sm`) }>TAILORED TO YOUR NEEDS</p>
            <ul className={cn(lato.className) }>
              {Data__ListTwo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 text-xs pb-[5px] text-[#001C2F]">
                    <Icon__CheckCircle className="mr-2" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </ANIM__FadeInOutOnScroll>
        <div className="flex flex-col [@media(min-width:780px)]:flex-row items-center justify-end gap-10">
          {Data__PriceCards.map((card) => {
            return <PriceCard key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });

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
