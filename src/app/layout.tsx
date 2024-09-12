import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

//Componentes
import { Footer, Header, Template } from "@/components";
import { ThemeProvider } from "@/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio Carlos Diaz",
  description: "Portafolio Carlos Diaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <Template>{children}</Template>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
