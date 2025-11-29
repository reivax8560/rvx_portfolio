import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSass, faSquareJs, faNotion, faGithub } from "@fortawesome/free-brands-svg-icons";
import redux from './assets/redux.svg'
import figma from './assets/Figma.png'
import './App.css'
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import fisheye_img from "./assets/Fish_Eye_mini.png"
import lesPetitsPlats_img from "./assets/Les_Petits_Plats_mini.png"
import kasa_img from "./assets/Kasa_mini.png"
import sportsee_img from "./assets/Sportsee_mini.png"
import argentBank_img from "./assets/Argent_Bank_mini.png"
import notesHandler_img from './assets/notesHandler.png'
import { useContext } from "react";
import {ThemeContext} from './context/ThemeContext'


function App() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (

    <div className={`app ${theme}`}>

      <header>
        <button className={`theme-button ${theme}`} onClick={toggleTheme}>
          {theme === "light" ? '🌙' : '☀️'}
        </button>
      </header>
{/* ///////////////////////////////////////////// PRESENTATION //////////////////////////////////////////// */}
      <section className='hero-section'> 

        <h1 className={`main-title ${theme}`}>XAVIER MARTIN</h1>

        <p className='job'>DÉVELOPPEUR REACT.JS</p>

        <p className='presentation'>
          Bonjour et bienvenue ! <br /><br />
          Je suis développeur concepteur logiciel spécialisé en React JS, diplômé en 2025. <br />
          Après 9 années passées comme administrateur fonctionnel SIRH au sein des sapeurs-pompiers, j’ai décidé de me lancer pleinement dans le développement web. <br /><br />
          Je suis aujourd’hui à la recherche d’une opportunité dans la région bordelaise pour rejoindre une équipe, apprendre, contribuer et continuer à évoluer en tant que développeur. <br /><br />
          Au plaisir d’échanger !
        </p>

        <p className='contact'>Me contacter : <a className={`mail ${theme}`} href="mailto:xavier.martin.rec@gmail.com">xavier.martin.rec@gmail.com</a> </p>

      </section>
{/* ///////////////////////////////////////////// COMPETENCES //////////////////////////////////////////// */}

      <section className={`skills-section ${theme}`}>

        <h2>Technologies employées</h2>

        <div className="skills-ctnr">

          <div className={`skill-card ${theme}`}>
            <FontAwesomeIcon icon={faSquareJs} style={{color: "#FFD43B",}} className="skill-icon"/>
            <p className="skill-label">Javascript</p>
          </div>

          <div className={`skill-card ${theme}`}>
            <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE",}} className="skill-icon"/>
            <p className="skill-label">ReactJS</p>
          </div>

          <div className={`skill-card ${theme}`}>
            <img src={redux} alt="Redux logo" style={{background: "#FFF", borderRadius: "50%"}} className="skill-img"/>
            <p className="skill-label">Redux</p>
          </div>

          <div className={`skill-card ${theme}`}>
            <FontAwesomeIcon icon={faSass} style={{color: "#CF649A",}} className="skill-icon"/>
            <p className="skill-label">Sass</p>
          </div>
          
          <div className={`skill-card ${theme}`}>
            <FontAwesomeIcon icon={faGithub} className="skill-icon"/>
            <p className="skill-label">Github</p>
          </div>

          <div className={`skill-card ${theme}`}>
            <img src={figma} alt="Figma logo" style={{background: "#FFF", borderRadius: "50%"}} className="skill-img"/>
            <p className="skill-label">Figma</p>
          </div>

          <div className={`skill-card ${theme}`}>
            <FontAwesomeIcon icon={faNotion} className="skill-icon"/>
            <p className="skill-label">Notion</p>
          </div>

        </div>

      </section>
{/* ///////////////////////////////////////////// PROJETS //////////////////////////////////////////// */}

      <section className={`projects-section ${theme}`}>

        <h2>Mes projets de formation</h2>

        <ProjectContainer 
          title="Fish Eye"
          description="Créez un site accessible pour une plateforme de photographes"
          technos={["HTML", "CSS", "JS"]}
          screenshot={fisheye_img}
          websiteLink="https://reivax8560.github.io/Projet_6_OC/"
          frontEndLink="https://github.com/reivax8560/Projet_6_OC"
        />

        <ProjectContainer 
          title="Les petits plats"
          description="Implémentez un algorithme de recherche de recettes de cuisines"
          technos={["HTML", "CSS", "JS", "BOOTSTRAP"]}
          screenshot={lesPetitsPlats_img}
          websiteLink="https://reivax8560.github.io/Projet_7_OC/"
          frontEndLink="https://github.com/reivax8560/Projet_7_OC"
        />

        <ProjectContainer 
          title="Kasa"
          description="Implémentez le front end d'une application de location de logements"
          technos={["HTML", "SASS", "REACT"]}
          screenshot={kasa_img}
          websiteLink="https://projet11ockasa.vercel.app/"
          frontEndLink="https://github.com/reivax8560/Projet_11_OC"
        />

        <ProjectContainer 
          title="Sportsee"
          description="Développez un tableau de bord d'analytics avec React pour un site de sport"
          technos={["HTML", "CSS", "REACT", "RECHARTS", "API"]}
          screenshot={sportsee_img}
          backEndLink="https://github.com/reivax8560/P12-back-end"
          frontEndLink="https://github.com/reivax8560/Projet_12_OC"
        />

        <ProjectContainer 
          title="Argent Bank"
          description="Utilisez une API pour une application bancaire"
          technos={["HTML", "CSS", "REACT", "REDUX", "API"]}
          screenshot={argentBank_img}
          backEndLink="https://github.com/reivax8560/Projet_13_OC_argent_bank"
          frontEndLink="https://github.com/reivax8560/Projet_13_OC_frontend"
        />

      </section>

      <section className={`projects-section ${theme}`}>

        <h2>Mes projets post formation</h2>

        <ProjectContainer 
          title="Gestionnaire de notes"
          description="Gestionnaire de notes avec intégration Markdown"
          technos={["HTML", "CSS", "REACT", "react-markdown", "context API",]}
          screenshot={notesHandler_img}
          websiteLink="https://notes-handler.vercel.app/"
          frontEndLink="https://github.com/reivax8560/notes_handler"
        />
      </section>


    </div>
  )
}

export default App
