import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";

import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import Heading from "../components/heading";

interface IProps {
  sourceProvider: any;
  error: any;
  preview: boolean;
  file: any;
}

const StyledSubtitle = styled(Heading)<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.subheading};
  text-transform: uppercase;
  ${typography};
`;

const Home = ({ file }: IProps) => {
  const formOptions = {
    label: "Home Page",
    fields: [
      { name: "title", component: "text" },
      { name: "subtitle", component: "text" },
      { name: "tagline", component: "text" },
    ],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <Layout title={data.tagline}>
      <Heading as="h1">{data.title}</Heading>
      <StyledSubtitle letterSpacing={[6, 10, 18]}>
        {data.subtitle}
      </StyledSubtitle>
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
