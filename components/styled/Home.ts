import styled from "styled-components";
import { CenterStyles } from "./utils";
import { PageSectionProps } from "../utils/types";

export const HomePageSection = styled.section<PageSectionProps>`
  width: 100%;
  height: calc(100vh - 100px);
  text-align: ${(props: PageSectionProps) => props.position};
`;

HomePageSection.displayName = "HomePageSection";

export const SocialLinks = styled.div`
  align-self: center;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  ${CenterStyles};
  flex-wrap: wrap;
`;

SocialLinks.displayName = "SocialLinks";

export const SocialLink = styled.a<{ activeColor: string }>`
  padding: 10px 20px;
  border: 2px solid var(--global-border-color);
  font-size: 1.2rem;
  margin-bottom: 10px;
  background-color: var(--global-bg-color);
  color: var(--global-text-color);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.activeColor};
    border-color: ${(props) => props.activeColor};
    color: #fff;
  }
`;

SocialLink.displayName = "SocialLink";
