import { useRouter } from "next/router";
import { ReactNode } from "react";
import { HeaderStyled } from "./styles";

interface HeaderProps {
  children: ReactNode;
  size?: string;
}

const Header = ({ children, size }: HeaderProps) => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <HeaderStyled size={size} onClick={navigateToHome}>
      {children}
    </HeaderStyled>
  );
};
export default Header;
