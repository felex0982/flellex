import Link from "next/link";
import Layout from "../components/layout";
import Login from "../components/login";

const AboutPage = () => {
  return (
    <Layout title="Login | Portfolio">
      <h1>Login</h1>
      <p>
        <Login />
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};
export default AboutPage;
