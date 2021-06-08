import React, { PropsWithChildren } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";

const globalStyle = css`
  body {
    line-height: 1.5;
  }
  section {
    display: block;
  }
  body {
    line-height: 1.5;
  }
  ol,
  ul {
    list-style: none;
  }
  q {
    quotes: none;
  }
  q:after {
    content: "";
    content: none;
  }
`;

const Page = styled.div`
  margin: 0 auto;
  padding: 4rem 2rem 8rem 2rem;
  max-width: 600px;
  color: #333333;
`;

export default ({ children }: PropsWithChildren<{}>) => (
  <Page>
    <Global styles={globalStyle} />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </Page>
);
