import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ApolloWrapper } from "./components/apollo-wrapper";
import GNB from "./components/gnb";
import { MswTrigger } from "./components/msw-trigger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "laboratory",
  description: "mocking back office laboratory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <GNB>{children}</GNB>
          <MswTrigger />
        </ApolloWrapper>
      </body>
    </html>
  );
}
