"use client";
import Icon__ChevronFill from "../assets/chevron-fill";
import { useRouter } from "next/navigation";

export const Filter = (props: any) => {
    const router = useRouter();


  return (
    <div className="relative cursor-pointer">
      <select className="min-w-[220px] border px-4 py-1 rounded-md border-darkish">
        <option onClick={() => router.push(`/the-skipr-scoop?order=desc`)} className="cursor-default">Newest First</option>
        <option onClick={() => router.push(`/the-skipr-scoop?order=asc`)} className="cursor-default">Oldest First</option>
      </select>
      <div className="absolute top-2 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
        <Icon__ChevronFill className="fill-darkish" />
      </div>
    </div>
  );
};
