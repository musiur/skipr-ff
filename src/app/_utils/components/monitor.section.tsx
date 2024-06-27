import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Icon__EyeOn from "../assets/eye__on.icon";
import Icon__EyeOff from "../assets/eye__off.icon";
import clsx from "clsx";
import BrandIcon from "../assets/brand__icon.icon";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Monitor = () => {
  return (
    <section className="container section flex flex-col justify-center items-center gap-8">
      <ANIM__FadeInOutOnScroll>
        <h1
          className={cn(
            bebas_neue.className,
            "text-center leading-10 [&>span]:text-primary"
          )}
        >
          ABSOLUTELY NO ONE SHOULD <br />
          BE ABLE TO MONITOR YOU. <span>IT IS YOUR RIGHT.</span>
        </h1>
      </ANIM__FadeInOutOnScroll>

      <ul className="relative w-full grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-8">
        {Data__Cards.map((card) => (
          <li
            key={card.id}
            className="w-full flex flex-col justify-center items-center gap-4"
          >
            <div className="relative min-w-20 max-w-20 min-h-20 max-h-20 rounded-full flex items-center justify-center">
              {card.id === 3 ? (
                <>
                  <div className="animate-ping rounded-full min-w-12 max-w-12 max-h-12 min-h-12 border-2 border-primary delay-300 flex items-center justify-center">
                    <div className="animate-ping rounded-full min-w-12 max-w-12 max-h-12 min-h-12 border-2 border-primary/80 delay-700 flex items-center justify-center"></div>
                  </div>
                  <div className="z-30 absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <div className="rounded-full min-w-[74px] max-w-[74px] max-h-[74px] min-h-[74px] bg-gradient-to-tr from-primary to-secondary delay-300 flex items-center justify-center">
                      <BrandIcon className="fill-black stroke-black" />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className={clsx(
                    "relative border-[3px] border-darkish  rounded-full",
                    {
                      "min-w-16 max-w-16 max-h-16 min-h-16 bg-white":
                        card.id === 3,
                      "min-w-12 max-w-12 max-h-12 min-h-12 bg-white":
                        card.id !== 3,
                      "bg-gradient-to-tr from-white via-[#fbf8fd] to-[#f0dbff]":
                        card.id === 2,
                    }
                  )}
                ></div>
              </div>
            </div>
            <ANIM__FadeInOutOnScroll className="flex flex-col items-center justify-center gap-0">
              <h2 className="text-[16px] md:text-[22px] font-black">
                {card.title}
              </h2>
              <p
                className={clsx("text-[14px] md:text-[16px] font-bold", {
                  "text-primary": card.id === 3,
                })}
              >
                {card.subTitle}
              </p>
            </ANIM__FadeInOutOnScroll>
            <ANIM__FadeInOutOnScroll>
              {card.id === 3 ? (
                <Icon__EyeOff className="h-[36px]" />
              ) : (
                <Icon__EyeOn />
              )}
            </ANIM__FadeInOutOnScroll>

            <ANIM__FadeInOutOnScroll className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-[14px] md:text-[16px] font-bold">
                {card.subSubTitle}
              </h3>
              <ul className="flex flex-col items-center justify-center gap-0">
                {card.list.map((item) => (
                  <li key={item} className="text-[18px]">
                    {item}
                  </li>
                ))}
              </ul>
            </ANIM__FadeInOutOnScroll>
          </li>
        ))}
        <div className="absolute hidden md:block z-0 top-[43px] left-0 w-[66%] ml-[16%] min-h-3 bg-gradient-to-r from-white via-white to-[#e4c2fa] border-y-[3px] border-darkish"></div>
        <div className="absolute hidden md:block z-10 top-[46px] left-0 w-[66%] ml-[16%] min-h-[9px] bg-gradient-to-r from-white via-white to-[#793EF7] border-y-[3px] border-darkish/0"></div>
      </ul>
    </section>
  );
};

export default Section__Monitor;

const Data__Cards = [
  {
    id: 1,
    title: "NO VPN",
    subTitle: "NO PRIVACY",
    icon: <Icon__EyeOn />,
    subSubTitle: "YOU COULD BE VISIBLE TO:",
    list: [
      "Your Telecom",
      "Your Government",
      "Advertsers",
      "Your Hackers",
      "Public Wif Providers",
      "Network Administrators",
    ],
  },
  {
    id: 2,
    title: "MOST VPNs",
    subTitle: "MODERATE PRIVACY",
    icon: <Icon__EyeOn />,
    subSubTitle: "YOU ClistD BE VISIBLE TO:",
    list: [
      "Your VPN Provider",
      "VPN Jurisdicton",
      "Advertsers",
      "Your Hackers",
    ],
  },
  {
    id: 3,
    title: "SKIPR",
    subTitle: "ABSOLUTE 100% PRIVACY",
    icon: <Icon__EyeOff />,
    subSubTitle: "YOU ARE VISIBLE TO:",
    list: [
      "No one. ot a single person",
      "sees who you are, where you",
      "are or what you do.",
    ],
  },
];
