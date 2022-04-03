import styled from "styled-components";
import { ParagraphProps } from "../utils/types";

export const Paragraph = styled.div<ParagraphProps>`
  max-width: ${(props) =>
    props.mobileMaxWidth ? props.mobileMaxWidth : "unset"};

  @media (min-width: 480px) {
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "unset")};
  }
`;

Paragraph.displayName = "Paragraph";
