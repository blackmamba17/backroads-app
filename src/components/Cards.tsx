import { FC } from "react";

type Cards = {
  tourDateText: string;
  tourTitle: string;
  tourParagraphDescription: string;
  tourLocation: string;
  tourDuration: string;
  tourCosts: string;
  tourImage: string;
};

export const Cards: FC<Cards> = (props) => {
  const {
    tourDateText,
    tourTitle,
    tourParagraphDescription,
    tourLocation,
    tourDuration,
    tourCosts,
    tourImage,
  } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tourImage} className="tour-img" alt="" />
        <p className="tour-date">{tourDateText}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>{tourParagraphDescription}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {tourLocation}
          </p>
          <p>{tourDuration}</p>
          <p>{tourCosts}</p>
        </div>
      </div>
    </article>
  );
};
