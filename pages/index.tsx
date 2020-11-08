import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";

import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";

import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";

interface IProps {
  sourceProvider: any;
  error: any;
  preview: boolean;
  file: any;
}

const StyledSubtitle = styled.span`
  font-family: ${(props) => props.theme.fonts.subheading};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes[4]};
  letter-spacing: ${(props) => props.theme.space[2]};
`;

const Home = ({ file }: IProps) => {
  const formOptions = {
    label: "Home Page",
    fields: [{ name: "title", component: "text" }],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <Layout title={data.site_title}>
      <h1>{data.title}</h1>
      <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default Home;

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  };
};
