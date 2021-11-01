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

export type SocialLink = {
  href: string;
  text: string;
  activeColor: string;
};

export type ParagraphProps = {
  maxWidth?: string;
  mobileMaxWidth?: string;
};

export type GapProps = {
  verticalGapInPixels?: number;
};
