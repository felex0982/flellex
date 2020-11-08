import Link from "next/link";
import Button from "../components/button";
import Heading from "../components/heading";
import Layout from "../components/layout";
import Login from "../components/login";
import styled from "styled-components";

const StyledLoginBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  width: 100%;
  margin: 50px auto;
  max-width: 500px;
  box-shadow: 0px 0px 25px -17px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
`;

const AboutPage = () => {
  return (
    <Layout title="Login | Portfolio">
      <Heading as="h1">Login</Heading>
      <StyledLoginBox>
        <Login />
        <Link href="/">
          <Button>Go home</Button>
        </Link>
      </StyledLoginBox>
    </Layout>
  );
};

export default AboutPage;
