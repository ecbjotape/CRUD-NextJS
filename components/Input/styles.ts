import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 5px;
  border-color: transparent transparent #2b4c7e transparent;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  outline: none;
  color: #000;
  font-size: 14px;
  padding: 0.2rem 0.5rem;
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
