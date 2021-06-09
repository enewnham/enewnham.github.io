import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { StyledAnchor } from ".";

const Section = styled.p`
  padding-bottom: 0.5rem;
`;

export default ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <Section>
    <StyledAnchor href={href}>{children}</StyledAnchor>
  </Section>
);
