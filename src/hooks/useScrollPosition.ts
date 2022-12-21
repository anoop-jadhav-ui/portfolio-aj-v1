import { useEffect, useState } from "react";

type useDOMReturnType = {
    scrollPosition: number;
};
const useScrollPosition = (): useDOMReturnType => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { scrollPosition };
};

export default useScrollPosition;
