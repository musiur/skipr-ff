import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Section__Knowledge = () => {
  return (
    <section className="container section flex flex-col justify-center items-center gap-8">
      <ANIM__FadeInOutOnScroll>
        <h1
          className={cn(
            bebas_neue.className,
            "text-center leading-10 uppercase 2xl:text-[60px]"
          )}
        >
          zero knowledge guarantee
        </h1>
      </ANIM__FadeInOutOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[62px] [&>*]:text-center">
        {Data__Cards.map((card) => {
          const { title, id, image, text } = card;
          return (
            <ANIM__FadeInOutOnScroll
              key={id}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2
                className={cn(
                  bebas_neue.className,
                  "text-center leading-10 uppercase flex flex-col items-center justify-center gap-0"
                )}
              >
                {title}
              </h2>
              <Image
                src={image}
                alt=""
                width={500}
                height={500}
                className="max-h-[250px] w-auto -mt-8"
              />
              <p className="max-w-[280px] md:max-w-[360px] mx-auto">{text}</p>
            </ANIM__FadeInOutOnScroll>
          );
        })}
      </div>
      <ANIM__FadeInOutOnScroll className="pt-8">
        <button className="bg-secondary text-darkish border-darkish min-w-[240px]">
          Know The Tech
        </button>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Section__Knowledge;

const Data__Cards = [
  {
    id: 1,
    title: (
      <>
        <span>BE</span>
        <span>COMPLETELY</span>
        <span>UNTRACEABLE</span>
      </>
    ),
    image: "/fire.svg",
    text: "Forget erasing logs or burning your data, we burn the entre server afer use, leaving zero traces. It is like you were never here.",
  },
  {
    id: 2,
    title: (
      <>
        <span>BE</span>
        <span>COMPLETELY</span>
        <span>UNTRACKABLE</span>
      </>
    ),
    image: "/map-pin-man.svg",
    text: "Skipr makes sure not a single person ever knows your locaton or what you do online, including us.",
  },
  {
    id: 3,
    title: (
      <>
        <span>BE</span>
        <span>COMPLETELY</span>
        <span>ANONYMOUS</span>
      </>
    ),
    image: "/anonymous-skipr.svg",
    text: "Skipr knows nothing about you. Not evenyour name or your email address. We have no way of identfying you.",
  },
];
