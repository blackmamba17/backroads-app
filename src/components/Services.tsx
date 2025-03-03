import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Articles } from "./Articles";

export function Services() {
  return (
    <section className="section services" id="services">
      <SectionTitle titleText="our services" />
      <div className="section-center services-center">
        <Articles
          articleClassName="service"
          spanClassName="service-icon"
          iconClassName="fas fa-wallet fa-fw"
          divClassName="service-info"
          h4ClassName="service-title"
          h4TextContent="saving money"
          pClassName="service-text"
          pTextContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
        />
        <Articles
          articleClassName="service"
          spanClassName="service-icon"
          iconClassName="fas fa-tree fa-fw"
          divClassName="service-info"
          h4ClassName="service-title"
          h4TextContent="endless hiking"
          pClassName="service-text"
          pTextContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia."
        />
        <Articles
          articleClassName="service"
          spanClassName="service-icon"
          iconClassName="fas fa-socks fa-fw"
          divClassName="service-info"
          h4ClassName="service-title"
          h4TextContent="amazing comfort"
          pClassName="service-text"
          pTextContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia."
        />
      </div>
    </section>
  );
}
