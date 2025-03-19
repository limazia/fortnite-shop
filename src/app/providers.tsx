"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/lib/react-query";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </NuqsAdapter>

      <Toaster
        position="top-right"
        expand
        closeButton={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </QueryClientProvider>
  );
}
