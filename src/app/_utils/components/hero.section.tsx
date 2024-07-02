import { ReactElement } from "react";
import Icon__Man from "../assets/man.icon";
import Icon__MapPin from "../assets/map__pin.icon";
import Icon__Eye from "../assets/eye.icon";
import Image from "next/image";
import Icon__Paytent from "../assets/patent.icon";
import Icon__Android from "../assets/android.icon";
import Icon__Apple from "../assets/apple.icon";
import Icon__Imac from "../assets/imac.icon";
import Icon__Windows from "../assets/windows.icon";
import Icon__Linux from "../assets/linux.icon";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__HomeHero = () => {
  return (
    // from-[#042A45] via-[#391B72] to-[#7338AF]
    <section className="relative z-0 bg-[linear-gradient(72deg,#042A45,#042A45,#391B72,#7338AF,#7338AF)]  overflow-hidden">
      <div className="text-5xl font-bold text-white container section flex flex-col lg:flex-row items-center justify-between gap-4">
        <ANIM__FadeInOutOnScroll className="py-[100px] w-full">
          <h1 className={cn(bebas_neue.className, "")}>
            <span className="underline text-[32px] xl:text-[38px] 2xl:text-[44px] mr-2">
              THE
            </span>
            &nbsp;MOST PRIVATE <br /> AND SECURE SETTING <br /> ON THE PLANET
          </h1>
          <ul className="pt-[50px] flex flex-wrap items-center gap-4">
            <li
              key={1}
              className="text-[#9900FF] text-[16px] font-black max-w-[140px]"
            >
              WHAT MAKES SKIPR VPN DIFFERENT.
            </li>
            {Data__ListItems.map(
              (item: { id: number; text: string; icon: ReactElement }) => {
                const { id, icon, text } = item;
                return (
                  <li
                    key={id}
                    className="flex items-center gap-4 max-w-[240px] [&>svg]:min-w-[50px] [&>svg]:min--[50px] font-normal text-[16px]"
                  >
                    {icon}
                    <p>{text}</p>
                  </li>
                );
              }
            )}
          </ul>
          <ul className="flex flex-wrap items-center gap-8 pt-[100px]">
            <li className="flex items-center gap-4 font-bold text-[16px]">
              <Icon__Paytent />
              PATENT PENDING
              <br /> TECHNOLOGY
            </li>
            <li className="hidden md:block h-16 w-[3px] bg-white"></li>
            <li className="flex-col space-y-4">
              <div className="flex items-center justify-center gap-8">
                <Icon__Android />
                <Icon__Apple />
              </div>
              <p className="text-[14px] text-secondary">AVAILABLE</p>
            </li>
            <li className="hidden md:block h-16 w-[3px] bg-white"></li>
            <li className="flex-col space-y-4">
              <div className="flex items-center justify-center gap-8">
                <Icon__Imac />
                <Icon__Windows />
                <Icon__Linux />
              </div>
              <p className="text-[14px]">COMING VERY SOON</p>
            </li>
            <li className="hidden md:block h-16 w-[3px] bg-white"></li>
            <li>
              <button className="bg-[#157690] text-white border-blue-200">
                Get Skipr Now
              </button>
            </li>
          </ul>
        </ANIM__FadeInOutOnScroll>
        <div className="mt-auto">
          <Image
            src="/heroshield.png"
            alt="heroshield"
            width={1000}
            height={1000}
            className="min-w-[250px] max-w-[300px] h-full"
          />
        </div>
      </div>
      <div className="absolute top-0 -right-[16%] w-[36vw] h-[100dvh] rounded-l-full z-[-1] bg-gradient-to-r from-[#10EDC490] via-[#0CF5C5] to-[#72ffe3] filter blur-[120px] animate-fadeInDown"></div>
    </section>
  );
};

export default Section__HomeHero;

const Data__ListItems = [
  {
    id: 2,
    text: "Skipr cannot see who you are, you are unidentifable.",
    icon: <Icon__Man />,
  },
  {
    id: 3,
    text: "Skipr cannot see  where you are, you are untraceable.",
    icon: <Icon__MapPin />,
  },
  {
    id: 4,
    text: "Skipr cannot see what you do, you are untrackable.",
    icon: <Icon__Eye />,
  },
];
