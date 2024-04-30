"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { NextUIProvider } from "@nextui-org/system";

export interface ProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProviderProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
