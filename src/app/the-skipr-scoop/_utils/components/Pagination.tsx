"use client";
import { useState } from "react";
import Icon__ChevronLeft from "../../_utils/assets/chevron-left.icon";
import Icon__ChevronRight from "../../_utils/assets/chevron-right.icon";
import { useRouter } from "next/navigation";

export default function Pagination(props: any) {
    const {totalPages,data} = props;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);


  const handlePageChange = (page: number) => {
    router.push(`/the-skipr-scoop?page=${page}`);
    setCurrentPage(page);
  };

  const handlePagePrev = () => {
    if (currentPage < 2) return;
    router.push(`/the-skipr-scoop?page=${currentPage - 1}`);
    setCurrentPage(currentPage - 1);
  };

  const handlePageNext = () => {
    if (currentPage >= totalPages) return;
    router.push(`/the-skipr-scoop?page=${currentPage + 1}`);
    setCurrentPage(currentPage + 1);
  };

 



  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
        <span onClick={handlePagePrev}>
            <Icon__ChevronLeft className="mr-2 cursor-pointer" />
        </span>
      

      {Array.from({ length: totalPages }).map((num: any, idx) => {
        return (
          <div
            onClick={() => handlePageChange(idx + 1)}
            key={idx}
            className={` transition-all duration-500 w-[44px] h-[44px] flex items-center justify-center font-bold cursor-pointer ${currentPage === idx + 1 ? "bg-darkish text-white" : "bg-gray-200 text-darkish"}`}
          >
            {idx + 1}
          </div>
        );
      })}
      <span onClick={handlePageNext}>
      <Icon__ChevronRight className="ml-2 cursor-pointer" />
      </span>
    </div>
  );
}
