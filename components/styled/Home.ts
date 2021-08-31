import styled from "styled-components";
import { CenterStyles } from "./utils";
import { PageSectionProps } from "../utils/types";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  flex-wrap: wrap;
  ${CenterStyles};
`;

HomeWrapper.displayName = "HomeWrapper";

export const HomePageSection = styled.section<PageSectionProps>`
  width: 100%;
  height: calc(100vh - 100px);
  text-align: ${(props: PageSectionProps) => props.position};
`;

HomePageSection.displayName = "HomePageSection";

export const MainLine = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 300;

  @media (min-width: 480px) {
    font-size: 7rem;
  }
`;

MainLine.displayName = "MainLine";
