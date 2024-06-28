import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__FeaturesMess = () => {
  return (
    <section className="section bg-darkish">
      <div className="container grid grid-cols-8 gap-4 [&>*]:text-white">
        <div className="col-span-5 pr-8 py-8 rounded-r-2xl bg-primary">
          <h1 className={cn(bebas_neue.className, "leading-10 uppercase")}>
            available now on ios and android
          </h1>
        </div>
        <div className="col-span-3">d</div>
      </div>
    </section>
  );
};

export default Section__FeaturesMess;
