import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  background-color: var(--global-bg-color);
  z-index: 2;
  box-shadow: 0 2.76726px 2.21381px rgb(0 0 0 / 7%),
    0 6.6501px 5.32008px rgb(0 0 0 / 4%), 0 12.5216px 10.0172px rgb(0 0 0 / 3%),
    0 22.3363px 17.869px rgb(0 0 0 / 3%), 0 41.7776px 33.4221px rgb(0 0 0 / 2%),
    0 100px 80px rgb(0 0 0 / 2%);
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
