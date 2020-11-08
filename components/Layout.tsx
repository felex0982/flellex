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
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children, title = "Felix Wagner | Portfolio" }: Props) => (
  <StyledWrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </StyledWrapper>
);

export default Layout;
