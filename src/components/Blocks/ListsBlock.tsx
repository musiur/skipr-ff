import parseHtml from "@/lib/Parser";


function getClassName(align: string) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }

  return "text-left ";
}

export default function ListsBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  dropCap,
  style,
  textColor,
  innerBlocks,
}: any) {
  return (
    <ul className={`${getClassName(align)} cancer-block-list block-lists`}>
      {innerBlocks.map((block: any, index: number) => (
        <li key={index}>{parseHtml(block?.originalContent)}</li>
      ))}
    </ul>
  );
}
