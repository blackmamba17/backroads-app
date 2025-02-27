import React from "react";

type UistProps = {
  arrayOfHyperLinkItems: string[];
  hyperLinkClassName: string;
  UlClassName: string;
  UlId: string;
  iconClassNames?: string;
};

export const Ulist: React.FC<UistProps> = ({
  iconClassNames,
  UlClassName,
  UlId,
  arrayOfHyperLinkItems,
  hyperLinkClassName,
}) => {
  const ulParameters = { className: UlClassName, id: UlId };

  return (
    //spread operator to "expand" the object in single attributes of ul tag
    <ul {...ulParameters}>
      {arrayOfHyperLinkItems.map((hyperLinkItem, hyperLinkIndex) => {
        return (
          <li>
            <a
              className={hyperLinkClassName}
              id={`${hyperLinkItem}${hyperLinkIndex}`}
              href={`#${hyperLinkItem.toLowerCase()}`}
            >
              {hyperLinkItem}
            </a>

            {iconClassNames && <i className={iconClassNames}></i>}
          </li>
        );
      })}
    </ul>
  );
};
