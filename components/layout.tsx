import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
