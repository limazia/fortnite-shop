import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 3000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ArrowUp size={32} />
    </button>
  );
}
