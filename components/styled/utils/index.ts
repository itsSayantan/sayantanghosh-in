import styled, { css } from "styled-components";
import { GapProps } from "../../utils/types";

export const CenterStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  ${CenterStyles};
`;

PageWrapper.displayName = "PageWrapper";

export const Gap = styled.div<GapProps>`
  width: 100%;
  height: ${(props) =>
    props.verticalGapInPixels ? props.verticalGapInPixels + "px" : "100px"};
`;

Gap.displayName = "Gap";
