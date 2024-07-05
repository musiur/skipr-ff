import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Platforms = () => {
  return (
    <>
      <section className="pb-24 [&>*]:text-darkish">
        <div className="container flex flex-col justify-center items-center gap-8 ">
          <ANIM__FadeInOutOnScroll>
            <h1
              className={cn(
                bebas_neue.className,
                "text-center leading-10 uppercase"
              )}
            >
              available now on ios and android
            </h1>
          </ANIM__FadeInOutOnScroll>
          <div className="inline-flex flex-col [@media(min-width:650px)]:flex-row items-center [@media(min-width:650px)]:items-start justify-center gap-14 mx-auto">
            <ANIM__FadeInOutOnScroll className="flex flex-col items-center justify-center [&>*]:text-center gap-4">
              <h3 className="text-[20px] md:text-[24px] text-center">
                AVAILABLE
              </h3>
              <ANIM__FadeInOutOnScroll className="flex flex-col [@media(min-width:650px)]:flex-row flex-wrap gap-4 items-center justify-center">
                {Data__FeatureCards.slice(0, 2).map((item) => {
                  const { id, text, image } = item;
                  return (
                    <ANIM__FadeInOutOnScroll
                      key={id}
                      className="flex flex-col items-center justify-center gap-4"
                    >
                      <Image
                        src={image || "wifi.svg"}
                        alt=""
                        width={1000}
                        height={1000}
                        className="max-w-[100px] h-auto"
                      />
                      <h3 className="text-[16px] md:text-[18px] font-semibold">
                        {text}
                      </h3>
                    </ANIM__FadeInOutOnScroll>
                  );
                })}
              </ANIM__FadeInOutOnScroll>
            </ANIM__FadeInOutOnScroll>
            <ANIM__FadeInOutOnScroll className="flex flex-col items-center justify-center [&>*]:text-center gap-4">
              <h3 className="text-[20px] md:text-[24px] text-center">
                COMING VERY SOON
              </h3>
              <ANIM__FadeInOutOnScroll className="flex flex-col [@media(min-width:650px)]:flex-row flex-wrap md:flex-nowrap gap-4 items-center justify-center">
                {Data__FeatureCards.slice(2).map((item) => {
                  const { id, text, image } = item;
                  return (
                    <ANIM__FadeInOutOnScroll
                      key={id}
                      className="flex flex-col items-center justify-center gap-4"
                    >
                      <Image
                        src={image || "wifi.svg"}
                        alt=""
                        width={1000}
                        height={1000}
                        className="max-w-[100px] h-auto"
                      />
                      <h3 className="text-[16px] md:text-[18px] font-semibold">
                        {text}
                      </h3>
                    </ANIM__FadeInOutOnScroll>
                  );
                })}
              </ANIM__FadeInOutOnScroll>
            </ANIM__FadeInOutOnScroll>
          </div>
        </div>
      </section>
      <ANIM__FadeInOutOnScroll className="relative bg-darkish h-32 clip-path-curve">
        <div className="absolute inset-x-0 top-0 mt-4 text-center"></div>
      </ANIM__FadeInOutOnScroll>
    </>
  );
};

export default Section__Platforms;

const Data__FeatureCards = [
  {
    id: 1,
    text: "Android",
    image: "android.svg",
  },
  {
    id: 2,
    text: "iOS",
    image: "ios.svg",
  },
  {
    id: 3,
    text: "MacOS",
    image: "macos.svg",
  },
  {
    id: 4,
    text: "Windows",
    image: "windows.svg",
  },
  {
    id: 5,
    text: "Linux",
    image: "linux.svg",
  },
];
