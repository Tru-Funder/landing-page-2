import Footer from "@/components/footer";
import Header from "@/components/header";
import JoinCommunity from "@/components/join-community";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <JoinCommunity />
      <Footer />
    </div>
  );
}
