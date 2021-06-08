/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import { Title2, Title, SubTitle } from "../components";
import Layout from "../components/Layout";
import TitleAnchor from "../components/TitleAnchor";

export default () => (
  <Layout>
    <Title>Elliot Newnham</Title>

    <Title2>GitHub Projects</Title2>
    <TitleAnchor href="https://github.com/enewnham/Orleans.Providers.MSSQLDapper">
      Orleans.Providers.MSSQLDapper
    </TitleAnchor>
    <p>
      Optimized Orleans providers for Microsoft SQL Server for In-Memory OLTP
      and Natively Compiled Stored Procedures
    </p>
  </Layout>
);
