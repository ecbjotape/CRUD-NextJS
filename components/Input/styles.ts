import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 5px;
  border-color: transparent transparent #2b4c7e transparent;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  outline: none;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    border-color: transparent transparent #2b4c7e transparent;
    border-width: 2px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: none;
  font-size: 14px;
`;
