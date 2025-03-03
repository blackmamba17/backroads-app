import tourImage1 from "../images/tour-1.jpeg";
import tourImage2 from "../images/tour-2.jpeg";
import tourImage3 from "../images/tour-3.jpeg";
import tourImage4 from "../images/tour-4.jpeg";

export const NAVBAR_LIST_ITEMS = ["Home", "About", "Services", "Tours"];
export const NAVBAR_LIST_ICONS = [
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-squarespace",
];
export const NAVBAR_LIST_ICONS_AND_LINKS = [
  {
    icon: "fab fa-facebook",
    link: "https://www.facebook.com",
  },
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "fab fa-squarespace",
    link: "https://www.squarespace.com",
  },
];
export const ARTICLES_LIST = [
  {
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    paragraphTextContent: "Lorem ipsum dolor sit amet consect",
  },
  {
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    paragraphTextContent: "Lorem ipsum dolor sit amet consect",
  },
  {
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    paragraphTextContent: "Lorem ipsum dolor sit amet consect",
  },
];
export const TOURS_LIST = [
  {
    tourDateText: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourParagraphDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "china",
    tourDuration: "6 days",
    tourCosts: "from $2100",
    tourImage: tourImage1,
  },
  {
    tourDateText: "october 1th, 2020",
    tourTitle: "Best of Java",
    tourParagraphDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "indonesia",
    tourDuration: "11 days",
    tourCosts: "from $1400",
    tourImage: tourImage2,
  },
  {
    tourDateText: "september 15th, 2020",
    tourTitle: "explore hong kong",
    tourParagraphDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "hong kong",
    tourDuration: "8 days",
    tourCosts: "from $5000",
    tourImage: tourImage3,
  },
  {
    tourDateText: "december 5th, 2019",
    tourTitle: "kenya highlights",
    tourParagraphDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourLocation: "kenya",
    tourDuration: "20 days",
    tourCosts: "from $3300",
    tourImage: tourImage4,
  },
];
