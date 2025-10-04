import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Anirudha Dudhasagare | ${title}` : 'Anirudha Dudhasagare';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 