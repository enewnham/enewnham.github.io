import React, { FC } from "react";
import styled from "@emotion/styled";
import { StyledAnchor } from ".";

const Section = styled.p`
  padding-bottom: 0.5rem;
`;

export const TitleAnchor: FC<{ href: string }> = ({ href, children }) => (
  <Section>
    <StyledAnchor href={href}>{children}</StyledAnchor>
  </Section>
);
