import React from "react";
import { TopNavigation } from "../../Navigation";
import { Footer } from "../index";

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
