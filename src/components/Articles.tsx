import { FC } from "react";

type ArticlesType = {
  articleClassName: string;
  spanClassName: string;
  iconClassName: string;
  divClassName: string;
  h4ClassName: string;
  h4TextContent: string;
  pClassName: string;
  pTextContent: string;
};

export const Articles: FC<ArticlesType> = (props) => {
  const {
    articleClassName,
    spanClassName,
    iconClassName,
    divClassName,
    h4ClassName,
    h4TextContent,
    pClassName,
    pTextContent,
  } = props;
  return (
    <article className={articleClassName}>
      <span className={spanClassName}>
        <i className={iconClassName}></i>
      </span>
      <div className={divClassName}>
        <h4 className={h4ClassName}>{h4TextContent}</h4>
        <p className={pClassName}>{pTextContent}</p>
      </div>
    </article>
  );
};
