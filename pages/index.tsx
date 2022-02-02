import classNames from "classnames";
import Layout from "../components/layout";
import Logo from "../components/logo";
import Image from "next/image";
import WalkGraphic from "../components/walk.graphic";

const Index = () => {
  return (
    <Layout>
      <div
        className={classNames(
          "flex-1",
          "w-full",
          "flex",
          "flex-col",
          "justify-center",
          "items-center"
        )}
      >
        <h1 className={classNames("flex", "flex-col", "my-8")}>
          <span
            className={classNames(
              "text-2xl",
              "sm:text-4xl",
              "font-bold",
              "font-display"
            )}
          >
            Felix Wagner
          </span>
          <span
            className={classNames(
              "text-xl",
              "sm:text-2xl",
              "tracking-[5px]",
              "sm:tracking-[12px]",
              "uppercase"
            )}
          >
            Portfolio
          </span>
        </h1>
        <div
          className={classNames(
            "max-w-full",
            "max-h-[60vh]",
            "w-full",
            "aspect-square",
            "p-8",
            "relative"
          )}
        >
          <Image
            className={classNames("dark:invert")}
            src="/emperf.png"
            layout="fill"
          />
          <WalkGraphic />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
