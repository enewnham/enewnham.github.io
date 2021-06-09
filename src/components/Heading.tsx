import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { header2, primaryLight } from "./variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { UnstyledAnchor } from ".";

const Name = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;

const ContactDetail = ({
  icon,
  href,
  children,
}: PropsWithChildren<{ icon: IconDefinition, href: string }>) => (
  <div>
    <FontAwesomeIcon color={primaryLight} icon={icon} />{" "}
    <UnstyledAnchor href={href}>{children}</UnstyledAnchor>
  </div>
);

const JobTitle = ({ children }: PropsWithChildren<{}>) => (
  <p
    css={css`
      ${header2}
      margin-top: 0;
    `}
  >
    <span
      css={css`
        padding-bottom: 0.2rem;
        border-bottom: 1px solid;
      `}
    >
      Full Stack Engineer | Embedded Software Engineer | Software Manager
    </span>
  </p>
);

export default () => (
  <div>
    <Name>Elliot Newnham</Name>
    <JobTitle>
      Full Stack Engineer | Embedded Software Engineer | Software Manager
    </JobTitle>
    <ContactDetail icon={faEnvelope} href="mailto:elliot.newnham@gmail.com">elliot.newnham@gmail.com</ContactDetail>
    <ContactDetail icon={faGithub} href="https://github.com/enewnham">https://github.com/enewnham</ContactDetail>
  </div>
);
