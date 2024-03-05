import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProviders";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Toster from "@/components/toster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Task App",
  description: "Define your future in the form of task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toster></Toster>
          <Navbar></Navbar>
          <div className={cn("max-w-[1300px] mx-auto")}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
