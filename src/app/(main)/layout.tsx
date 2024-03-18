import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Hero from "@/components/main/home/hero";
import TrufunderTradingPlatform from "@/components/main/home/trufunder-trading-platform";
import TrustfundChallengeTypes from "@/components/main/home/supported-trading-platforms";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
