import { SectionTitle } from "./SectionTitle";
import { Articles } from "./Articles";
import { ARTICLES_LIST } from "../utils/constants";

export function Services() {
  return (
    <section className="section services" id="services">
      <SectionTitle titleText="our services" />
      <div className="section-center services-center">
        {ARTICLES_LIST.map((articleItem, index) => {
          const { icon, title, paragraphTextContent } = articleItem;
          return (
            <Articles
              key={`${title}${index}`}
              articleClassName="service"
              spanClassName="service-icon"
              iconClassName={icon}
              divClassName="service-info"
              h4ClassName="service-title"
              h4TextContent={title}
              pClassName="service-text"
              pTextContent={paragraphTextContent}
            />
          );
        })}
      </div>
    </section>
  );
}
