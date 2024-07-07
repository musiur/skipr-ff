import Image from "next/image";

function getClassName(align: any) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }

  return "text-left";
}

export default function ImageBlock({
  align,
  width,
  height,
  className,
  url,
  alt,
  style,
  textColor,
}: any) {
  return (
    <figure>
      <Image src={url} width={width || '1000'} height={height || '400'} className={getClassName(align)} alt={alt || 'asdasd'} />
    </figure>
  );
}
