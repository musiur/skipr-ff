import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Icon__SuperFast from "../assets/super__fast.icon";
import Icon__SuperStable from "../assets/super__stable.icon";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Performance = () => {
  return (
    <>
      <section className="section bg-darkish [&>*]:text-white pt-[90px] ">
        <div className="container flex flex-col justify-center items-center gap-8">
          <ANIM__FadeInOutOnScroll>
            <h1
              className={cn(
                bebas_neue.className,
                "text-center leading-10 uppercase 2xl:text-[60px]"
              )}
            >
              ridiculously performant.
            </h1>
          </ANIM__FadeInOutOnScroll>
          <ANIM__FadeInOutOnScroll className="px-0 md:px-[12%] pb-32 w-full mx-auto flex flex-col md:flex-row items-center justify-between [&>*]:text-center gap-20 md:gap-10">
            <li className="max-w-[300px] flex flex-col items-center justify-center gap-10">
              <div>
                <Icon__SuperFast />
                <h3 className="text-md md:text-xl font-semibold">SUPER FAST</h3>
              </div>
              <p>
                Our network is fnely tuned for rapid data transfer, delivering a
                seamless online experience. Whether you&apos;re streaming your
                favorite content, downloading large fles, or engaging in
                real-tme actvites, Skipr ensures lightning-fast speeds.
              </p>
            </li>
            <li className="max-w-[300px] flex flex-col items-center justify-center gap-10">
              <div>
                <Icon__SuperStable />
                <h3 className="text-md md:text-xl font-semibold">
                  SUPER STABLE
                </h3>
              </div>
              <p>
                The network uses high-performance servers which guarantee a
                rock-solid and dependable connecton, ensuring that you can
                browse, stream, or work online without interruptons or lags, and
                have peace of mind knowing your connecton is consistently
                reliable.
              </p>
            </li>
          </ANIM__FadeInOutOnScroll>
          <ANIM__FadeInOutOnScroll className="pt-8">
            <button className="bg-primary text-white border-blue-100 min-w-[240px]">
              Get Access
            </button>
          </ANIM__FadeInOutOnScroll>
        </div>
      </section>
    </>
  );
};

export default Section__Performance;
