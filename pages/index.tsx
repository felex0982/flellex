import Link from "next/link";
import Layout from "../components/Layout";

import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";

interface IProps {
  sourceProvider: any;
  error: any;
  preview: boolean;
  file: IDataObject;
}

interface IDataObject {
  fileRelativePath: string;
  data: IDataInterface;
}

interface IDataInterface {
  title: string;
}

const Home = ({ file }: IProps) => {
  const data = file.data;

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{data.title}</h1>
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
