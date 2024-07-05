import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Credential = () => {
  return (
    <section className="container section flex flex-col justify-center items-center gap-8 [&>*]:text-darkish">
      <ANIM__FadeInOutOnScroll>
        <h1
          className={cn(
            bebas_neue.className,
            "text-center leading-10 uppercase 2xl:text-[60px]"
          )}
        >
          NO CREDENTIALS
          <br />
          REQUIRED
        </h1>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="flex flex-col md:flex-row items-center justify-center gap-4 [&>*]:text-center list-none">
        <li className="max-w-[280px] md:max-w-[320px] text-sm text-center space-y-4">
          <h4 className="text-lg md:text-xl">NON CUSTODIAL TECHNOLOGY</h4>
          <p>
            The Skipr app generates a private key so you can make secure
            payments and get access without sharing your personal informaton
            with us.
          </p>
        </li>
        <li>
          <Image
            src="/anonymous-skipr-1.svg"
            alt=""
            width={1000}
            height={1000}
            className="w-auto h-auto px-8"
          />
        </li>
        <li className="max-w-[280px] md:max-w-[300px] text-sm text-center space-y-4">
          <h4 className="text-lg md:text-xl">100% PRIVATE AND SECURE ACCESS</h4>
          <p>
            blockchain is created as a receipt to verify A public key which is
            stored on the your subsripton, grantng you seamless access to the
            Skipr applicatonn.
          </p>
        </li>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Credential;
