import { Container, Main } from "./styles.js";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { Header } from "../Header/index.jsx";

export const MainLayout = ({ children }) => {
  const links = [
    /* { value:"Home", link: "#home", icon: <IoHome /> }, */
    { value: "Sobre mim", link: "#sobre", icon: <ImProfile /> },
    { value: "Projetos", link: "#projetos", icon: <FaLaptopCode /> },
    { value: "Competências "},
    { value: "Contato", link: "#contato", icon: <TiContacts /> },
  ];

  return (
    <Container>
      <Header links={links} />
      <Main>{children}</Main>
    </Container>
  );
};
