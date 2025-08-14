import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
  <head />
  <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
