import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

export const TableUser = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  text-align: left;
  th {
    background: #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 20px;
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

interface DownIconProps {
  isOpen: boolean;
}

export const DownIcon = styled(MdKeyboardArrowDown)<DownIconProps>`
  transition: 0.3s ease all;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const PencilIcon = styled(HiPencilAlt)`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export const TrashIcon = styled(HiTrash)`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #1f1f20;
  font-weight: 700;
  text-transform: lowercase;
  font-size: 14px;
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  margin-top: 20px;
  width: 100%;
`;

export const Button = styled.button`
  color: #fff;
  border: 0;
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  text-transform: lowercase;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 600px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const DetailsUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 16px;

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    text-transform: lowercase;
  }
`;
