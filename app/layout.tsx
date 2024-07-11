import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PharmaHub",
  description: "Pharmacy platform to manage drugs, patient prescription, reminders and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto p-4 pt-20 min-h-[32rem]">{children}</main>
          <Footer />
        </ ThemeProvider>
      </body>
    </html>
  );
}
