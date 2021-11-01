import type { NextPage } from "next";

import Meta from "../components/utils/Meta";
import GlobalHeader from "../components/utils/GlobalHeader";
import GlobalFooter from "../components/utils/GlobalFooter";
import { MainLine, Paragraph } from "../components/styled/Text";
import { A, Gap, PageWrapper } from "../components/styled/utils";
import {
  HomePageSection,
  SocialLinks,
  SocialLink,
} from "../components/styled/Home";

import { MENU_ITEMS, SOCIAL_LINKS } from "../constants";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <GlobalHeader menuItems={MENU_ITEMS} selectedMenuItemIndex={0} />
      <PageWrapper>
        <HomePageSection position="right">
          <Gap />
          <MainLine>Sayantan Ghosh</MainLine>
          <MainLine>Web Developer</MainLine>
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
            I primarily work with frontend technologies like <b>HTML</b>,{" "}
            <b>CSS</b>,<b>Javascript</b>, <b>React.JS</b>, etc. For the server
            side, I like using the <b>Express.JS</b> framework of <b>Node.JS</b>{" "}
            and <b>PostgreSQL</b> for all the RDBMS needs.
          </Paragraph>
          <Gap verticalGapInPixels={50} />
          <Paragraph maxWidth="50%" mobileMaxWidth="100%">
            Other than coding, I like playing online chess and follow chess
            extensively on youtube and other platforms. Challenge me on{" "}
            <A
              target="_blank"
              href="https://www.chess.com/member/sayantan_ghosh"
              rel="nofollow"
            >
              Chess.com
            </A>
          </Paragraph>
        </HomePageSection>
        <GlobalFooter />
      </PageWrapper>
    </>
  );
};

export default Home;
