import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Patent = () => {
  return (
    <>
      <section className="container pt-[90px] flex flex-col justify-center items-center gap-8 [&>*]:text-darkish">
        <ANIM__FadeInOutOnScroll>
          <h1
            className={cn(
              bebas_neue.className,
              "text-center leading-10 uppercase 2xl:text-[60px] "
            )}
          >
            PATENT (Pending) TECHNOLOGY.
          </h1>
          <p className="text-center pt-4 md:pt-0">
            This level of privacy and security simply cannot be found anywhere.
          </p>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="flex flex-col items-center justify-center">
          <Image
            src="/patent.svg"
            alt=""
            width={3000}
            height={3000}
            className="w-auto h-auto"
          />
        </ANIM__FadeInOutOnScroll>
      </section>
      <ANIM__FadeInOutOnScroll className="relative bg-darkish h-32 clip-path-curve">
        <div className="absolute inset-x-0 top-0 mt-4 text-center"></div>
      </ANIM__FadeInOutOnScroll>
    </>
  );
};

export default Section__Patent;
