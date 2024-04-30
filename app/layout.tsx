import type { Metadata } from "next";
import clsx from "clsx";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "@/app/providers";
import Sonner from "@/components/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", children }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-[2.2rem] sm:pt-[2.5rem] lg:pt-[3rem] px-4 sm:px-6 lg:px-10 flex-grow sm:pb-[2.8rem] lg:pb-[3.6rem] pb-[4rem]">
              {children}
            </main>
          </div>
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
