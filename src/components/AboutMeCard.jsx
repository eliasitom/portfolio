import "../stylesheets/AboutMeCard.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const largeDescription1 = <p>
  Hello! My name is Elias Espondaburu,
  and I am a passionate 21 year old <span>fullstack developer with three years of experience in the web development field </span>
  originally from Uruguay.
  I have worked with a variety of technologies and tools to create innovative digital solutions.
  </p>
const largeDescription2 = <p>
  My main focus is on developing web applications using <span>modern technologies like
    React.js for the frontend and Node.js with Express.js for the backend</span>. Additionally, <span>
    I have experience in NoSQL
    databases such as MongoDB and implementing real-time communication using Socket.IO</span>.
</p>
const largeDescription3 = <p>
  I love tackling complex challenges and finding creative solutions to technical problems.
  I am a firm believer in continuous learning and am always looking for opportunities to improve my skills and keep
  up to date with the latest trends in technology.
</p>
const largeDescription4 = <p>
  Outside of the development world, I enjoy exploring new experiences, reading about philosophy,
  classic novels, and spending time outdoors enjoying nature. I am excited about future opportunities to collaborate on
  exciting projects and continue to grow as a professional in the field of web development.`,
  largeDescription5: `If you are interested in working together or just want to connect, feel free to contact me!
</p>

export const AboutMeCard = ({ profileData }) => {

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
        <h1>More about me</h1>
      </div>
      <p className="about-me-description">
        {largeDescription1}
      </p>
      <p className="about-me-description">
        {largeDescription2}
      </p>
      <p className="about-me-description">
        {largeDescription3}
      </p>
      <p className="about-me-description">
        {largeDescription4}
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