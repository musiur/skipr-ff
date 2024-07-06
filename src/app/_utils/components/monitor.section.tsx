import Icon__EyeOn from "../assets/eye__on.icon";
import Icon__EyeOff from "../assets/eye__off.icon";
import clsx from "clsx";
import BrandIcon from "../assets/brand__icon.icon";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import ANIM__DeployPurple from "@/components/anims/deploy__purple.anim";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Monitor = () => {
  return (
    <section className="container section flex flex-col justify-center items-center gap-8 [&>*]:text-darkish">
      <ANIM__FadeInOutOnScroll>
        <h2
          className={cn(
            bebas_neue.className,
            "text-center leading-[0.9] [&>span]:text-primary"
          )}
        >
          ABSOLUTELY NO ONE SHOULD <br />
          BE ABLE TO MONITOR YOU. <span>IT IS YOUR RIGHT.</span>
        </h2>
      </ANIM__FadeInOutOnScroll>

      <ul className="relative w-auto md:w-full flex flex-col md:grid grid-cols-1 md:grid-cols-3 items-start justify-start md:justify-center gap-8">
        {Data__Cards.map((card) => (
          <li
            key={card.id}
            className="w-auto md:w-full flex flex-row md:flex-col jusitfy-start md:justify-center items-start md:items-center gap-8"
          >
            <div className="relative min-w-20 max-w-20 min-h-20 max-h-20 rounded-full flex items-center justify-center">
              {card.id === 3 ? (
                <>
                  <div className="absolute top-0 left-0 z-1 w-full h-full flex items-center justify-center">
                    <ANIM__DeployPurple className="min-w-40 min-h-40" />
                  </div>

                  <div className="z-30 absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <div className="rounded-full min-w-[94px] max-w-[94px] max-h-[94px] min-h-[94px] bg-gradient-to-tr from-primary to-secondary delay-300 flex items-center justify-center">
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
                      "bg-gradient-to-b md:bg-gradient-to-r from-white via-[#fbf8fd] to-[#f0dbff]":
                        card.id === 2,
                    }
                  )}
                ></div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-center justify-center gap-4">
              <ANIM__FadeInOutOnScroll className="flex flex-col items-start md:items-center justify-center gap-0">
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

              <ANIM__FadeInOutOnScroll className="flex flex-col items-start md:items-center justify-center gap-2">
                <h3 className="text-[14px] md:text-[16px] font-bold">
                  {card.subSubTitle}
                </h3>
                <ul className="flex flex-col items-start md:items-center justify-center gap-0">
                  {card.list.map((item) => (
                    <li key={item} className="text-[18px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </ANIM__FadeInOutOnScroll>
            </div>
          </li>
        ))}
        <div className="absolute z-0 top-[20px] md:top-[43px] left-0 w-[16px] md:w-[66%] ml-[33px] md:ml-[16%] h-[75%] md:h-3 min-h-3 bg-gradient-to-b md:bg-gradient-to-r from-white via-white to-[#e4c2fa] border-x-[3px] md:border-x-0 border-y-0 md:border-y-[3px] border-darkish" />

        <div className="absolute z-10 top-[22px] md:top-[46px] left-0 w-[10px] md:w-[66%] ml-[36px] md:ml-[16%] h-[75%] md:h-[9px] min-h-[9px] bg-gradient-to-b md:bg-gradient-to-r from-white via-59% md:via-46% via-white to-[#793EF7] border-darkish " />
      </ul>

      <ANIM__FadeInOutOnScroll className="pt-8">
        <button className="bg-primary text-white border-darkish w-[196.54px] h-[33.3px]">
          Get Access
        </button>
      </ANIM__FadeInOutOnScroll>
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
