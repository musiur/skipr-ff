import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Autonomous = () => {
  return (
    <div className="relative [&>*]:text-white overflow-hiden">
      <Image
        src="/autonomous-bg.png"
        alt="autonomous-bg"
        fill
        className="object-cover object-center z-[-1]"
      />
      <Image
        src="/operations.png"
        alt="autonomous-bg"
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 z-1 w-[60dvw] md:w-[36dvw] h-auto"
      />
      <div className="container py-48 flex flex-col justify-start items-start gap-16">
        <ANIM__FadeInOutOnScroll>
          <h1
            className={cn(
              bebas_neue.className,
              "leading-10 uppercase 2xl:text-[60px]"
            )}
          >
            AUTONOMOUS
            <br />
            operations
          </h1>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="grid grid-cols-1 sm:grid-cols-2 gap-10 list-none">
          <li className="max-w-[280px] md:max-w-[320px] text-sm space-y-4">
            <h4 className="text-lg md:text-xl">
              ZERO HUMAN <br />
              ERRORS
            </h4>
            <p>
              Our autonomous operatons system features digital helpers with
              specifc tasks and lifespans, verifying payments and grantng access
              within the app.
            </p>
          </li>
          <li className="max-w-[280px] md:max-w-[300px] text-sm space-y-4">
            <h4 className="text-lg md:text-xl">AUTOMATIC AGENT SHUTDOWN</h4>
            <p>
              Helpers self-destruct afer a set tme, ensuring efcient resource
              management and minimal energy consumpton, leaving you untraceable.
            </p>
          </li>
          <li className="max-w-[280px] md:max-w-[300px] text-sm space-y-4">
            <h4 className="text-lg md:text-xl">DYNAMIC ADJUSTMENT</h4>
            <p>
              The system dynamically adjusts the number of helpers based on
              actvity levels, creatng new helpers during increased app usage.
            </p>
          </li>
        </ANIM__FadeInOutOnScroll>
      </div>
    </div>
  );
};

export default Section__Autonomous;
