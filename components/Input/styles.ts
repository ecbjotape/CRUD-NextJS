import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 5px;
  border-color: transparent transparent #eaeaea transparent;
  border-style: solid;
  background-color: transparent;
  outline: none;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  margin: 20px 0;
  color: #fff;

  &:focus {
    border-color: transparent transparent #fff transparent;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
`;
