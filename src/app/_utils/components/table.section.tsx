import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import BrandIcon from "../assets/brand__icon.icon";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Table = () => {
  return (
    <section>
      <ANIM__FadeInOutOnScroll className="section bg-darkish [&>*]:text-white">
        <div className="container flex flex-col justify-center items-center gap-8">
          <ANIM__FadeInOutOnScroll>
            <h1
              className={cn(
                bebas_neue.className,
                "text-center leading-10 uppercase"
              )}
            >
              only skipr
            </h1>
          </ANIM__FadeInOutOnScroll>
          <div className="w-full bg-darkish text-white [&>*]:text-[16px] ">
            <div className="w-full space-y-2">
              <div className="flex flex-col min-[1024px]:flex-row gap-2">
                <div className="w-full border-[2px] border-white text-darkish py-4 hidden min-[1024px]:flex items-center justify-center">
                  SFSDSD
                </div>
                <div className="min-w-[400px] flex flex-row gap-2">
                  <div className="max-w-full w-full min-[1024px]:max-w-[204.25px] min-[1024px]:w-[204.25px] border-[2px] border-white py-4 flex items-center justify-center">
                    MOST VPNs
                  </div>
                  <div className="max-w-full w-full min-[1024px]:max-w-[186.469px] min-[1024px]:w-[186.469px] border-[2px] border-white py-4 flex items-center justify-center gap-2 text-secondary">
                    <BrandIcon className="fill-secondary max-w-[32px]" />
                    SKIPR
                  </div>
                </div>
              </div>
              {Data__TableRows.map((row) => {
                const { id, text } = row;
                return (
                  <div
                    className="flex flex-col min-[1024px]:flex-row gap-2"
                    key={id}
                  >
                    <div className="max-w-full w-full min-[1024px]:max-w-[652.547px] min-[1024]:w-[652.547px] border-[2px] border-white pl-8 py-4 pr-6 text-secondary">
                      {text}
                    </div>
                    <div className="min-w-[400px] flex flex-row gap-2">
                      <div className="max-w-full w-full min-[1024px]:max-w-[204.25px] min-[1024px]:w-[204.25px] border-[2px] border-white flex items-center justify-center py-4 min-[1024px]:py-0">
                        <Image
                          src="close-icon.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="max-full w-full min-[1024px]:max-w-[186.469px] min-[1024px]:w-[186.469px] border-[2px] border-white bg-secondary flex items-center justify-center py-4 min-[1024px]:py-0">
                        <Image
                          src="check-icon.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Table;

const Data__TableRows = [
  {
    id: 1,
    text: "Privacy on signup: Non Custodial and does not require credentals.",
  },
  {
    id: 2,
    text: "No technical way to te your identty to your true locaton.",
  },
  {
    id: 3,
    text: "Zero human error: server management is completely autonomous.",
  },
  {
    id: 4,
    text: "Enhanced performance through integrated AI agents.",
  },
  {
    id: 5,
    text: "Optmal untraceability through scheduled VPN server burns.",
  },
];
