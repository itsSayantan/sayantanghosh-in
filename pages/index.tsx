import type { NextPage } from "next";

import Meta from "../components/utils/Meta";
import GlobalHeader from "../components/utils/GlobalHeader";
import {
  HomePageSection,
  HomeWrapper,
  MainLine,
  SocialLinks,
  SocialLink,
} from "../components/styled/Home";

import { MENU_ITEMS, SOCIAL_LINKS } from "../constants";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <HomeWrapper>
        <GlobalHeader menuItems={MENU_ITEMS} selectedMenuItemIndex={0} />
        <HomePageSection position="right">
          <MainLine>Sayantan Ghosh</MainLine>
          <MainLine>Web Developer</MainLine>
          <SocialLinks>
            {SOCIAL_LINKS.map((socialLink, index) => {
              return (
                <SocialLink
                  key={index}
                  href={socialLink.href}
                  activeColor={socialLink.activeColor}
                >
                  {socialLink.text}
                </SocialLink>
              );
            })}
          </SocialLinks>
        </HomePageSection>
      </HomeWrapper>
    </>
  );
};

export default Home;
