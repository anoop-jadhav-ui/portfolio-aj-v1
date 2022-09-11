import { useEffect, useState } from "react";

type useDOMReturnType = {
  scrollPosition: number;
  isElementInViewport: (el: HTMLDivElement) => boolean;
};
const useDOMFeatures = (): useDOMReturnType => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const isElementInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition, isElementInViewport };
};

export default useDOMFeatures;
