import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledFooter = styled.footer``;

const Layout = ({ children, title = "Felix Wagner | Portfolio" }: Props) => (
  <StyledWrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <header></header>
    {children}
    <StyledFooter>
      <h2>Contact</h2>
      <a href="mailto:moin@fawagner.de">moin@fawagner.de</a>
    </StyledFooter>
  </StyledWrapper>
);

export default Layout;
