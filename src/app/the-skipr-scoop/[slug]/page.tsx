import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import Icon__ChevronFill from "../_utils/assets/chevron-fill";
import { Bebas_Neue } from "next/font/google";
import Icon__Date from "../_utils/assets/date";
import Icon__Eye from "../_utils/assets/eye";
import Image from "next/image";
import Icon__Twitter from "../_utils/assets/twitter";
import Icon__FB from "../_utils/assets/fb";
import Icon__Instagram from "../_utils/assets/instagram";
import Icon__Youtube from "../_utils/assets/youtube";
import Icon__Linkdin from "../_utils/assets/linkedin";
import Icon__Tiktok from "../_utils/assets/tiktok";
import Icon__WhatsApp from "../_utils/assets/whatsapp";
import Icon__Redit from "../_utils/assets/redit";
import Navbar from "@/components/layouts/navbar";
import Icon__Back from "../_utils/assets/back";
import Link from "next/link";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

const Page = () => {
  return (
    <div>
      <Navbar color="black" />
      <div className="container py-48">
        <BackLink />

        <ANIM__FadeInOutOnScroll className="w-full grid grid-cols-1 gap-4 py-10">
          <ANIM__FadeInOutOnScroll className="space-y-4 w-full">
            <h1
              className={cn(
                bebas_neue.className,
                "text-left leading-10 uppercase 2xl:text-[60px]"
              )}
            >
              THE POWER OF AUTONOMY
            </h1>
            <div className="w-full flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon__Date className="w-4 h-4" />
                  <span className="text-xs">Jun 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon__Eye className="w-4 h-4" />
                  <span className="text-xs">1234</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Icon__FB className="fill-darkish" />
                <Icon__Twitter className="fill-darkish" />
                <Icon__Instagram className="fill-darkish" />
                <Icon__Youtube className="fill-darkish" />
                <Icon__Linkdin className="fill-darkish" />
                <Icon__Tiktok className="fill-darkish" />
                <Icon__WhatsApp className="fill-darkish" />
                <Icon__Redit className="fill-darkish" />
              </div>
            </div>
          </ANIM__FadeInOutOnScroll>
        </ANIM__FadeInOutOnScroll>

        <ANIM__FadeInOutOnScroll className="space-y-10 py-10">
          <div className="w-full h-64 relative">
            <Image
              src="/blog-hero.png"
              alt="heroImage"
              fill
              className="object-cover object-center"
            />
          </div>
          <ANIM__FadeInOutOnScroll className="space-y-10">
            <p>
              Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
              laborum aliquip laborum ullamco mollit qui do. Magna laboris
              pariatur duis et est esse laboris fugiat. Minim sit ea enim
              exercitation pariatur esse eu magna irure proident. Tempor
              voluptate elit reprehenderit pariatur culpa sint nulla nisi
              fugiat. Fugiat duis in dolore do est. Nulla enim nulla dolore
              aliqua tempor Lorem culpa minim qui sit dolor tempor.
            </p>
            <p>
              Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
              laborum aliquip laborum ullamco mollit qui do. Magna laboris
              pariatur duis et est esse laboris fugiat. Minim sit ea enim
              exercitation pariatur esse eu magna irure proident. Tempor
              voluptate elit reprehenderit pariatur culpa sint nulla nisi
              fugiat. Fugiat duis in dolore do est. Nulla enim nulla dolore
              aliqua tempor Lorem culpa minim qui sit dolor tempor.
            </p>
            <p>
              Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
              laborum aliquip laborum ullamco mollit qui do. Magna laboris
              pariatur duis et est esse laboris fugiat. Minim sit ea enim
              exercitation pariatur esse eu magna irure proident. Tempor
              voluptate elit reprehenderit pariatur culpa sint nulla nisi
              fugiat. Fugiat duis in dolore do est. Nulla enim nulla dolore
              aliqua tempor Lorem culpa minim qui sit dolor tempor.
            </p>
            <p>
              Eiusmod excepteur duis fugiat nulla pariatur consectetur deserunt
              laborum aliquip laborum ullamco mollit qui do. Magna laboris
              pariatur duis et est esse laboris fugiat. Minim sit ea enim
              exercitation pariatur esse eu magna irure proident. Tempor
              voluptate elit reprehenderit pariatur culpa sint nulla nisi
              fugiat. Fugiat duis in dolore do est. Nulla enim nulla dolore
              aliqua tempor Lorem culpa minim qui sit dolor tempor.
            </p>
          </ANIM__FadeInOutOnScroll>
        </ANIM__FadeInOutOnScroll>

        <BackLink />
      </div>
    </div>
  );
};

export default Page;

const BackLink = () => {
  return (
    <Link href="/the-skipr-scoop">
      <Icon__Back className="h-10 w-10" />
    </Link>
  );
};
