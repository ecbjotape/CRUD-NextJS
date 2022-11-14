import { InputHTMLAttributes } from "react";
import { Label, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input = ({ label, ...props }: InputProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "240px",
      }}
    >
      <Label>{label}</Label>
      <StyledInput {...props} />
    </div>
  );
};

export default Input;
