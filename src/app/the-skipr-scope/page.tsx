import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";
import Icon__ChevronFill from "./_utils/assets/chevron-fill";
import BlogCard from "./_utils/components/blog__card";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Page = () => {
  return (
    <div className="py-36 container space-y-20">
      <Navbar color="black" />
      <ANIM__FadeInOutOnScroll className="flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4">
        <ANIM__FadeInOutOnScroll className="space-y-4">
          <h1
            className={cn(
              bebas_neue.className,
              "text-left leading-10 uppercase 2xl:text-[60px]"
            )}
          >
            The Skipr
            <br />
            Scoop
          </h1>
          <p>
            The latest, the greatest and the stuf
            <br /> you should really know.
          </p>
        </ANIM__FadeInOutOnScroll>
        <div className="relative">
          <select className="min-w-[220px] border px-4 py-1 rounded-md border-darkish">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
          <div className="absolute top-2 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <Icon__ChevronFill className="fill-darkish" />
          </div>
        </div>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="grid grid-cols-1 gap-10">
        {[1, 2, 3].map((item) => {
          return <BlogCard key={item} />;
        })}
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default Page;
