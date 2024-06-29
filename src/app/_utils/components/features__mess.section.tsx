import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Icon__BlinkingEye from "../assets/blinking__eye.icon";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__FeaturesMess = () => {
  return (
    <section className="section bg-darkish overflow-hidden">
      <div className="container grid grid-cols-1 min-[1050px]:grid-cols-10 gap-0 space-y-4 min-[1050px]:gap-4 [&>*]:text-white">
        <div className="cols-span-1 min-[1050px]:col-span-7">
          <div className="grid grid-cols-1 min-[1050px]:grid-cols-7 gap-0 space-y-4 min-[1050px]:gap-4">
            <div className="relative col-span-1 min-[1050px]:col-span-3 w-full pr-0 min-[1050px]:pr-8 py-16 rounded-r-[40px] bg-primary flex flex-col space-y-10 gap-0 min-[1050px]:gap-10">
              <div className="absolute top-0 right-[100%] h-full min-w-[100dvw] bg-primary "></div>
              <div className="flex flex-col text-center min-[1050px]:text-left">
                {["most vpns", "are not", "secure"].map((item: string) => {
                  return (
                    <p
                      key={item}
                      className={cn(
                        bebas_neue.className,
                        "uppercase text-[82px] lg:text-[68px] 2xl:text-[82px] leading-[70px]"
                      )}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
              <p className="text-center min-[1050px]:text-left max-w-[320px] mx-auto min-[1050px]:mx-0">
                Most VPNs simply relocate your ISP address, but you remain
                identfed, trackable and traceable.
              </p>
            </div>
            <div className="col-span-3 pl-0 min-[1050px]:pl-10 space-y-4 max-w-[500px] min-[1050px]:max-w-[600px] mx-auto min-[1050px]:mx-0 ">
              <div>
                <Icon__BlinkingEye className="-ml-0 min-[1050px]:-ml-4" />
                <h4 className="text-center min-[1050px]:text-left text-[20px] font-semibold -mt-4">
                  THEY CAN EASILY SEE YOUR
                  <br /> BROWSING ACTIVITIES.
                </h4>
              </div>

              <p className="text-center min-[1050px]:text-left">
                When users log in, VPNs have the capability of knowig their ISP
                addresses. his means they know where exactly where you are
                located.
              </p>
            </div>
          </div>
          <div className="col-span-1 min-[1050px]:col-span-7 flex flex-col min-[1050px]:flex-row space-y-10 gap-0 min-[1050px]:gap-4 pt-10">
            <div className="max-w-[340px] mx-auto min-[1050px]:mx-0 space-y-4">
              <h4 className="text-center min-[1050px]:text-left text-[20px] font-semibold -mt-4">
                THEY KNOW YOUR IDENTITY
                <br /> AND HAVE YOUR CREDENTIALS
              </h4>
              <p className="text-center min-[1050px]:text-left">
                VPNs know your name, your email ID and other important
                credentals that can be used to identfy you.
              </p>
            </div>
            <div className="max-w-[400px] min-[1050px]:max-w-auto mx-auto">
              <Image
                src="human-chain.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 space-y-4 pt-20 max-w-[400px] mx-auto">
          <h4 className="text-[20px] text-center min-[1050px]:text-left font-semibold -mt-4">
            THEY KNOW YOUR
            <br /> EXACT LOCATION.
          </h4>

          <p className="text-center min-[1050px]:text-left">
            When users log in, VPNs have the capability of knowig their ISP
            addresses. his means they know where exactly where you are located.
          </p>
          <Image
            src="map-pin-man.svg"
            alt=""
            width={1000}
            height={1000}
            className="w-full mt-auto max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section__FeaturesMess;
