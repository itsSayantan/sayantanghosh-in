import Link from "next/link";

import { GlobalHeaderProps } from "./types";

import { HeaderWrapper, HeaderMenu, MenuItem } from "../styled/Header";

const GlobalHeader = (props: GlobalHeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderMenu>
        {props.menuItems.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              data-selected={
                index === props.selectedMenuItemIndex ? "true" : "false"
              }
            >
              <Link href={menuItem.to}>{menuItem.label}</Link>
            </MenuItem>
          );
        })}
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default GlobalHeader;
