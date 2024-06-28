import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Icon__SuperFast from "../assets/super__fast.icon";
import Icon__SuperStable from "../assets/super__stable.icon";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Features = () => {
  return (
    <>
      <section className="section pt-[90px] ">
        <div className="container flex flex-col justify-center items-center gap-8">
          <ANIM__FadeInOutOnScroll>
            <h1 className={cn(bebas_neue.className, "text-center")}>
              <span className="underline text-[32px] xl:text-[38px] 2xl:text-[44px] mr-2">
                THE
              </span>
              &nbsp;MOST SECURE YOU CAN GET <br /> IN EVERYTHING THAT YOU DO
            </h1>
          </ANIM__FadeInOutOnScroll>
          <ANIM__FadeInOutOnScroll className="px-0 md:px-[12%] pb-32 w-full grid grid-cols-4 [&>*]:text-center gap-10">
            {Data__FeatureCards.map((item) => {
              const { id, text, image } = item;
              return (
                <ANIM__FadeInOutOnScroll
                  key={id}
                  className="max-w-[300px] flex flex-col items-center justify-center gap-4"
                >
                  <Image
                    src={image || "wifi.svg"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="max-w-[120px] h-auto"
                  />
                  <h3 className="text-[16px] md:text-[18px] font-semibold">
                    {text}
                  </h3>
                </ANIM__FadeInOutOnScroll>
              );
            })}
          </ANIM__FadeInOutOnScroll>
          <ANIM__FadeInOutOnScroll className="pt-8">
            <button className="bg-primary text-white border-blue-100 min-w-[240px]">
              Get Access
            </button>
          </ANIM__FadeInOutOnScroll>
        </div>
      </section>
    </>
  );
};

export default Section__Features;

const Data__FeatureCards = [
  {
    id: 1,
    text: "Public Wif Protection",
    image: "wifi.svg",
  },
];
