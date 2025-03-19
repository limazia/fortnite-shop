"use client";

import { ChevronUp } from "lucide-react";

import { useScrollToTop } from "@/shared/hooks/useScroll";
import { cn } from "@/shared/utils/cn";

import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <Button
      variant="outline"
      className={cn(
        "!fixed right-10 bottom-10 w-12 h-12 rounded-full shadow-md transition-transform duration-200",
        shown ? "scale-100" : "scale-0"
      )}
      aria-label="scroll to top"
      onClick={scrollToTop}
    >
      <ChevronUp className="w-9 h-9" />
    </Button>
  );
}
