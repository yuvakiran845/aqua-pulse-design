
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration if possible
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTarget = () => {
      if (!hash) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
      } else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    // Execute immediately and also after a micro-task to be safe
    scrollToTarget();
    const timeoutId = setTimeout(scrollToTarget, 10);
    const frameId = requestAnimationFrame(scrollToTarget);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
