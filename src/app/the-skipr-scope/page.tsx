import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Page = () => {
  return (
    <>
      <Navbar color="black" />
      <ANIM__FadeInOutOnScroll>
        <h1
          className={cn(
            bebas_neue.className,
            "text-center leading-10 uppercase 2xl:text-[60px]"
          )}
        >
          The Skipr
          <br />
          Scoop
        </h1>
      </ANIM__FadeInOutOnScroll>
    </>
  );
};

export default Page;
