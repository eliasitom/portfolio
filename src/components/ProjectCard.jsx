import "../stylesheets/ProjectCard.css"
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { RiGlobalLine, RiReactjsLine } from "react-icons/ri";
import { SiSocketdotio, SiMongodb } from "react-icons/si";

const TechnologyItem = ({ technology }) => {

  const getItem = () => {
    switch (technology) {
      case "react":
        return <div className="technology-item">
          <RiReactjsLine />
          <p>React JS</p>
        </div>
        break;
      case "nodejs":
        return <div className="technology-item">
          <FaNodeJs />
          <p>Node JS</p>
        </div>
        break;
      case "mongodb":
        return <div className="technology-item">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        break;
      case "socket.io":
        return <div className="technology-item">
          <SiSocketdotio />
          Socket.io
        </div>
        break;
    }
  }

  return getItem()
}

export const ProjectCard = ({ projectData }) => {

  const openGitHub = () => {
    window.open(projectData.links.github, "_blank")
  }
  const openWebSite = () => {
    window.open(projectData.links.website, "_blank")
  }

  return (
    <div className="project-card">
      <div className="project-card-aside">
        <img src={projectData.image} onClick={openWebSite} />
      </div>
      <div className="project-card-data">
        <h2>{projectData.name}</h2>
        <div className="project-card-technologies">
          {
            projectData.technologies.map((current, index) => (
              <TechnologyItem technology={current} key={index} />
            ))
          }
        </div>
        <p>{projectData.description}</p>
        <div className="project-card-options">
          <button onClick={openGitHub}><FaGithub /> Repository</button>
          <button onClick={openWebSite}><RiGlobalLine /> Web site</button>
        </div>
      </div>
    </div>
  )
}