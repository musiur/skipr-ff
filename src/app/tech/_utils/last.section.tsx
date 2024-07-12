import BrandIcon from "@/app/_utils/assets/brand__icon.icon";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Last = () => {
  return (
    <section className="relative bg-none">
      <ANIM__FadeInOutOnScroll className="section bg-white">
        <div className="container flex flex-col justify-center items-center gap-8">
          <ANIM__FadeInOutOnScroll>
          {/* text-5xl 2xl:text-6xl */}
            <h1
              className={cn(
                bebas_neue.className,
                "text-center uppercase text-[#001C2F] text-5xl 2xl:text-[72px] leading-[52px]"
              )}
            >
              you cannot
              <br />
              get more
              <br />
              private than
              <br />
              skipr.
            </h1>
          </ANIM__FadeInOutOnScroll>
          <p className="max-w-[420px] mx-auto text-lg !leading-[36px] text-[#001C2F] text-center">
            Welcome to the most powerful online
            <br />
            privacy setting on the planet.
          </p>
          <ANIM__FadeInOutOnScroll className="pt-4">
            <button className="bg-white text-[27px] text-[#001C2F] border-darkish min-w-[240px] h-[51px]">
              Get Skipr Now
            </button>
          </ANIM__FadeInOutOnScroll>
          <div className="pt-32">
            <BrandIcon className="fill-white" />
          </div>
        </div>
      </ANIM__FadeInOutOnScroll>

      <Image
        src="gradient-bg.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-[-1] bg-darkish"
      />
    </section>
  );
};

export default Section__Last;
