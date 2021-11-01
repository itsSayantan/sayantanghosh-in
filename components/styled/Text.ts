import styled from "styled-components";
import { ParagraphProps } from "../utils/types";

export const MainLine = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: 300;
  color: var(--global-text-color);

  @media (min-width: 480px) {
    font-size: 7rem;
  }
`;

MainLine.displayName = "MainLine";

export const Paragraph = styled.div<ParagraphProps>`
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--global-text-color);
  max-width: ${(props) =>
    props.mobileMaxWidth ? props.mobileMaxWidth : "unset"};

  @media (min-width: 480px) {
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "unset")};
  }
`;

Paragraph.displayName = "Paragraph";
