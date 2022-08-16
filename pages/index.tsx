import classNames from "classnames";
import Layout from "../components/layout";
import TplGraphic from "../components/tpl.graphic";
import BtlGraphic from "../components/btl.graphic";

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
            "max-w-[520px]",
            "max-h-[60vh]",
            "w-full",
            "aspect-square",
            "p-8",
            "relative"
          )}
        >
          <img
            className={classNames("dark:invert", "object-cover")}
            src="/emperf.png"
          />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "justify-center",
            "px-4",
            "py-8",
            "space-y-8"
          )}
        >
          <div className={classNames("text-center")}>
            <h2
              className={classNames(
                "text-sm",
                "font-thin",
                "pb-2",
                "text-center"
              )}
            >
              Currently Working at:
            </h2>
            <a href="https://thepeaklab.com/">
              <TplGraphic className={classNames("w-44")} />
            </a>
          </div>
          <div className={classNames("text-center")}>
            <h2
              className={classNames(
                "text-sm",
                "font-thin",
                "pb-2",
                "text-center"
              )}
            >
              Check out my Gin Project:
            </h2>
            <a href="https://bottlebase.com">
              <BtlGraphic className={classNames("w-44")} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
