import Button from "components/Button";
import Container from "components/Container";
import Header from "components/Header";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import TableUsers from "./TableUsers";

const Home = () => {
  const router = useRouter();

  const navigateToAddUserScreen = () => {
    router.push("/addUser");
  };

  return (
    <Container>
      <Header>one sight</Header>
      <Layout>
        <Header>Lista de usuários</Header>
        <Button onClick={navigateToAddUserScreen}>criar usuário</Button>
        <TableUsers />
      </Layout>
    </Container>
  );
};

export default Home;
