import "../stylesheets/ExperienceCard.css"

import { ProjectCard } from "./ProjectCard"

import stellaVogueImage from "../assets/StellaVogueImage.png"
import textCipherImage from "../assets/TextCipherImage.png"
import eliasBlogImage from "../assets/EliasBlogImage.png"

import { useTranslation } from "react-i18next"




export const ExperienceCard = () => {
  const {t} = useTranslation()

  const projectsData = [
    {
      name: "stella vogue",
      description: t("common:experience.stellavogue"),
      image: stellaVogueImage,
      links: {
        github: "https://github.com/eliasitom/StellaVogue",
        website: "https://stellavogue.netlify.app"
      },
      technologies: ["react"]
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
      name: "Elías Blog",
      description: t("common:experience.eliasBlog"),
      image: eliasBlogImage,
      links: {
        github: "https://github.com/eliasitom/EliasBlog",
        website: "https://eliasblog.netlify.app"
      },
      technologies: ["react"]
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