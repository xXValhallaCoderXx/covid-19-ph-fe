import React from "react";
import { TopNavigation } from "shared/components/Navigation";
import { Footer } from "shared/components/Layout";

const LayoutComponent = ({ children }: any) => {
  return (
    <div>
      <TopNavigation />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutComponent;
