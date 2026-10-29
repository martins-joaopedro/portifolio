import { Title } from "../../components/Title/index.jsx";
import styles from "./styles.module.css";
import profile from "../../assets/profile.png";

let text = `Em constante busca por aprimoramento, sou um programador focado na resolução de problemas de forma proativa, com uma forte capacidade de aprendizado contínuo.
Procuro por uma posição em que eu possa utilizar minhas habilidades técnicas e colaborar para o meu desenvolvimento e para o sucesso da equipe.`;

import { PiInstagramLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { PiGithubLogoLight } from "react-icons/pi";

import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Tech } from "../Tech/index.jsx";
import { Academic } from "../Academic/index.jsx";
import { Projects } from "../Projects/index.jsx";
import { Personal } from "../Personal/index.jsx";

const navigateTo = (id) => document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth"})

export const About = () => {
  return (
    <div className={styles.container} id="sobre">
      <section>
        <div className={styles.intro}>
          <div className={styles.title}>
            <div>
              <h1>João Pedro Martins Cruz</h1>
              <h3>Desenvolvedor de Software</h3>
            </div>
          </div>
          <img className={styles.avatar} src={profile} />
        </div>

        <div className={styles.navigations}>
          <button onClick={() => navigateTo("personal")}>
            <IoPersonSharp />
          </button>
          <button onClick={() => navigateTo("academic")}>
            <HiOutlineAcademicCap />
          </button>
          <button onClick={() => navigateTo("skills")}>
            <FaLaptopCode />
          </button>
        </div>

        <div className={styles.aboutSection}>
          <span>Sobre Mim:</span>
          <p>{text}</p>
          <div className={styles.buttonsArea}>
            <button>
              <PiInstagramLogoLight />
              Instagram
            </button>
            <button>
              <PiLinkedinLogoLight />
              Linkedin
            </button>
            <button>
              <PiGithubLogoLight />
              GitHub
            </button>
          </div>
        </div>
      </section>

      <Personal />
      <Academic />
      <Tech/>
    </div>
  );
};
