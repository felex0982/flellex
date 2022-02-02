import classNames from "classnames";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "p-4",
        "bg-white",
        "dark:bg-black",
        "text-center",
        "text-stone-500",
        "dark:text-stone-800"
      )}
    >
      <a className={classNames("hover:underline")} href="moin@fawagner.de">
        Contact: moin@fawagner.de
      </a>
    </footer>
  );
};

export default Footer;
