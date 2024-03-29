import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Reduxprovider from "@/store/redux-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "TruFunder",
  description: "Unleashing Your Trading Potentials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Reduxprovider>{children}</Reduxprovider>
      </body>
    </html>
  );
}
