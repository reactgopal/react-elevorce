import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Delay ensures DOM is updated before scrolling
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" // or "smooth"
            });
        }, 0);
    }, [pathname]);

    return null;
}
