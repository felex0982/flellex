import classNames from "classnames";

const Logo = () => {
  const title = "Felix Wagner";

  return (
    <div
      className={classNames(
        "dark:text-white",
        "font-display",
        "text-glitch",
        "text-sm",
        "italic",
        "px-4"
      )}
      data-text={title}
    >
      {title}
    </div>
  );
};

export default Logo;
