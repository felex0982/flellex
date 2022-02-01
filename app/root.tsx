import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import gobalStyles from "./global.css";
import tailwindStyles from "./tailwind.css";
// styles is now something like /build/global-AE33KB2.css

export function links() {
  return [
    { rel: "stylesheet", href: gobalStyles },
    { rel: "stylesheet", href: tailwindStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Felix Wagner - Portfolio" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
