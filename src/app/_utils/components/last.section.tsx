import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import BrandIcon from "../assets/brand__icon.icon";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Last = () => {
  return (
    <section className="w-full relative bg-none">
      <ANIM__FadeInOutOnScroll className="section bg-none [&>*]:text-white">
        <div className="container flex flex-col justify-center items-center gap-8">
          <ANIM__FadeInOutOnScroll>
            <h1
              className={cn(
                bebas_neue.className,
                "text-center uppercase text-5xl 2xl:text-6xl"
              )}
            >
              IT IS LIKE
              <br />
              <span className="text-secondary uppercase text-5xl 2xl:text-6xl">
                you were never here.
              </span>
            </h1>
          </ANIM__FadeInOutOnScroll>
          <p className="max-w-[420px] mx-auto text-lg text-center">
            There is no one to monitor you.
            <br />
            Become unidentifiable, untraceable
            <br />
            and untrackable with Skipr.
          </p>
          <ANIM__FadeInOutOnScroll className="pt-4">
            <button className="bg-white/10 text-white border-white min-w-[240px]">
              Get Access
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
        fill={true}
        className="z-[-1] bg-darkish object-cover object-center"
      />
    </section>
  );
};

export default Section__Last;
