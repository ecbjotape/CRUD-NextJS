import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
