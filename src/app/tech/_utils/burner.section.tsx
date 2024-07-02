import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Burner = () => {
  return (
    <div className="relative overflow-hiden">
      <div className="container section flex flex-col md:flex-row justify-center items-center gap-16">
        {/* <div className="w-full">
          
        </div> */}
        <Image
          src="/burn.png"
          alt="autonomous-bg"
          width={1000}
          height={1000}
          className="min-w-[280px] max-w-[300px] sm:max-w-[400px] md:max-w-[780px] h-auto"
        />
        <div className="min-w-[320px] max-w-[480px] space-y-10 p-3">
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
          <ANIM__FadeInOutOnScroll className="grid grid-cols-1 gap-10 list-none">
            <li className="text-sm space-y-4">
              <h4 className="text-lg md:text-xl">UNBEATABLE UNTRACEABILITY</h4>
              <p>
                Skipr&apos;s burn mechanism ensures your data isn&apos;t just
                protected during online actvites but ceases to exist aferwards,
                leaving no traces.
              </p>
            </li>
            <li className="text-sm space-y-4">
              <h4 className="text-lg md:text-xl">NO SERVERS LEFT</h4>
              <p>
                Servers are competely burned every 24 hours and new ones are
                used to provide you with a history-free experience each tme you
                connect.
              </p>
            </li>
            <li className="text-sm space-y-4">
              <h4 className="text-lg md:text-xl">
                A CLEAN SLATE EVERY SINGLE TIME
              </h4>
              <p>
                Enjoy the convenience of a fresh start with every connecton and
                leave with certainty that no one will ever know you were there.
              </p>
            </li>
          </ANIM__FadeInOutOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Section__Burner;
