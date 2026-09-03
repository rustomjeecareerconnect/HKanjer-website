'use client';

import { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    // Clear any stale dark theme saved in user's browser localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}

