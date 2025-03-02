import React, { FC } from "react";

export const SectionTitle: FC<{
  titleText: string;
}> = ({ titleText }) => {
  const arrayOfTitleWords = titleText.split(" ");
  const modifiedTitleTextWithSpans = arrayOfTitleWords.reduce(
    (accumulator, currentTextWord, index) => {
      if (index % 2 == 0) {
        return accumulator + "<span>" + currentTextWord + "</span>";
      } else {
        return accumulator + currentTextWord;
      }
    },
    ""
  );
  return (
    <div className="section-title">
      <h2>
        {/* about <span>us</span> */}
        {modifiedTitleTextWithSpans}
      </h2>
    </div>
  );
};
