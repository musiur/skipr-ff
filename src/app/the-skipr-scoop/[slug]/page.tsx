import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { cn } from "@udecode/cn";
import Icon__ChevronFill from "../_utils/assets/chevron-fill";
import { Bebas_Neue } from "next/font/google";
import Icon__Date from "../_utils/assets/date";
import Icon__Eye from "../_utils/assets/eye";
import Image from "next/image";
import Navbar from "@/components/layouts/navbar";
import Icon__Back from "../_utils/assets/back";
import Link from "next/link";
import { client } from "@/lib/ApolloClient";
import { GET_POST, GET_POST_SEO } from "@/lib/Quries";
import moment from "moment";
import HeadingBlock from "@/components/Blocks/HeadingBlock";
import ParagraphBlock from "@/components/Blocks/ParagraphBlock";
import ImageBlock from "@/components/Blocks/ImageBlock";
import ListsBlock from "@/components/Blocks/ListsBlock";
import QuoteBlock from "@/components/Blocks/QuoteBlock";
import EmbedBlock from "@/components/Blocks/EmbedBlock";
import TableBlock from "@/components/Blocks/TableBlock";
import SocialShare from "../_utils/components/SocialShare";
import dynamic from "next/dynamic";


const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata({ params: { slug } }: any) {
  const res: any = await client.request(
    GET_POST_SEO,
    // variables are type-checked too!
    { id: slug }
  );

  const seo = res?.post?.seo || {};

  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
    keywords: `${seo.focuskw},${seo?.metaKeywords}`,
    openGraph: {
      images: seo?.opengraphImage?.sourceUrl
        ? [{ url: seo?.opengraphImage?.sourceUrl }]
        : [],
    },
  };
}

const Page = async ({ params: { slug } }: any) => {
  const resPost: any = await client.request(GET_POST, {
    id: slug,
  });

  const post = resPost.post || {};

  const blocks = JSON.parse(post?.blocksJSON);

  return (
    <div>
      <Navbar color="black" />
      <div className="container py-40">
        <BackLink />

        <ANIM__FadeInOutOnScroll className="w-full grid grid-cols-1 gap-4 py-10">
          <ANIM__FadeInOutOnScroll className="space-y-4 w-full">
            <h1
              className={cn(
                bebas_neue.className,
                "text-left leading-10 uppercase 2xl:text-[60px] text-[#002238]"
              )}
            >
              {post?.title}
            </h1>
            <div className="w-full flex flex-col [@media(min-width:600px)]:flex-row items-start [@media(min-width:600px)]:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon__Date className="w-4 h-4" />
                  <span className="text-xs">
                    {moment(post?.date).format("MMM DD, YYYY")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon__Eye className="w-4 h-4" />
                  <span className="text-xs">1234</span>
                </div>
              </div>
              <SocialShare post={post} />
            </div>
          </ANIM__FadeInOutOnScroll>
        </ANIM__FadeInOutOnScroll>

        <div className="space-y-10 pb-10">
          <div className="w-full h-64 relative">
            <Image
              src="/blog-hero.png"
              alt="heroImage"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-5 text-black">
            {blocks?.map((block: any, index: number) =>
              block.name === "core/heading" ? (
                <HeadingBlock
                  key={index}
                  content={block?.dynamicContent.replace(/(<([^>]+)>)/gi, "")}
                  textAlign={block?.attributes?.textAlign}
                  level={block?.attributes?.level}
                />
              ) : block.name === "core/paragraph" ? (
                <ParagraphBlock
                  key={index}
                  content={block?.originalContent}
                  textAlign={block?.attributes?.textAlign}
                  dropCap={block?.attributes?.dropCap}
                  className="paragraph_wraper"
                />
              ) : block.name === "core/image" ? (
                <ImageBlock
                  key={index}
                  url={block?.attributes?.url}
                  align={block?.attributes?.align}
                  width={block?.attributes?.width}
                  height={block?.attributes?.height}
                  alt={block?.attributes?.alt}
                />
              ) : block.name === "core/list" ? (
                <ListsBlock
                  key={index}
                  align={block?.attributes?.align}
                  innerBlocks={block?.innerBlocks}
                />
              ) : block.name === "core/quote" ? (
                <QuoteBlock
                  key={index}
                  align={block?.attributes?.align}
                  innerBlocks={block?.innerBlocks}
                  textColor={block?.attributes?.textColor}
                  backgroundColor={block?.attributes?.backgroundColor}
                  citation={block?.originalContent.replace(/(<([^>]+)>)/gi, "")}
                />
              ) : block.name === "core/embed" ? (
                <EmbedBlock
                  key={index}
                  url={block?.attributes?.url}
                  caption={block?.attributes?.caption}
                  content={block?.originalContent}
                />
              ) : block.name === "core/table" ? (
                <TableBlock key={index} content={block} />
              ) : null
            )}
          </div>
        </div>

        <BackLink />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });

const BackLink = () => {
  return (
    <Link href="/the-skipr-scoop">
      <Icon__Back className="h-10 w-10" />
    </Link>
  );
};
