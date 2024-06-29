import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
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
          <div className="w-full flex justify-center p-4 overflow-x-auto">
            <div>
              <table className="w-full bg-darkish text-white border-collapse [&>*]:text-[16px]">
                <thead>
                  <tr className="gap-8 mb-2">
                    <th className="pb-1 pr-1 pl-0">
                      <div className="h-full p-4 border-[2px] border-white text-darkish px-8 py-4">
                        ...
                      </div>
                    </th>
                    <th className="px-1 pb-1">
                      <div className="p-4 border-[2px] border-white px-8 py-4">
                        MOST VPNs
                      </div>
                    </th>
                    <th className="pl-1 pr-0 pb-1">
                      <div className="p-4 border-[2px] border-white px-8 py-4">
                        <div className="flex items-center justify-center gap-2 text-secondary">
                          <BrandIcon className="fill-secondary max-w-[32px]" />
                          SKIPR
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data__TableRows.map((row) => {
                    const { id, text } = row;
                    return (
                      <tr className="gap-8" key={id}>
                        <td className="py-1 pr-1 pl-0 min-w-[652.547px]">
                          <div className="border-[2px] border-white pl-8 py-4 pr-6 text-right text-secondary">
                            {text}
                          </div>
                        </td>
                        <td className="p-1  min-w-[204.25px]">
                          <div className="p-4 border-[2px] border-white px-8 py-4">
                            <Image
                              src="close-icon.svg"
                              alt=""
                              width={100}
                              height={100}
                              className="w-6 h-6 mx-auto"
                            />
                          </div>
                        </td>
                        <td className="pl-1 pr-0 py-1  min-w-[186.469px]">
                          <div className="p-4 border-[2px] border-white bg-secondary px-8 py-4">
                            <Image
                              src="check-icon.svg"
                              alt=""
                              width={100}
                              height={100}
                              className="w-6 h-6 mx-auto"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
