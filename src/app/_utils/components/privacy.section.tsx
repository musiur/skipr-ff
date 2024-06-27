import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import clsx from "clsx";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Privacy = () => {
  return (
    <section className="bg-primary">
      <ANIM__FadeInOutOnScroll className="container section [&>*]:text-white flex flex-col items-center justify-center gap-4">
        <p className="text-center text-[20px] md:text-[32px]">
          LET&apos;S DEFINE TRUE PRIVACY
        </p>
        <h1
          className={cn(
            bebas_neue.className,
            "uppercase  w-full text-center leading-10"
          )}
        >
          if even one person can see your ONLINE <br />
          ACTIVITies, you are not 100% private.
        </h1>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Privacy;
