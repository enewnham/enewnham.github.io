import React, { FC } from "react";
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

const ContactDetail: FC<{ icon: IconDefinition; href: string }> = ({
  icon,
  href,
  children,
}) => (
  <div>
    <FontAwesomeIcon color={primaryLight} icon={icon} />{" "}
    <UnstyledAnchor href={href}>{children}</UnstyledAnchor>
  </div>
);

const JobTitle: FC = ({ children }) => (
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
      {children}
    </span>
  </p>
);

export const Heading: FC = () => (
  <div>
    <Name>Elliot Newnham</Name>
    <JobTitle>
      Full Stack Engineer | Embedded Software Engineer | Software Manager
    </JobTitle>
    <ContactDetail icon={faEnvelope} href="mailto:elliot.newnham@gmail.com">
      elliot.newnham@gmail.com
    </ContactDetail>
    <ContactDetail icon={faGithub} href="https://github.com/enewnham">
      https://github.com/enewnham
    </ContactDetail>
  </div>
);
