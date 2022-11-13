import styled from "styled-components";

interface HeaderProps {
  size?: string;
}
export const Header = styled.header<HeaderProps>`
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
`;

export const Button = styled.button`
  background: #eaeaea;
  border-radius: 5px;
  border: none;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.table`
  width: 50%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #eaeaea;
  margin: 20px 0;

  th {
    background: #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 20px;
    text-align: left;
  }

  td {
    padding: 10px 20px;
    border-bottom: 1px solid #000;
    color: #000;
  }

  tr {
    &:hover {
      background: #eaeaea;
    }
  }
  tr:nth-child(even) {
    background: #f0f0f0;
  }

  tr:nth-child(odd) {
    background: #ffffff;
  }

  tbody tr {
    border-bottom: 1px solid #000000;
  }

  thead > tr {
    background-color: #c2c2c2;
  }
`;
