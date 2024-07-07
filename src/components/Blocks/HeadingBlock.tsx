'use client'
import React from "react";



export default function HeadingBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  level,
  style,
  textAlign,
  textColor,
}: any) {
  const tag = `h${level}`;

  return React.createElement(
    tag,
    {
      className: getClassName(textAlign),
    },
    content
  );
}

function getClassName(textAlign: any) {
  if (textAlign === "center" || textAlign === "right") {
    return `text-${textAlign} `;
  }

  return "text-left py-3";
}
