import React from "react";

export function ListItem(props: {
  href: string;
  className: string;
  aContent: string;
}) {
  const { href, className, aContent } = props;
  return (
    <li>
      <a href={href} className={className}>
        {aContent}
      </a>
    </li>
  );
}
