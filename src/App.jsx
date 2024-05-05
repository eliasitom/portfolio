import './App.css'
import { useState, useEffect } from 'react';

import profilePicture from "./assets/profilePicture.png"

import { FaDiamond } from "react-icons/fa6";
import { HomeCard } from './components/HomeCard';
import { ExperienceCard } from './components/ExperienceCard';
import { AboutMeCard } from './components/AboutMeCard';
import { ContactCard } from './components/ContactCard';
import { useTranslation } from 'react-i18next';
import i18n from "i18next"
import "/node_modules/flag-icons/css/flag-icons.min.css";


const profileData = {
  description: `I am Elías Espondaburu, a 21 years old Uruguayan guy. Since I found my passion for finding
  solutions to logical problems in 2017, I haven't stopped programming. And today I invite
  you to contact me if you are interested in what I do.`,
  largeDescription3: ``,
  largeDescription4: ``,
  profilePicture: profilePicture,
  links: {
    github: "https://github.com/eliasitom",
    linkedin: "https://www.linkedin.com/in/elias-espondaburu-864205231/"
  }
}

function App() {
  const [currentSection, setCurrentSection] = useState("home")
  const { t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const experiencePosition = document.getElementById("experience").offsetTop;
      const aboutMePosition = document.getElementById("about-me").offsetTop
      const contactMePosition = document.getElementById("contact-me").offsetTop

      if (scrollTop >= experiencePosition && scrollTop < aboutMePosition) {
        setCurrentSection("experience")
      } else if (scrollTop >= aboutMePosition && scrollTop < contactMePosition) {
        setCurrentSection("about-me")
      } else if (scrollTop >= contactMePosition) {
        setCurrentSection("contact-me")
      } else {
        setCurrentSection("home")
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const changeLenguage = (e) => {
    setSelectedLanguage(prev => {
      i18n.changeLanguage(prev === "en" ? "es" : "en");
      return prev === "en" ? "es" : "en"
    })
  }

  return (
    <>
      <main className='app'>
        <aside>
          <div>
            <FaDiamond className={currentSection === "home" ? 'current-section' : ""} />
            <FaDiamond className={currentSection === "experience" ? 'current-section' : ""} />
            <FaDiamond className={currentSection === "about-me" ? 'current-section' : ""} />
            <FaDiamond className={currentSection === "contact-me" ? 'current-section' : ""} />
            <a
              href='#home'
              className={currentSection === "home" ? 'current-section' : ""}
            >
              {t("common:navBar.home")}
            </a>
            <a
              href='#experience'
              className={currentSection === "experience" ? 'current-section' : ""}
            >
              {t("common:navBar.myExperience")}
            </a>
            <a
              href="#about-me"
              className={currentSection === "about-me" ? 'current-section' : ""}
            >
              {t("common:navBar.aboutMe")}
            </a>
            <a
              href='#contact-me'
              className={currentSection === "contact-me" ? 'current-section' : ""}
            >
              {t("common:navBar.contact")}
            </a>
          </div>
        </aside>
        <section>
          <div id='home'>
            <HomeCard profileData={profileData} />
          </div>
          <div id='experience'>
            <ExperienceCard />
          </div>
          <div id='about-me' style={{ height: "fitContent", backgroundColor: "pruple" }}>
            <AboutMeCard profileData={profileData} selectedLenguage={selectedLanguage} />
          </div>
          <div id='contact-me'>
            <ContactCard />
          </div>
        </section>
        <div className='page-options'>
          <span class="fi fi-us" style={{ marginRight: "10px" }} />
          <>
            <input type='checkbox' id='lenguage-toggle' onClick={changeLenguage} />
            <label for="lenguage-toggle" />
          </>
          <span class="fi fi-es" style={{ marginLeft: "10px" }} />
        </div>
      </main>
    </>
  )
}

export default App
