import React from 'react';

const useScrollInfinite = ({ infinite = true, distance = 0.8 }) => {
  const [pages, setPages] = React.useState([1]);
  const waiting = React.useRef(false);

  React.useEffect(() => {
    function ScrollInfinite() {
      if (infinite) {
        let scrool = window.scrollY;
        let heigth = document.documentElement.scrollHeight - window.innerHeight;
        if (scrool > heigth * distance && !waiting.current) {
          setPages((pag) => [...pag, pages.length + 1]);
          waiting.current = true;
        }
        setTimeout(() => {
          waiting.current = false;
        }, 500);
      }
    }
    window.addEventListener('scroll', ScrollInfinite);
    window.addEventListener('wheel', ScrollInfinite);

    return () => {
      window.removeEventListener('scroll', ScrollInfinite);
      window.removeEventListener('wheel', ScrollInfinite);
    };
  }, [pages, infinite, distance]);
  const currentPage = pages[pages.length - 1];
  return {
    currentPage,
  };
};

export default useScrollInfinite;
