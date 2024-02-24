import { useTranslation } from "react-i18next";
import "../stylesheets/HomeCard.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";


export const HomeCard = ({ profileData }) => {
  const { t } = useTranslation()

  const openGitHub = () => {
    window.open(profileData.links.github, "_blank")
  }
  const openLinkedin = () => {
    window.open(profileData.links.linkedin, "_blank")
  }


  return (
    <article className='home-card'>
      <div className='home-card-header'>
        <img src={profileData.profilePicture} />
        <button onClick={openLinkedin}>{t("common:home.contactButton")} <PiShoppingBagOpen /></button>
      </div>
      <h1>Elias Espondaburu</h1>
      <p>{t("common:home.description")}</p>
      <div className='home-card-footer'>
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