import parseHtml from "@/lib/Parser";

function getClassName(align: string) {
    if (align === "center" || align === "right") {
      return `text-${align}`;
    }
  
    return "text-left";
  }
  
  export default function ParagraphBlock({
    align,
    anchor,
    backgroundColor,
    className,
    content,
    dropCap,
    style,
    textColor,
  }: any) {
    return <div className={`${getClassName(align)} ${className} text-[#002238]`}>{parseHtml(content)}</div>;
  }