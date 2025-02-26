import React from "react";

export const ListItem = ({ content }: React.FC<{ content: string }>) => {
  return (
    <li>
      <a href="">{content}</a>
    </li>
  );
};
