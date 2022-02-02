import classNames from "classnames";
import Footer from "./footer";
import Logo from "./logo";
import Meta from "./meta";
import ThemeToggle from "./theme-toggle";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Meta />
      <main>
        <div
          className={classNames(
            "min-h-screen",
            "flex",
            "flex-col",
            "bg-white",
            "dark:bg-black",
            "text-black",
            "dark:text-white"
          )}
        >
          <nav
            className={classNames(
              "w-full",
              "h-8",
              "px-2",
              "flex",
              "flex-row",
              "justify-between",
              "items-center"
            )}
          >
            <Logo />
            <ThemeToggle />
          </nav>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
