import React, { FC } from "react";

export const SectionTitle: FC<{
  titleText: string;
}> = ({ titleText }) => {
  const arrayOfTitleWords = titleText.split(" ");
  return (
    <div className="section-title">
      <h2>
        {arrayOfTitleWords.map((singleTitleWord, index) => {
          return index % 2 != 0 ? (
            <span>{" " + singleTitleWord}</span>
          ) : (
            singleTitleWord
          );
        })}
      </h2>
    </div>
  );
};
