import Image from "next/image";
import Icon__Date from "../assets/date";
import Icon__Eye from "../assets/eye";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 min-[860px]:grid-cols-2 min-[1150px]:grid-cols-5 gap-10">
      <div className="col-span-1 min-[1150px]:col-span-3 relative min-h-[200px]">
        <Image
          src="/scoop1.png"
          alt="scoop1"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="col-span-1 min-[1150px]:col-span-2 space-y-4">
        <h3 className="font-semibold">WHY PRIVACY MATTERS</h3>
        <p className="text-sm">
          Protectng your online privacy helps safeguard sensitve personal
          informaton such as fnancial details, social security numbers, and
          passwords from falling into the wrong hands. This reduces the risk of
          identty thef, fraud, and other cybercrimes...
        </p>
        <div className="flex flex-col min-[400px]:flex-row items-center justify-end min-[400px]:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Icon__Date className="w-4 h-4" />
              <span className="text-xs">Jun 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon__Eye className="w-4 h-4" />
              <span className="text-xs">1234</span>
            </div>
          </div>
          <Link href="/the-skipr-scoop/asdfasdfadf">
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
