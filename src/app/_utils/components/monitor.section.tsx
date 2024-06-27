import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Icon__EyeOn from "../assets/eye__on.icon";
import Icon__EyeOff from "../assets/eye__off.icon";
import clsx from "clsx";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Monitor = () => {
  return (
    <div className="container section flex flex-col justify-center items-center gap-8">
      <h1
        className={cn(
          bebas_neue.className,
          "text-center leading-10 [&>span]:text-primary"
        )}
      >
        ABSOLUTELY NO ONE SHOULD <br />
        BE ABLE TO MONITOR YOU. <span>IT IS YOUR RIGHT.</span>
      </h1>
      <ul className="relative w-full grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-8">
        {Data__Cards.map((card) => (
          <li
            key={card.id}
            className="w-full flex flex-col justify-center items-center gap-4"
          >
            <div className="relative min-w-20 max-w-20 min-h-20 max-h-20 border rounded-full my-16 flex items-center justify-center">
              {card.id === 3 ? (
                <div className="animate-ping rounded-full min-w-12 max-w-12 max-h-12 min-h-12 bg-primary delay-500 flex items-center justify-center">
                  <div className="animate-ping rounded-full min-w-12 max-w-12 max-h-12 min-h-12 bg-primary/80 delay-300 flex items-center justify-center"></div>
                </div>
              ) : null}
              <div className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="relative min-w-16 max-w-16 max-h-16 min-h-16 border-2 border-darkish bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-0">
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
            </div>
            <div className="w-[32px] h-[32px]">{card.icon}</div>
            <div className="flex flex-col items-center justify-center gap-2">
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
            </div>
          </li>
        ))}
        <div className="absolute hidden md:block z-10 top-[124px] left-0 w-[66%] ml-[16%] min-h-3 bg-gradient-to-r from-white via-white to-[#e4c2fa] border-y-2 border-darkish">
          <div className="w-full h-full">
            <div className="absolute top-[-34px] left-[-44px] z-30 min-w-[76px] max-w-[76px] max-h-[76px] min-h-[76px] border-2 border-white bg-white rounded-full"></div>
            <div className="absolute top-[-34px] left-[-44px] z-30 min-w-[76px] max-w-[76px] max-h-[76px] min-h-[76px] border-2 border-white bg-black rounded-full"></div>
            <div className="absolute top-[-34px] right-0 z-30 min-w-[76px] max-w-[76px] max-h-[76px] min-h-[76px] border-2 border-white bg-black rounded-full"></div>
          </div>
        </div>
      </ul>
    </div>
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
