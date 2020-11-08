import React, { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
    padding: 35px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: 50px;
  }
`;

const StyledContent = styled.div`
  flex: 1;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey};

  :hover {
    opacity: 0.8;
  }
`;

const StyledFooter = styled.footer``;

const Layout = ({ children, title = "Felix Wagner | Portfolio" }: Props) => (
  <StyledWrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <StyledContent>{children}</StyledContent>
    <StyledFooter>
      <h2>Contact</h2>
      <StyledAnchor href="mailto:moin@fawagner.de">
        moin@fawagner.de
      </StyledAnchor>
    </StyledFooter>
  </StyledWrapper>
);

export default Layout;
