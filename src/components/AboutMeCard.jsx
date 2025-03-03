import { useTranslation } from "react-i18next";
import "../stylesheets/AboutMeCard.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const largeDescription1_en = <p>
  Hello! My name is Elías Espondaburu,
  and I am a passionate 21 year old <span>fullstack developer with three years of experience in the web development field </span>
  originally from Uruguay, currently living in Spain.
  I have worked with a variety of technologies and tools to create innovative digital solutions.
</p>
const largeDescription2_en = <p>
  My main focus is on developing web applications using <span>modern technologies like
    React.js for the frontend and Node.js with Express.js for the backend</span>. Additionally, <span>
    I have experience in NoSQL
    databases such as MongoDB and implementing real-time communication using Socket.IO</span>.
</p>

const largeDescription1_es = <p>
  ¡Hola! Mi nombre es Elías Espondaburu,
  y soy un apasionado <span>desarrollador fullstack de 21 años con tres años de experiencia en el campo del desarrollo web </span>
  Originario de Uruguay, actualmente viviendo en España.
  He trabajado con una variedad de tecnologías y herramientas para crear soluciones digitales innovadoras.
</p>
const largeDescription2_es = <p>
  Mi enfoque principal es el desarrollo de aplicaciones web utilizando <span>tecnologías modernas como
    React.js para el frontend y Node.js con Express.js para el backend</span>. Además, <span>
    Tengo experiencia en bases de datos NoSQL
     como MongoDB e implementación de comunicación en tiempo real usando Socket.IO</span>.
</p>


export const AboutMeCard = ({ profileData, selectedLenguage }) => {
  const { t } = useTranslation()

  const openGitHub = () => {
    window.open(profileData.links.github, "_blank")
  }
  const openLinkedin = () => {
    window.open(profileData.links.linkedin, "_blank")
  }

  return (
    <article className='about-me-card'>
      <div className='about-me-header'>
        <IoPersonSharp />
        <h1>{t("common:aboutMe.title")}</h1>
      </div>
      <p className="about-me-description">
        {selectedLenguage === "en" ? largeDescription1_en : largeDescription1_es}
      </p>
      <p className="about-me-description">
        {selectedLenguage === "en" ? largeDescription2_en : largeDescription2_es}
      </p>
      <p className="about-me-description">
        {t("common:aboutMe.description0")}
      </p>
      <p className="about-me-description">
        {t("common:aboutMe.description1")}
      </p>
      <div className='about-me-footer'>
        <button onClick={openLinkedin}>
          <FaLinkedin />
          <p>Linkedin</p>
        </button>
        <button onClick={openGitHub}>
          <FaGithub />
          <p>GitHub</p>
        </button>
      </div>
    </article>
  )
}