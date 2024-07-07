import Image from "next/image";
import Icon__Date from "../assets/date";
import Icon__Eye from "../assets/eye";
import Link from "next/link";
import moment from "moment";

const BlogCard = async (props: any) => {
  const { item } = props;

  const resImage = await fetch(`https://w3mantra.com/skipr_wp/wp-json/wp/v2/media/${item?.featured_media}`);
  const image = await resImage.json();



  return (
    <div className="grid grid-cols-1 min-[860px]:grid-cols-2 min-[1150px]:grid-cols-5 gap-10">
      <div className="col-span-1 min-[1150px]:col-span-3 relative min-h-[200px]">
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
      <div className="col-span-1 min-[1150px]:col-span-2 space-y-4">
        <Link href={`/the-skipr-scoop/${item?.slug}`}>
          <h3 className="font-semibold">{item?.title?.rendered}</h3>
        </Link>
        <p className="text-sm">
          {item?.excerpt?.rendered.replace(/<[^>]*>?/gm, "").slice(0, 100)}
        </p>
        <div className="flex flex-col min-[400px]:flex-row items-center justify-end min-[400px]:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Icon__Date className="w-4 h-4" />
              <span className="text-xs">{moment(item?.date).format('MMM DD, YYYY')}</span>
              {/* Jun 15, 2024 */}
            </div>
            <div className="flex items-center gap-2">
              <Icon__Eye className="w-4 h-4" />
              <span className="text-xs">1234</span>
            </div>
          </div>
          <Link href={`/the-skipr-scoop/${item?.slug}`}>
            <button className="max-w-[200px] min-w-[180px] px-4 py-[3px] rounded-md text-center border-darkish text-sm">
              Read Full Version
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
