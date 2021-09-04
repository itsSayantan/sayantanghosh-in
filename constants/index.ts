import { MenuItem, SocialLink } from "../components/utils/types";
import { Constants } from "../types/utils";

export const utils: Constants = {
  meta: {
    title: "Sayantan Ghosh",
    description:
      "I am Sayantan Ghosh. I am a web developer from Bangalore, India. I am familier with web technologies like HTML, CSS, Javascript, Typescript, React.Js, Node.JS etc.",
    keywords:
      "Sayantan, Ghosh, Sayantan Ghosh, itsSayantan, web, frontend, ui, developer, web, development, web development, HTML, CSS, Javascript, Typescript, React, React.js, Node, Node.JS, Github, npm, Bangalore, Bengaluru, India",
  },
};
export const MENU_ITEMS: Array<MenuItem> = [{ label: "Home", to: "/" }];
export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    href: "https://github.com/itsSayantan",
    text: "Github",
    activeColor: "rgb(1,4,9)",
  },
  {
    href: "https://www.linkedin.com/in/itssayantan/",
    text: "Linkedin",
    activeColor: "rgb(10, 102, 194)",
  },
  {
    href: "https://twitter.com/itsSayantan",
    text: "Twitter",
    activeColor: "rgb(27, 149, 224)",
  },
];
