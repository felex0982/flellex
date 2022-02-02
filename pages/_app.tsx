import { AppProps } from "next/app";
import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "toaster",
            style: {
              padding: "2px",
              fontSize: "12px",
              borderRadius: "0",
              boxShadow: "none",
            },
            duration: 700,
          }}
          containerStyle={{
            top: 5,
            right: 70,
          }}
        />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
