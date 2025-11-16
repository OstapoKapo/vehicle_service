import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./styles/globals.css";
import { QueryProvider } from "@/components/wrapper/queryProvider.component";
import { ThemeProviders } from "@/components/wrapper/themeWrapper.component";
import { Header } from "@/components/layout/header";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vehicle Management System",
  description: "A simple vehicle management system built with Next.js and Tailwind CSS.",
  authors: [{ name: "Ostap Prodaniuk", url: "https://yourwebsite.com" }],
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable}`}
      >
      <ThemeProviders>
        <QueryProvider>
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </QueryProvider>
      </ThemeProviders>
      </body>
    </html>
  );
}
