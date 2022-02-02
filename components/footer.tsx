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
      <a href="https://flellex.de">Contact Page</a>
      <span> | </span>
      <a href="https://bottlebase.com">Bottlebase</a>
    </footer>
  );
};

export default Footer;
