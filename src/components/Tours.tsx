import { SectionTitle } from "./SectionTitle";
import { Cards } from "./Cards";
import { TOURS_LIST } from "../utils/constants";

export function Tours() {
  return (
    <section className="section" id="tours">
      <SectionTitle titleText="featured tours" />

      <div className="section-center featured-center">
        {TOURS_LIST.map((tourItem, index) => {
          const { ...restOfTourItemParameters } = tourItem;
          return (
            <Cards
              key={`${tourItem.tourTitle}${index}`}
              {...restOfTourItemParameters}
            />
          );
        })}
      </div>
    </section>
  );
}
