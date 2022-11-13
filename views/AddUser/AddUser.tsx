import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, userActions } from "state";
import { Form } from "./styles";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const router = useRouter();
  const users = useSelector((state: RootState) => state.users.Users);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      userActions.addUser({ id: users.length + 1, name, email, phone, birth })
    );
    router.push("/");
  };

  return (
    <>
      <Header>one sight</Header>
      <Layout>
        <Header size="16px">Adicionar usuário</Header>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Telefone"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Data de nascimento"
            type="date"
            id="birth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />

          <Button type="submit">adicionar</Button>
        </Form>
      </Layout>
    </>
  );
};

export default AddUser;
