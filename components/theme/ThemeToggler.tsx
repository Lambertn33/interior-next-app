import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const handleSetTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const iconColor = theme === "dark" ? "#020817" : "#fff";
  return (
    <div className="flex">
      <div
        onClick={handleSetTheme}
        data-cy="theme-toggler"
        data-theme={theme}
        className="flex cursor-pointer bg-primary gap-x-4 dark:bg-light px-4 rounded-md py-2"
      >
        <SunIcon
          className="h-[1.2rem] w-[1.2rem] dark:scale-0 scale:100"
          color={iconColor}
        />
        <MoonIcon
          className="h-[1.2rem] w-[1.2rem] dark:scale-100 scale-0"
          color={iconColor}
        />
      </div>
    </div>
  );
};

export default ThemeToggler;
