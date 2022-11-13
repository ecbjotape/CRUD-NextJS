import Input from "components/Input";
import Layout from "components/Layout/Layout";
import { useState } from "react";
import { Button, Form, Header, ListContainer } from "./styles";

const TitleHeader = [
  "nome",
  "email",
  "telefone",
  "data de nascimento",
  "ações",
];

const Home = () => {
  const [todos, setTodos] = useState([
    {
      name: "jotape",
      email: "jp@mail.com",
      phone: "000000",
      birth: "29/01/2000",
    },
    {
      name: "teste",
      email: "jp@mail.com",
      phone: "11111",
      birth: "29/01/2000",
    },
  ]);

  return (
    <>
      <Header>one sight</Header>
      <Layout>
        <Header>
          Lista de usuários
          <button>+</button>
        </Header>
        <ListContainer>
          <thead>
            <tr>
              {TitleHeader.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.name}</td>
                <td>{todo.email}</td>
                <td>{todo.phone}</td>
                <td>{todo.birth}</td>
                <td>
                  <Button>editar</Button>
                  <Button>excluir</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </ListContainer>
      </Layout>
    </>
  );
};

export default Home;
