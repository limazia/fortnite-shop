import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Fortnite Shop",
    template: `%s | Fortnite Shop`,
  },
  description: "Fortnite Shop",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClientOnly>
          <Providers>{children}</Providers>
        </ClientOnly>
      </body>
    </html>
  );
}
