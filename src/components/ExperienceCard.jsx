import "../stylesheets/ExperienceCard.css"

import { ProjectCard } from "./ProjectCard"

import tasklimImage from "../assets/TasklimImage.png"
import textCipherImage from "../assets/textcipherimage.jpg"

const projectsData = [
  {
    name: "tasklim",
    description: "AN EXCELLENT WAY TO CREATE AND MANAGE YOUR TASKS AND THOSE OF YOUR TEAM. EVERYTHING IN A SIMPLE, ELEGANT AND FREE WAY.",
    image: tasklimImage,
    links: {
      github: "https://github.com/eliasitom/tasklim",
      website: "https://tasklim.com"
    },
    technologies: ["react", "nodejs", "mongodb"]
  },
  {
    name: "text cipher",
    description: `A DIDACTIC TOOL TO LEARN A LITTLE ABOUT ENCRYPTION AND DECRYPTION ALGORITHMS SUCH AS "AES", 
    "PBKDF2", "RABBIT", AMONG OTHERS.`,
    image: textCipherImage,
    links: {
      github: "https://github.com/eliasitom/text-cipher",
      website: "https://text-cipher.netlify.app"
    },
    technologies: ["react"]
  }
]


export const ExperienceCard = () => {
  return (
    <article className='experience-card'>
      <h2 className="experience-card-title">&lt;/&gt; &nbsp;Experience</h2>
      <ProjectCard projectData={projectsData[0]}/>
      <ProjectCard projectData={projectsData[1]}/>
    </article>
  )
}