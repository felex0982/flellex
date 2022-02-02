import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import toast from "react-hot-toast";

import classNames from "classnames";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    switch (theme) {
      default:
      case "system":
        toast("🌙 Dark Theme");
        setTheme("dark");
        break;
      case "dark":
        toast("☀️ Light Theme");
        setTheme("light");
        break;
      case "light": {
        toast("✨ System preference");
        setTheme("system");
        break;
      }
    }
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className={classNames(
        "relative",
        "inline-flex",
        "flex-shrink-0",
        "h-[18px]",
        "w-[51px]",
        "border-2",
        "border-transparent",
        "cursor-pointer",
        "transition-colors",
        "ease-in-out",
        "duration-200",
        "focus:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-white",
        "focus-visible:ring-opacity-75",
        { "bg-stone-900": theme === "light" },
        { "bg-stone-200": theme === "dark" },
        { "bg-stone-900 dark:bg-stone-200": theme === "system" }
      )}
    >
      <span className={classNames("sr-only")}>Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          "pointer-events-none",
          "inline-block",
          "h-[14px]",
          "w-[14px]",
          "bg-white",
          "dark:bg-black",
          "shadow-lg",
          "transform",
          "ring-0",
          "transition",
          "ease-in-out",
          "duration-200",
          { "translate-x-8": theme === "light" },
          { "translate-x-4": theme === "dark" },
          { "translate-x-0": theme === "system" }
        )}
      />
    </Switch>
  );
};

export default ThemeToggle;
