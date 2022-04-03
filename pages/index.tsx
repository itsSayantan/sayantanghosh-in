import type { NextPage } from "next";

import Meta from "../components/utils/Meta";
import GlobalHeader from "../components/utils/GlobalHeader";
import GlobalFooter from "../components/utils/GlobalFooter";
import { Paragraph } from "../components/styled/Text";
import { Gap, PageWrapper } from "../components/styled/utils";
import {
  HomePageSection,
  SocialLinks,
  SocialLink,
} from "../components/styled/Home";

import { MENU_ITEMS, MSGS, SOCIAL_LINKS } from "../constants";
import { Colors, Text, TextSizes } from "dont-use-this-ui";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <GlobalHeader menuItems={MENU_ITEMS} selectedMenuItemIndex={0} />
      <PageWrapper>
        <HomePageSection position="right">
          <Gap />
          <Text
            color={Colors.dark1}
            ellipsis={false}
            size={TextSizes.xl}
            weight="300"
          >
            {MSGS.pages.home.name}
          </Text>
          <Text
            color={Colors.dark1}
            ellipsis={false}
            size={TextSizes.xl}
            weight="300"
          >
            {MSGS.pages.home.designation}
          </Text>
          <SocialLinks>
            {SOCIAL_LINKS.map((socialLink, index) => {
              return (
                <SocialLink
                  key={index}
                  href={socialLink.href}
                  activeColor={socialLink.activeColor}
                  target="_blank"
                >
                  {socialLink.text}
                </SocialLink>
              );
            })}
          </SocialLinks>
        </HomePageSection>
        <HomePageSection position="left">
          <Gap />
          <Paragraph maxWidth="50%" mobileMaxWidth="100%">
            <Text color={Colors.dark1} ellipsis={false} size={TextSizes.lg}>
              I primarily work with frontend technologies like <b>HTML</b>,{" "}
              <b>CSS</b>,<b>Javascript</b>, <b>React.JS</b>, etc. For the server
              side, I like using the <b>Express.JS</b> framework of{" "}
              <b>Node.JS</b> and <b>PostgreSQL</b> for all the RDBMS needs.
            </Text>
          </Paragraph>
        </HomePageSection>
        <GlobalFooter />
      </PageWrapper>
    </>
  );
};

export default Home;
