import React, { FC } from "react";

export const SectionTitle: FC<{
  titleText: string;
}> = ({ titleText }) => {
  return (
    <div className="section-title">
      <h2>
        {/* about <span>us</span> */}
        {titleText}
      </h2>
    </div>
  );
};
