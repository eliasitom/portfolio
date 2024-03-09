import "../stylesheets/ExperienceCard.css"

import { ProjectCard } from "./ProjectCard"

import tasklimImage from "../assets/TasklimImage.png"
import textCipherImage from "../assets/textcipherimage.jpg"
import chattyImage from "../assets/ChattyImage.png"

import { useTranslation } from "react-i18next"




export const ExperienceCard = () => {
  const {t} = useTranslation()

  const projectsData = [
    {
      name: "tasklim",
      description: t("common:experience.tasklim"),
      image: tasklimImage,
      links: {
        github: "https://github.com/eliasitom/tasklim",
        website: "https://tasklim.com"
      },
      technologies: ["react", "nodejs", "mongodb"]
    },
    {
      name: "text cipher",
      description: t("common:experience.textCipher"),
      image: textCipherImage,
      links: {
        github: "https://github.com/eliasitom/text-cipher",
        website: "https://text-cipher.netlify.app"
      },
      technologies: ["react"]
    },
    {
      name: "chatty",
      description: t("common:experience.chatty"),
      image: chattyImage,
      links: {
        github: "https://github.com/eliasitom/mini-chat",
        website: "https://chatty-web-sockets.netlify.app"
      },
      technologies: ["react", "nodejs", "mongodb", "socket.io"]
    }
  ]

  return (
    <article className='experience-card'>
      <h2 className="experience-card-title">&lt;/&gt; &nbsp;{t("common:experience.title")}</h2>
      <ProjectCard projectData={projectsData[0]}/>
      <ProjectCard projectData={projectsData[1]}/>
      <ProjectCard projectData={projectsData[2]}/>
    </article>
  )
}