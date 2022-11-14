import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, userActions } from "state";
import { User } from "types";
import { TitleHeader } from "./constants";
import {
  Button,
  Container,
  DownIcon,
  Header,
  PencilIcon,
  TableUser,
  TrashIcon,
} from "./styles";
import UserRow from "./UserRow";

const TableUsers = () => {
  const users = useSelector((state: RootState) => state.users.Users);
  const dispatch = useDispatch();

  const cleanList = () => {
    dispatch(userActions.cleanList());
  };

  return (
    <Container>
      <Header>
        <p>usuários</p>
        <Button onClick={cleanList}>limpar lista</Button>
      </Header>
      <TableUser>
        <thead>
          <tr>
            {TitleHeader.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user: User, index: number) => (
              <>
                <UserRow user={user} key={index} />
              </>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Nenhum usuário cadastrado</td>
            </tr>
          )}
        </tbody>
      </TableUser>
    </Container>
  );
};
export default TableUsers;
