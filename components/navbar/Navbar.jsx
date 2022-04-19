import * as React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { NavbarMobile } from "./Navbar-mobile";
import { NavbarDesktop } from "./Navbar-desktop";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;

  if (isMobile) {
    return <NavbarMobile />;
  } else {
    return <NavbarDesktop />;
  }
};
