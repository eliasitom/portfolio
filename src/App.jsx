import { useEffect, useState } from 'react'
import './App.css'

import tasklimImage from "./assets/TasklimImage.png"
import textCipherImage from "./assets/Opera Captura de pantalla_2024-02-10_120355_text-cipher.netlify.app.png"

import { ProjectCard } from './components/ProjectCard'

import { FaGithub, FaLinkedin } from "react-icons/fa";


const projectsData = [
  {
    name: "tasklim",
    description: "AN EXCELLENT WAY TO CREATE AND MANAGE YOUR TASKS AND THOSE OF YOUR TEAM. EVERYTHING IN A SIMPLE, ELEGANT AND FREE WAY.",
    image: tasklimImage,
    links: {
      github: "https://github.com/eliasitom/tasklim",
      page: "https://tasklim.com"
    }
  },
  {
    name: "text cipher",
    description: `A DIDACTIC TOOL TO LEARN A LITTLE ABOUT ENCRYPTION AND DECRYPTION ALGORITHMS SUCH AS "AES", 
    "PBKDF2", "RABBIT", AMONG OTHERS.`,
    image: textCipherImage,
    links: {
      github: "https://github.com/eliasitom/text-cipher",
      page: "https://text-cipher.netlify.app"
    }
  }
]

const profileData = {
  description: `I am Elías Espondaburu, a 21 years old Uruguayan guy. Since I found my passion for finding
  solutions to logical problems in 2017, I haven't stopped programming. And today I invite
  you to contact me if you are interested in what I do.`,
  links: {
    github: "https://github.com/eliasitom",
    linkdin: "https://github.com/eliasitom"
  }
}

function App() {
  const [currentSection, setCurrentSection] = useState("about-me")

  const handleMyExperience = () => {
    setCurrentSection("my-experience")
  }
  const handleAboutMe = () => {
    setCurrentSection("about-me")
  }

  const openGithub = () => {
    window.open(profileLinks.github, '_blank');
  }
  const openLinkdin = () => {
    window.open(profileLinks.linkdin, '_blank');
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionPosition = document.getElementById('my-experience-section').offsetTop;

      // Aquí puedes ajustar la condición según la posición del scroll y la sección que quieras detectar
      if (scrollTop >= sectionPosition) {
        setCurrentSection("my-experience");
      } else {
        setCurrentSection("about-me");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <main className='app' id='about-me-section'>
      <header>
        <img className='noise-layer-1' />
        <h1 className='main-title'>Elías Espondaburu</h1>
        <div>
          <a
            className={currentSection === "about-me" ? "current-section" : ""}
            href='#about-me-section'
            onClick={handleAboutMe}>
            about me
          </a>
          <a
            className={currentSection === "my-experience" ? "current-section" : ""}
            href='#my-experience-section'
            onClick={handleMyExperience}>
            my experience
          </a>
        </div>
      </header>
      <section >
        <article className='main-phrase-article'>
          <p>Never lose passion for <span>innovation</span> and always seek <span>technical excellence</span>.</p>
        </article>
        <article className='about-me-container'>
          <div>
            <p>about me</p>
            <FaLinkedin onClick={openLinkdin} />
            <FaGithub onClick={openGithub} />
          </div>
          <div />
          <div>
            <p>{profileData.description}</p>
          </div>
        </article>
        <article className='projects-container' id='my-experience-section'>
          <h2 className='projects-container-title'>
            /////// my experience ///////////////////////////////////////////
          </h2>
          <div>
            {
              projectsData.map((current, index) => (
                <ProjectCard data={current} key={index} isEven={index % 2 === 0} />
              ))
            }
          </div>
        </article>
      </section>
      <img className='noise-layer-0' />
    </main>
  )
}

export default App
