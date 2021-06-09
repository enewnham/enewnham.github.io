/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import { Title2 } from "../components";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { TitleAnchor } from "../components/TitleAnchor";

export default () => (
  <Layout>
    <Heading />

    <Title2>GitHub Projects</Title2>
    <TitleAnchor href="https://github.com/enewnham/Orleans.Providers.MSSQLDapper">
      Orleans.Providers.MSSQLDapper
    </TitleAnchor>
    <p>
      Optimized Orleans providers for Microsoft SQL Server for In-Memory OLTP
      and Natively Compiled Stored Procedures
    </p>

    <TitleAnchor href="https://github.com/enewnham/enewnham.github.io">
      enewnham.github.io
    </TitleAnchor>
    <p>
      A gatsby JS resume written using best practices in react, styled
      components, and typescript. While I'm not a full-time front-end engineer I
      have a solid foundation knowledge in modern techniques in building
      websites.
    </p>
  </Layout>
);
