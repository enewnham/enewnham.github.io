import React from "react";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1>Hey there and apple welcome to my attempt at social media 👋</h1>

    <li>
      <ul>
        📫{" "}
        <a href="mailto: elliot.newnham@gmail.com">elliot.newnham@gmail.com</a>
      </ul>
      <ul>
        Are those "under construction" placeholders from the 90's still a thing?
      </ul>
      <ul>CSS is overrated</ul>
    </li>

    <h3>
      <a href="https://github.com/enewnham/Orleans.Providers.MSSQLDapper">
        Orleans.Providers.MSSQLDapper
      </a>
    </h3>
    <p>
      Optimized Orleans providers for Microsoft SQL Server for In-Memory OLTP
      and Natively Compiled Stored Procedures
    </p>
  </Layout>
);
