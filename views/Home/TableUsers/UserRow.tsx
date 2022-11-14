import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "state";
import { User } from "types";
import { formatDate } from "utils";
import { DetailsUser, DownIcon, PencilIcon, TrashIcon } from "./styles";

interface UserRowProps {
  user: User;
  key: number;
}
const UserRow = ({ user, key }: UserRowProps) => {
  const [isOpenDetails, setOpenDetails] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const editUser = (user: User) => {
    router.push(`/addUser/${user.id}`);
  };

  const deleteUser = (user: User) => {
    dispatch(userActions.deleteUser(user));
  };
  return (
    <>
      <tr key={key}>
        <td>{user.name || "N/A"}</td>
        <td>
          <TrashIcon onClick={() => deleteUser(user)} />
          <PencilIcon onClick={() => editUser(user)} />
          <DownIcon
            isOpen={isOpenDetails}
            onClick={() => {
              setOpenDetails(!isOpenDetails);
            }}
          />
        </td>
      </tr>
      <div>
        {isOpenDetails && (
          <DetailsUser>
            <div>
              <p>nome: {user.name || "N/A"}</p>
              <p>email: {user.email || "N/A"}</p>
            </div>
            <div>
              <p>telefone: {user.phone || "N/A"}</p>
              <p>data de nascimento: {formatDate(user.birth) || "N/A"}</p>
            </div>
          </DetailsUser>
        )}
      </div>
    </>
  );
};

export default UserRow;
