import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { header2, secondaryDark } from "./Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

const Name = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;

const JobTitle = styled.p`
  ${header2}
  margin: 0;
`;

const ContactDetail = ({
  icon,
  children,
}: PropsWithChildren<{ icon: IconDefinition }>) => (
  <div>
    <FontAwesomeIcon color={secondaryDark} icon={icon} /> {children}
  </div>
);

export default () => (
  <div>
    <Name>Elliot Newnham</Name>
    <JobTitle>
      Full Stack Engineer | Embedded Software Engineer | Software Manager
    </JobTitle>
    <ContactDetail icon={faEnvelope}>elliot.newnham@gmail.com</ContactDetail>
  </div>
);
