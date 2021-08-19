import type { NextPage } from "next";

import Meta from "../components/utils/Meta";
import { HomeContent, HomeWrapper, MainLine } from "../components/styled/Home";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <HomeWrapper>
        <HomeContent>
          <MainLine>Sayantan Ghosh</MainLine>
          <MainLine>{"</>"}</MainLine>
          <MainLine>Frontend Developer</MainLine>
        </HomeContent>
      </HomeWrapper>
    </>
  );
};

export default Home;
