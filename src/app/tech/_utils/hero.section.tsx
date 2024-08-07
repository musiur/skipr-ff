import ANIM__DeployPurple from "@/components/anims/deploy__purple.anim";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";

import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Hero = () => {
  return (
    <>
      <div className="container py-48 min-[800px]:py-16 overflow-hidden [&>*]:text-darkish">
        <ANIM__FadeInOutOnScroll className="flex flex-col min-[600px]:flex-row items-center justify-between gap-4">
          <ANIM__FadeInOutOnScroll className="space-y-4">
            <div className="flex flex-col text-left">
              {["100% PRIVACY", "BY DESIGN."].map((item: string) => {
                return (
                  <p
                    key={item}
                    className={cn(
                      bebas_neue.className,
                      "uppercase text-[60px] lg:text-[72px] 2xl:text-[80px] leading-[60px] lg:leading-[72px]"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            {/* <p
              className={cn(
                bebas_neue.className,
                "text-left leading-[10] uppercase text-[48px] xl:text-[60px] 2xl:text-[72px] font-bold"
              )}
            >
              
            </p> */}
            <ul className="space-y-2 pb-8">
              {Data__ListOne.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-[14px]"
                  >
                    <div className="w-2 h-2 rounded-full border-2 border-darkish" />
                    {item}
                  </li>
                );
              })}
            </ul>
            <button className="w-[275px] bg-primary text-white border-2 border-darkish">
              Get Access
            </button>
          </ANIM__FadeInOutOnScroll>
          <div className="relative w-[350px] h-[350px] min-[600px]:w-[480px] min-[600px]:h-[480px] min-[1100px]:w-[700px] min-[1100px]:h-[700px] flex items-center justify-center">
            <div className="absolute top-[0%] left-[0%] z-[-1] flex items-center justify-center">
              <ANIM__DeployPurple className="min-w-80 min-h-80" />
            </div>
            <Image
              src="/tech-hero.png"
              alt="tech hero image"
              width={1000}
              height={1000}
              className="w-[200px] h-[200px] min-[600px]:w-[250px] min-[600px]:h-[250px] min-[1100px]:w-[350px] min-[1100px]:h-[350px]"
            />
          </div>
        </ANIM__FadeInOutOnScroll>
      </div>
    </>
  );
};

export default Section__Hero;

const Data__ListOne = [
  "Patent-pending technology.",
  "Skipr does not require your private informaton.",
  "Skipr cannot access your locaton.",
  "Even if we tried, Skipr cannot see your actvites.",
];
