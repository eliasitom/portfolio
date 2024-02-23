import "../stylesheets/HomeCard.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";


export const HomeCard = ({profileData}) => {

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
        <button onClick={openLinkedin}>Work with me <PiShoppingBagOpen /></button>
      </div>
      <h1>Elias Espondaburu</h1>
      <p>
        Fullstack developer. Since I found my passion for finding solutions to logical problems in 2017,
        I haven't stopped programming. And today I invite you to contact me if you are interested in what I do.
      </p>
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