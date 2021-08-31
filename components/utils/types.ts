export type PageSectionProps = {
  position: "left" | "right" | "center";
};

export type HeaderMenuItemProps = {
  selected?: boolean;
};

export type MenuItem = {
  label: string;
  to: string;
};

export type GlobalHeaderProps = {
  menuItems: Array<MenuItem>;
  selectedMenuItemIndex: number;
};
