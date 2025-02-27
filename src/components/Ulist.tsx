import React from "react";

type UistProps = {
  hyperLinkRef: string;
  hyperLinkClassName: string;
  UlClassName: string;
  UlId: string;
  iconClassNames?: string;
  numberOfListItem: number;
  children: React.ReactNode;
};

export const Ulist: React.FC<UistProps> = ({
  numberOfListItem,
  iconClassNames,
  UlClassName,
  UlId,
  children,
  hyperLinkRef,
  hyperLinkClassName,
}) => {
  const ulParameters = { className: UlClassName, id: UlId };
  const hyperLinkParameters = {
    className: hyperLinkClassName,
    href: hyperLinkRef,
  };

  return (
    //spread operator to "expand" the object in single attributes of ul tag
    <ul {...ulParameters}>
      {[...Array(numberOfListItem)].map(() => {
        return (
          <li>
            <a {...hyperLinkParameters}>{children}</a>

            {iconClassNames && <i className={iconClassNames}></i>}
          </li>
        );
      })}
    </ul>
  );
};
