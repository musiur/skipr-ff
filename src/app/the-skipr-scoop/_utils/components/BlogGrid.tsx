"use client";
import BlogCard from "./blog__card";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";

const BlogGrid = (props: any) => {
  const { postsCount } = props;
  const searchParams: any = useSearchParams();
  const order = searchParams.get("order");

  const totalPages = Math.ceil(postsCount / 10);

  const { data, isLoading } = useQuery({
    queryKey: ["posts", searchParams?.page || 1,order],
    queryFn: async () => {
      const res = await fetch(
        `https://w3mantra.com/skipr_wp/wp-json/wp/v2/posts?order=${order || 'desc'}&per_page=10&page=${
          searchParams?.page || 1
        }`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      {
        isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-pulse">
            <div className="col-span-1 lg:col-span-3 relative min-h-[200px]">
              <div className="w-full h-full bg-gray-200"></div>
            </div> 
            <div className="col-span-1 lg:col-span-2 space-y-4">
              <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          ))
        ):(
          <div className="grid grid-cols-1 gap-10">
          {data?.map((item: any) => {
            return <BlogCard item={item} key={item} />;
          })}
        </div>
        )
      }


      <Pagination totalPages={totalPages} data={data} />
    </>
  );
};

export default BlogGrid;
