import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Autonomy = () => {
  return (
    <section className="container section flex flex-col justify-center items-center gap-8">
      <ANIM__FadeInOutOnScroll>
        <h1
          className={cn(
            bebas_neue.className,
            "text-center leading-10 uppercase 2xl:text-[60px]"
          )}
        >
          complete autonomy.
          <br />
          zero humans to monitor you.
        </h1>
      </ANIM__FadeInOutOnScroll>
      <ul className="flex flex-col md:flex-row items-center justify-center gap-4 [&>*]:text-center">
        <li className="max-w-[280px] md:max-w-[320px] text-sm">
          Skipr deploys autonomous agents which use machine learning to enhance
          customer experience by scaling the autonomous network to match the VPN
          customer demand.
        </li>
        <li>
          <Image
            src="/autonomy.svg"
            alt=""
            width={1000}
            height={1000}
            className="max-w-[500px] h-auto"
          />
        </li>
        <li className="max-w-[280px] md:max-w-[300px] text-sm">
          Agents analyze performance data before retring and training successors
          who learn from that data to contnuously optmize Skipr&apos;s
          autonomous operaton.
        </li>
      </ul>
      <ANIM__FadeInOutOnScroll className="pt-8">
        <button className="bg-secondary text-darkish border-darkish min-w-[240px]">
          Learn More
        </button>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Autonomy;
