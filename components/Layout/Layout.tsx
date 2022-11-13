import { ReactNode } from "react";
import { LayoutContainer } from "./styles";

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
