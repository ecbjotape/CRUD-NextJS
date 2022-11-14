import { ReactNode } from "react";
import { ContainerStyled } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
