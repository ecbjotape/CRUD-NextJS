import Header from "components/Header";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState, userActions } from "state";
import { User } from "types";
import { ListContainer } from "./styles";

const TitleHeader = [
  "nome",
  "email",
  "telefone",
  "data de nascimento",
  "ações",
];

const Home = () => {
  const users = useSelector((state: RootState) => state.users.Users);
  const dispatch = useDispatch();
  const router = useRouter();

  const navigateToAddUserScreen = () => {
    router.push("/addUser");
  };

  const deleteUser = (user: User) => {
    dispatch(userActions.deleteUser(user));
  };
  return (
    <>
      <Header>one sight</Header>
      <Layout>
        <Header>Lista de usuários</Header>
        <button onClick={navigateToAddUserScreen} style={{ marginTop: 10 }}>
          criar usuário
        </button>
        <ListContainer>
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
                <tr key={index}>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>{user.birth || "N/A"}</td>
                  <td>
                    <Image
                      src="/images/pencil.svg"
                      alt="pencil"
                      width={20}
                      height={20}
                      onClick={() => deleteUser(user)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Nenhum usuário cadastrado</td>
              </tr>
            )}
          </tbody>
        </ListContainer>
      </Layout>
    </>
  );
};

export default Home;
