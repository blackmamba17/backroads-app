import React from "react";

type iconClassType = {
  icon: string;
  link: string;
};

//to do the "or this or that"
type ConditionalUlistProps =
  | {
      arrayOfHyperLinkItems: string[];
      iconClassNames?: undefined;
    }
  | {
      iconClassNames: iconClassType[];
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
            <li key={`${hyperLinkItem}${hyperLinkIndex}`}>
              <a
                href={`#${hyperLinkItem.toLowerCase()}`}
                className={hyperLinkClassName}
              >
                {hyperLinkItem}
              </a>
            </li>
          );
        })}
      {typeof props.iconClassNames != "undefined" &&
        props.iconClassNames?.map((iconClassName, iconClassIndex) => {
          return (
            <li key={`${iconClassName.icon}${iconClassIndex}`}>
              <a
                href={iconClassName.link}
                target="_blank"
                className={hyperLinkClassName}
              >
                <i className={iconClassName.icon}></i>
              </a>
            </li>
          );
        })}
    </ul>
  );
};
