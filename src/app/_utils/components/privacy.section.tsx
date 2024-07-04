import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Privacy = () => {
  return (
    <section className="bg-primary">
      <ANIM__FadeInOutOnScroll className="container section [&>*]:text-white flex flex-col items-center justify-center gap-1">
        <p className="text-center text-[20px] md:text-[24px]">
          LET&apos;S DEFINE TRUE PRIVACY
        </p>
        <div>
          <h2
            className={cn(
              bebas_neue.className,
              "uppercase  w-full text-center leading-[0.9]"
            )}
          >
            if even one person can see your ONLINE <br />
            ACTIVITies, you are not 100% private.
          </h2>
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Privacy;
