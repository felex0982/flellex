import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className={`${theme === "dark" ? "bg-stone-900" : "bg-stone-200"}
          relative inline-flex flex-shrink-0 h-[18px] w-[34px] border-2 border-transparent cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${theme === "dark" ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] bg-white dark:bg-black shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  );
};

export default ThemeToggle;
