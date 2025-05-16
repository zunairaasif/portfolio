import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "@styles/globals.css";
import { LoadingProvider } from "@context/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zunaira Asif",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <LoadingProvider>
      <Suspense>
        <html lang="en">
          <head>
            <link rel="icon" type="image/x-icon" href="/images/zunaira.png" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+AU+SA:wght@100..400&family=Playwrite+RO:wght@100..400&display=swap"
              rel="stylesheet"
            />
          </head>

          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </html>
      </Suspense>
    </LoadingProvider>
  );
}
