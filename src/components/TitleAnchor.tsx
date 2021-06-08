import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

const Section = styled.p`
  padding-bottom: 0.5rem;
`;

const Link = styled.a`
  transition: box-shadow 160ms ease 0s;
  box-shadow: rgb(240, 250, 255) 0px -10px 0px inset;
  border-bottom: 2px solid rgb(200, 240, 255);
  text-decoration: none;
  color: #323336;
  &:hover {
    box-shadow: rgb(200, 240, 255) 0px -1.2em 0px inset;
  }
`;

export default ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <Section>
    <Link href={href}>{children}</Link>
  </Section>
);
