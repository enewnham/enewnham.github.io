/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import {
  SubTitle,
  Title2,
  StyledAnchor,
  MutedSmall,
  Title3,
} from "../components";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { TitleAnchor } from "../components/TitleAnchor";

export default () => (
  <Layout>
    <Heading />
    <p>
      Full-Stack IoT software engineer. My passion is engineering distributed
      back-end services for the modern world. I've worked with bare-metal
      micro-controllers using low-level comm protocols. Resource constrained
      embedded linux computers running optimized webservers and RPC interfaces.
      And expansive distributed micro-services in the cloud. My portfolio
      includes a full technology stack that ingests terabytes of data from IoT
      devices across the globe with live dashboards, data pipelines, business
      intelligence, and alerting tools.
    </p>
    <Title2>Work Experience</Title2>
    <TitleAnchor href="https://mri-inc.net/">MRI, Inc.</TitleAnchor>
    <SubTitle>
      Technical Lead Engineer | Manager of{" "}
      <StyledAnchor href="https://portal.mri-inc.net/landing">
        SmartVu®
      </StyledAnchor>{" "}
      Development | 2013 - Current
    </SubTitle>
    <p>
      Lead engineer for an expansive distributed micro-services IoT dashboard
      monitoring High-Performance LCD Displays for Outdoor Environments. Manager
      for a team engineers across disciplines ranging from bare-metal
      micro-controllers through to business intelligence and single-page
      applications. Architect for system that supports monitoring, maintenance,
      production, analysis, and customer access for thousands of displays across
      the globe.
    </p>
    <Title2>GitHub Projects</Title2>
    <MutedSmall>
      While, most of my work is on a self-hosted GitLab at work, I have a few
      forks and submissions here.
    </MutedSmall>
    <TitleAnchor href="https://github.com/enewnham/Orleans.Providers.MSSQLDapper">
      Orleans.Providers.MSSQLDapper
    </TitleAnchor>
    <p>
      Optimized Orleans providers for Microsoft SQL Server for In-Memory OLTP
      and Natively Compiled Stored Procedures. Using distributed tracing and SQL
      Server analyzer a significant bottleneck was mitigated.
    </p>
    <TitleAnchor href="https://github.com/enewnham/Orleans.Providers.MSSQLDapper">
      minimal-spa
    </TitleAnchor>
    <p>
      Modern C# development skeleton for proof-of-concepts and coding
      challenges. Using the latest language features of C# and typescript you
      can quickly prototype a new webapp.
    </p>
    <TitleAnchor href="https://github.com/enewnham/enewnham.github.io">
      enewnham.github.io
    </TitleAnchor>
    <p>
      A gatsby JS resume written using best practices in react, styled
      components, and typescript. While I'm not a full-time front-end engineer I
      have a solid foundation in modern web technologies.
    </p>
    <TitleAnchor href="https://github.com/enewnham/ts-transform-async-to-mobx-flow/tree/feature/action-decorators">
      ts-transform-async-to-mobx-flow
    </TitleAnchor>
    <p>
      Fork for a typescript transformer that converts async/await functions to
      mobx flow yield functions. As a manager it is important to routinely find
      technologies to improve developer quality.
    </p>
    <Title2>Education</Title2>
    <Title3>Georgia Institute of Technology</Title3>
    <SubTitle>
      B.S. Electrical Engineering - Systems &amp; Controls Engineering | 2009 -
      2013
    </SubTitle>
  </Layout>
);
