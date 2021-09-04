import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

HeaderWrapper.displayName = "HeaderWrapper";

export const HeaderMenu = styled.div``;

HeaderMenu.displayName = "HeaderMenu";

export const MenuItem = styled.div`
  &[data-selected="true"] {
    border-bottom: 1px solid black;
  }

  &:not(:first-of-type) {
    margin-top: 3px;
  }
  > div {
    font-size: 0.9rem;
    font-weight: 400;
    padding: 3px 5px;
  }
`;

MenuItem.displayName = "MenuItem";
