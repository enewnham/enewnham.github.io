import styled from "@emotion/styled";
import { primaryExtraLight } from "./variables";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const Title2 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 12px;
  font-weight: 600;
  color: #c9cccf;
  letter-spacing: 1.2px;
`;

export const MutedSmall = styled.small`
  color: #96999b;
  margin-top: 0;
`;

export const SubTitle = styled.p`
  color: #96999b;
  margin-top: 0;
`;

export const UnstyledAnchor = styled.a`
  color: unset;
  text-decoration: unset;
`;

export const StyledAnchor = styled.a`
  transition: box-shadow 160ms ease 0s;
  box-shadow: #eefbff 0px -10px 0px inset;
  border-bottom: 2px solid ${primaryExtraLight};
  text-decoration: none;
  color: #323336;
  &:hover {
    box-shadow: #eefbff 0px -1.2em 0px inset;
  }
`;
