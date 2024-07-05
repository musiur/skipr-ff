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
    <section className="py-32 md:py-64 bg-darkish overflow-hidden">
      <div className="container grid grid-cols-1 [@media(min-width:1050px)]:grid-cols-10 gap-0 space-y-4 [@media(min-width:1050px)]:gap-4 [&>*]:text-white">
        <div className="cols-span-1 [@media(min-width:1050px)]:col-span-7">
          <div className="grid grid-cols-1 [@media(min-width:1050px)]:grid-cols-7 gap-0 space-y-4 [@media(min-width:1050px)]:gap-4">
            <div className="h-full relative col-span-1 [@media(min-width:1050px)]:col-span-4 w-full pr-0 [@media(min-width:1050px)]:pr-8 rounded-r-[40px] bg-primary flex flex-col items-center [@media(min-width:1050px)]:items-start justify-center gap-0 space-y-4 [@media(min-width:1050px)]:gap-4 py-16 [@media(min-width:1050px)]:py-0">
              <div className="absolute top-0 right-[100%] h-full min-w-[100dvw] bg-primary "></div>
              <div className="flex flex-col text-center [@media(min-width:1050px)]:text-left">
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
              <p className="text-center [@media(min-width:1050px)]:text-left max-w-[320px] mx-auto [@media(min-width:1050px)]:mx-0 text-[16px] md:text-[18px]">
                Most VPNs simply relocate your ISP address, but you remain
                identfed, trackable and traceable.
              </p>
            </div>
            <div className="col-span-3 pl-0 [@media(min-width:1050px)]:pl-10 space-y-4 max-w-[500px] [@media(min-width:1050px)]:max-w-[600px] mx-auto [@media(min-width:1050px)]:mx-0 ">
              <div>
                <Icon__BlinkingEye className="-ml-0 [@media(min-width:1050px)]:-ml-4" />
                <h4 className="text-center [@media(min-width:1050px)]:text-left text-[20px] -mt-4">
                  THEY CAN EASILY SEE YOUR
                  <br /> BROWSING ACTIVITIES.
                </h4>
              </div>

              <p className="text-center [@media(min-width:1050px)]:text-left text-[16px] md:text-[18px]">
                When users log in, VPNs have the capability of knowig their ISP
                addresses. his means they know where exactly where you are
                located.
              </p>
            </div>
          </div>
          <div className="col-span-1 [@media(min-width:1050px)]:col-span-7 flex flex-col [@media(min-width:1050px)]:flex-row space-y-10 gap-0 [@media(min-width:1050px)]:gap-[32px] pt-16 items-center justify-center">
            <div className="max-w-[326px] mx-auto [@media(min-width:1050px)]:mx-0 space-y-4">
              <h4 className="text-center [@media(min-width:1050px)]:text-left text-[20px] -mt-4">
                THEY KNOW YOUR IDENTITY
                <br /> AND HAVE YOUR CREDENTIALS
              </h4>
              <p className="text-center [@media(min-width:1050px)]:text-left text-[16px] md:text-[18px]">
                VPNs know your name, your email ID and other important
                credentals that can be used to identfy you.
              </p>
            </div>
            <div className="max-w-[700px] [@media(min-width:1050px)]:max-w-[600px] mx-auto">
              <Image
                src="human-chain.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full -mt-0 [@media(min-width:1050px)]:-mt-8 min-w-auto [@media(min-width:1200px)]:min-w-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex h-full flex-col items-start space-y-8 [@media(min-width:1050px)]:space-y-24 max-w-[400px] mx-auto pt-16">
          <div className="space-y-4">
            <h4 className="text-[20px] text-center [@media(min-width:1050px)]:text-left -mt-4">
              THEY KNOW YOUR
              <br /> EXACT LOCATION.
            </h4>

            <p className="text-center [@media(min-width:1050px)]:text-left text-[16px] md:text-[18px]">
              When users log in, VPNs have the capability of knowig their ISP
              addresses. his means they know where exactly where you are
              located.
            </p>
          </div>
          <Image
            src="map-pin-man-shadowless.svg"
            alt=""
            width={1000}
            height={1000}
            className="w-full max-h-[333px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section__FeaturesMess;
