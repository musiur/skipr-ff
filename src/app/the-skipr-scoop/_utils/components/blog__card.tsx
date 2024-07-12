'use client'
import Image from "next/image";
import Icon__Date from "../assets/date";
import Icon__Eye from "../assets/eye";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";

const BlogCard = (props: any) => {
  const { item } = props;

  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(`https://w3mantra.com/skipr_wp/wp-json/wp/v2/media/${item.featured_media}`);
      const data = await res.json();
      setImage(data);
    };
    fetchImage();
  }, [item.featured_media]);




  return (
    <div className="grid grid-cols-1 min-[860px]:grid-cols-2 min-[1150px]:grid-cols-7 gap-10">
      <div className="col-span-1 min-[1150px]:col-span-4 relative min-h-[250px]">
        {
          image?.source_url &&
          <Image
          src={image?.source_url}
          alt={item?.title?.rendered}
          fill
          className="object-cover object-center"
        />
        }

      </div>
      <div className="col-span-1 min-[1150px]:col-span-3 space-y-4">
        <Link href={`/the-skipr-scoop/${item?.slug}`}>
          <h3 className="font-semibold uppercase text-[#001C2F]">{item?.title?.rendered}</h3>
        </Link>
        <p className="text-sm text-[#001C2F]">
          {item?.excerpt?.rendered.replace(/<[^>]*>?/gm, "").slice(0, 100)}
        </p>
        <div className="flex flex-col min-[400px]:flex-row items-center justify-end min-[400px]:justify-between gap-4 ">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Icon__Date className="w-4 h-4" />
              <span className="text-xs text-[#001C2F]">{moment(item?.date).format('MMM DD, YYYY')}</span>
              {/* Jun 15, 2024 */}
            </div>
            <div className="flex items-center gap-2">
              <Icon__Eye className="w-4 h-4" />
              <span className="text-xs text-[#001C2F]">1234</span>
            </div>
          </div>
          <Link href={`/the-skipr-scoop/${item?.slug}`}>
            <button className="max-w-[200px] min-w-[180px] px-4 py-[3px] text-[#001C2F] rounded-md text-center border-[#001C2F] text-sm">
              Read Full Version
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
