import { cn } from "@udecode/cn";

const Icon__ChevronRight = ({ className }: { className?: string }) => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M0.582031 21.1171V0.519531L18.4178 10.8183L0.582031 21.1171Z"
        fill="#001C2F"
      />
    </svg>
  );
};

export default Icon__ChevronRight;
