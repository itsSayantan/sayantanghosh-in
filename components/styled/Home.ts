import styled from "styled-components";
import { CenterStyles } from "./utils";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  flex-wrap: wrap;
  ${CenterStyles};

  @media (min-width: 480px) {
    width: 60%;
  }
`;

export const HomeContent = styled.div`
  text-align: center;
`;

export const MainLine = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 300;

  @media (min-width: 480px) {
    font-size: 60px;
  }
`;
