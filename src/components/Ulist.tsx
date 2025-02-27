import React from "react";
import { ListItem } from "./ListItem";

type UistProps = React.PropsWithChildren<{
  href: string;
  className: string;
  iconClassNames?: string;
  index: number;
}>;

export const Ulist: React.FC<UistProps> = ({
  index,
  iconClassNames,
  children,
  ...props
}) => {
  return (
    <ul>
      {[...Array(index)].map(() => {
        return (
          <li>
            <a {...props}>{children}</a>

            {iconClassNames && <i className={iconClassNames}></i>}
          </li>
        );
      })}
    </ul>
  );
};
