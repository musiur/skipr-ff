import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@udecode/cn";
import Icon__ChevronFill from "./_utils/assets/chevron-fill";
import BlogCard from "./_utils/components/blog__card";
import { Bebas_Neue } from "next/font/google";
import { client } from "@/lib/ApolloClient";
import { GET_POSTS_COUNT } from "@/lib/Quries";
import Pagination from "./_utils/components/Pagination";
import { Metadata } from "next";


const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});


export const metadata: Metadata = {
  title: "The Skipr Scoop",
  description: "Generated by create next app",
  keywords: "The Skipr Scoop",
  openGraph: {
    images: [
      {
        url: "https://w3mantra.com/skipr_wp/wp-content/uploads/2021/10/Group-1.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};

const Page = async ({searchParams}: any) => {  

    const resPostsCount: any = await client.request(GET_POSTS_COUNT);

    const postsCount = resPostsCount.posts.pageInfo.total;

    const totalPages = Math.ceil(postsCount / 10);

    // 
    const resData = await fetch(`https://w3mantra.com/skipr_wp/wp-json/wp/v2/posts?per_page=10&page=${searchParams?.page || 1}`);
    const data = await resData.json();
    const posts = data || [];

    // console.log(typeof data);


  return (
    <div className="py-24 container space-y-20">
      <Navbar color="black" />
      <ANIM__FadeInOutOnScroll className="flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4">
        <ANIM__FadeInOutOnScroll className="space-y-4">
          <h1
            className={cn(
              bebas_neue.className,
              "text-left leading-10 uppercase 2xl:text-[60px]"
            )}
          >
            The Skipr
            <br />
            Scoop
          </h1>
          <p>
            The latest, the greatest and the stuf 
            <br /> you should really know.
          </p>
        </ANIM__FadeInOutOnScroll>
        <div className="relative">
          <select className="min-w-[220px] border px-4 py-1 rounded-md border-darkish">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
          <div className="absolute top-2 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <Icon__ChevronFill className="fill-darkish" />
          </div>
        </div>
      </ANIM__FadeInOutOnScroll>
      <div className="grid grid-cols-1 gap-10">
        {posts?.map((item: any) => {
          return <BlogCard item={item} key={item} />;
        })}
      </div>

      <Pagination totalPages={totalPages} data={data} />
    </div>
  );
};

export default Page;
