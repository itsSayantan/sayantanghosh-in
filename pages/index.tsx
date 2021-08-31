import type { NextPage } from "next";

import Meta from "../components/utils/Meta";
import GlobalHeader from "../components/utils/GlobalHeader";
import {
  HomePageSection,
  HomeWrapper,
  MainLine,
} from "../components/styled/Home";

import { MENU_ITEMS } from "../constants";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <HomeWrapper>
        <GlobalHeader menuItems={MENU_ITEMS} selectedMenuItemIndex={0} />
        <HomePageSection position="right">
          <MainLine>Sayantan Ghosh</MainLine>
          <MainLine>Web Developer</MainLine>
        </HomePageSection>
      </HomeWrapper>
    </>
  );
};

export default Home;
