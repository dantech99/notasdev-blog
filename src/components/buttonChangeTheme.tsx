'use client';

import { useState, useEffect } from 'react';

const ButtonChangeTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark' // Get initial theme from localStorage or default to 'dark'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the new theme in localStorage
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark'); // Toggle dark class on body based on theme
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ButtonChangeTheme;
