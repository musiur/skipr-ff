import parseHtml from "@/lib/Parser";

export default function QuoteBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  dropCap,
  style,
  textColor,
  innerBlocks,
  citation
}:any) {
  return (
    <blockquote className="wp-block-quote shadow ">
      {/* <p>{block?.attributes?.value}</p> */}
      {
        innerBlocks?.map((block:any, index: number) => (
            // <ParagraphBlock className="text-[28px]" key={index} content={block?.originalContent} textAlign={block?.attributes?.textAlign} dropCap={block?.attributes?.dropCap}/>
            <p key={index} className={`${className}`}>{block?.originalContent.replace(/(<([^>]+)>)/gi, "")}</p>
        ))
      }
      <cite>{citation}</cite>
    </blockquote>
  );
}
