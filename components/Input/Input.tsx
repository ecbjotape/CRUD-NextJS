import { InputHTMLAttributes } from "react";
import { Label, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input = ({ label, ...props }: InputProps) => {
  return (
    <Label>
      {label}
      <StyledInput {...props} />
    </Label>
  );
};

export default Input;
