'use client';

import { useTheme } from "next-themes";

const ButtonChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={toggleTheme}
      className="dark:text-white text-[#333333]  dark:hover:text-yellow-200 hover:text-blue-600  font-medium"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default ButtonChangeTheme;
