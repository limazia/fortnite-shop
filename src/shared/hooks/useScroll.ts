import { useEffect, useState, useCallback } from "react";

export function useScrollToTop(threshold: number = 300) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(scrolledFromTop > threshold);
    };

    window.addEventListener("scroll", scrollCallback);
    scrollCallback(); // Chama a função para definir o estado inicial

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [threshold]); // Adiciona threshold como dependência

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { shown, scrollToTop };
}
