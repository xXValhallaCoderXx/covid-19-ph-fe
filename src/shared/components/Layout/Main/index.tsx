import React from "react";
import { TopNavigation, SideNavigation } from "shared/components/Navigation";
import { Footer } from "shared/components/Layout";

const LayoutComponent = ({ children }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function togglerDrawer() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <TopNavigation onClickBurgerMenu={togglerDrawer} />
      <SideNavigation isOpen={isOpen} toggleDrawer={togglerDrawer} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutComponent;
