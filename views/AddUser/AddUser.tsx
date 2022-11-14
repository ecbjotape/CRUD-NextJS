import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
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

  const param = router.query.id
    ? users.find((user) => user.id === Number(router.query.id as string))
    : null;

  console.log(param);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      param
        ? userActions.updateUser({ name, email, phone, birth, id: param.id })
        : userActions.addUser({
            id: users.length + 1,
            name,
            email,
            phone,
            birth,
          })
    );
    router.push("/");
  };

  useEffect(() => {
    if (param) {
      setName(param.name);
      setEmail(param.email);
      setPhone(param.phone);
      setBirth(param.birth);
    }
  }, []);

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
