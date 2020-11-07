import App from "next/app";
import { TinaCMS, TinaProvider } from "tinacms";
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from "react-tinacms-github";

export default class Site extends App {
  cms: TinaCMS;

  constructor(props: any) {
    super(props);

    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.GITHUB_CLIENT_ID!,
      baseRepoFullName: process.env.REPO_FULL_NAME!,
      baseBranch: process.env.BASE_BRANCH,
      authScope: "repo",
    });

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github,
      },
      media: new GithubMediaStore(github),
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <EditLink cms={this.cms} />
          hallo
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    );
  }
}

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", "Bearer " + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};
