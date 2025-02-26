import React from "react";
import { ListItem } from "./ListItem";

type Ulist = {
  className: string;
  children?: React.ReactNode;
  aContent: string;
  id: string;
};

export const Ulist = ({
  children,
  aContent,
  ...props
}: React.PropsWithChildren<Ulist>) => {
  return (
    <ul {...props}>
      <ListItem children={children} />
    </ul>
  );
};
