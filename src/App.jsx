import './App.css'
import { useState, useEffect } from 'react';

import profilePicture from "./assets/119717954.png"

import { FaDiamond } from "react-icons/fa6";
import { HomeCard } from './components/HomeCard';
import { ExperienceCard } from './components/ExperienceCard';
import { AboutMeCard } from './components/AboutMeCard';
import { ContactCard } from './components/ContactCard';



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
  return (
    <main className='app'>
      <aside>
        <div>
          <FaDiamond className={currentSection === "home" ? 'current-section' : ""} />
          <FaDiamond className={currentSection === "experience" ? 'current-section' : ""} />
          <FaDiamond className={currentSection === "about-me" ? 'current-section' : ""} />
          <FaDiamond className={currentSection === "contact-me" ? 'current-section' : ""} />
          <a href='#home' className={currentSection === "home" ? 'current-section' : ""}>Home</a>
          <a href='#experience' className={currentSection === "experience" ? 'current-section' : ""}>My experience</a>
          <a href="#about-me" className={currentSection === "about-me" ? 'current-section' : ""}>About me</a>
          <a href='#contact-me' className={currentSection === "contact-me" ? 'current-section' : ""}>Contact me</a>
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
          <AboutMeCard profileData={profileData} />
        </div>
        <div id='contact-me'>
          <ContactCard />
        </div>
      </section>
      <div className='page-options'>
        <p>English</p>
        <>
          <input type='checkbox' id='lenguage-toggle' />
          <label for="lenguage-toggle" />
        </>
        <p>Spanish</p>
      </div>
    </main>
  )
}

export default App
