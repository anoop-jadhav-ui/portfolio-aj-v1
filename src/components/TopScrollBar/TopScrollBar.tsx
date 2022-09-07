import React, { useEffect, useState } from "react";
import "./TopScrollBar.css";
interface Props {
  AppRef: React.RefObject<HTMLDivElement>;
}
export const TopScrollBar = ({ AppRef }: Props) => {
  const [scrollPosition, setscrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const scrollYHeight = window.scrollY;
    const viewPortHeight = document.documentElement.clientHeight;
    const appHeight = AppRef?.current?.clientHeight || 0;
    const percent = (scrollYHeight * 100) / (appHeight - viewPortHeight);
    setscrollPosition(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <progress id="top-scroll-bar" value={scrollPosition} max={100} />;
};
export default TopScrollBar;
