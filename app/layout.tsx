import type { Metadata } from "next";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "@/app/providers";

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontSans.className
        )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "dark", children }}
        >
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-[2.2rem] sm:pt-[2.5rem] lg:pt-[3rem] px-4 sm:px-6 lg:px-10 flex-grow sm:pb-[2.8rem] lg:pb-[3.6rem] pb-[4rem]">
              {children}
            </main>
          </div>
          <Toaster
            position="top-left"
            toastOptions={{
              className:
                "bg-zinc-100 dark:bg-[#18181a] text-zinc-900 dark:text-zinc-100 border-white/80 dark:border-zinc-900/90 border tracking-wide",
              style: {
                borderRadius: "0.75rem",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
