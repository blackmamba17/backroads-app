import React from "react";

type ConditionalUlistProps =
  | {
      arrayOfHyperLinkItems: string[];
      iconClassNames?: undefined;
    }
  | {
      iconClassNames: string[];
      arrayOfHyperLinkItems?: undefined;
    };

type UlistProps = {
  hyperLinkClassName: string;
  UlClassName: string;
  UlId?: string;
} & ConditionalUlistProps;

export const Ulist: React.FC<UlistProps> = ({
  UlClassName,
  UlId,
  hyperLinkClassName,
  ...props
}) => {
  const ulParameters = { className: UlClassName, id: UlId };

  return (
    <ul {...ulParameters}>
      {typeof props.arrayOfHyperLinkItems != "undefined" &&
        props.arrayOfHyperLinkItems?.map((hyperLinkItem, hyperLinkIndex) => {
          return (
            <li id={`${hyperLinkItem}${hyperLinkIndex}`}>
              <a
                href={`#${hyperLinkItem.toLowerCase()}`}
                className={hyperLinkClassName}
              >
                {hyperLinkItem}
              </a>
            </li>
          );
        })}
      {typeof props.iconClassNames}
    </ul>
  );
};
