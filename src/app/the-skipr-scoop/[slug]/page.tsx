import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import Icon__ChevronFill from "../_utils/assets/chevron-fill";
import { Bebas_Neue } from "next/font/google";
import Icon__Date from "../_utils/assets/date";
import Icon__Eye from "../_utils/assets/eye";
import Image from "next/image";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Page = () => {
  return (
    <div>
      <ANIM__FadeInOutOnScroll className="flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4">
        <ANIM__FadeInOutOnScroll className="space-y-4">
          <h1
            className={cn(
              bebas_neue.className,
              "text-left leading-10 uppercase 2xl:text-[60px]"
            )}
          >
            THE POWER OF AUTONOMY
          </h1>
          <div className="flex flex-col min-[400px]:flex-row items-center justify-end min-[400px]:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon__Date className="w-4 h-4" />
              <span className="text-xs">Jun 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon__Eye className="w-4 h-4" />
              <span className="text-xs">1234</span>
            </div>
          </div>
        </ANIM__FadeInOutOnScroll>
        <div className="flex items-center justify-end gap-2">
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
          <Icon__ChevronFill className="fill-darkish" />
        </div>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="space-y-10">
        <Image
          src="/"
          alt="heroImage"
          width={1000}
          height={600}
          className="w-full h-64"
        />
        <ANIM__FadeInOutOnScroll className="space-y-10">
          <p>
            Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
            laborum aliquip laborum ullamco mollit qui do. Magna laboris
            pariatur duis et est esse laboris fugiat. Minim sit ea enim
            exercitation pariatur esse eu magna irure proident. Tempor voluptate
            elit reprehenderit pariatur culpa sint nulla nisi fugiat. Fugiat
            duis in dolore do est. Nulla enim nulla dolore aliqua tempor Lorem
            culpa minim qui sit dolor tempor.
          </p>
          <p>
            Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
            laborum aliquip laborum ullamco mollit qui do. Magna laboris
            pariatur duis et est esse laboris fugiat. Minim sit ea enim
            exercitation pariatur esse eu magna irure proident. Tempor voluptate
            elit reprehenderit pariatur culpa sint nulla nisi fugiat. Fugiat
            duis in dolore do est. Nulla enim nulla dolore aliqua tempor Lorem
            culpa minim qui sit dolor tempor.
          </p>
          <p>
            Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
            laborum aliquip laborum ullamco mollit qui do. Magna laboris
            pariatur duis et est esse laboris fugiat. Minim sit ea enim
            exercitation pariatur esse eu magna irure proident. Tempor voluptate
            elit reprehenderit pariatur culpa sint nulla nisi fugiat. Fugiat
            duis in dolore do est. Nulla enim nulla dolore aliqua tempor Lorem
            culpa minim qui sit dolor tempor.
          </p>
          <p>
            Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
            laborum aliquip laborum ullamco mollit qui do. Magna laboris
            pariatur duis et est esse laboris fugiat. Minim sit ea enim
            exercitation pariatur esse eu magna irure proident. Tempor voluptate
            elit reprehenderit pariatur culpa sint nulla nisi fugiat. Fugiat
            duis in dolore do est. Nulla enim nulla dolore aliqua tempor Lorem
            culpa minim qui sit dolor tempor.
          </p>
        </ANIM__FadeInOutOnScroll>
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default Page;
