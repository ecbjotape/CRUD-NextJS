import styled from "styled-components";

interface HeaderProps {
  size?: string;
}
export const HeaderStyled = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: ${(props) => (props.size ? props.size : "1.5rem")};
  border-bottom: 2px solid #2b4c7e;
  text-transform: lowercase;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;
