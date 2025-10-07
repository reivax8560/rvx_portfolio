
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
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


function App() {

  return (

    <div className='body'>

      <header>
        <div>
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
        </div>
      </header>
{/* ///////////////////////////////////////////// PRESENTATION //////////////////////////////////////////// */}
      <section className='hero-section'> 

        <h1>XAVIER MARTIN</h1>

        <p className='job'>DÉVELOPPEUR FRONTEND</p>

        <p className='description'>
          Bonjour, je suis un tout nouveau développeur, fraichement sorti de formation en 2025. <br />
          Je travaille actuellement comme administrateur fonctionnel SIRH pour les sapeurs-pompiers. <br />
          Je souhaite maintenant rejoindre la filière développeur dès que possible sur la région bordelaise. <br />
          A très bientôt !
        </p>

        <p className='contact'>Me contacter : <a href="mailto:xavier.martin.rec@gmail.com">xavier.martin.rec@gmail.com</a> </p>

      </section>
{/* ///////////////////////////////////////////// COMPETENCES //////////////////////////////////////////// */}

      <section className='skills-section'>

        <h2>Technologies employées</h2>

        <div className="skills-ctnr">

          <div className="skill-card">
            <FontAwesomeIcon icon={faSquareJs} style={{color: "#FFD43B",}} className="skill-icon"/>
            <p className="skill-label">Javascript</p>
          </div>

          <div className="skill-card">
            <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE",}} className="skill-icon"/>
            <p className="skill-label">ReactJS</p>
          </div>

          <div className="skill-card">
            <img src={redux} alt="Redux logo" style={{background: "#FFF", borderRadius: "50%"}} className="skill-img"/>
            <p className="skill-label">Redux</p>
          </div>

          <div className="skill-card">
            <FontAwesomeIcon icon={faSass} style={{color: "#CF649A",}} className="skill-icon"/>
            <p className="skill-label">Sass</p>
          </div>
          
          <div className="skill-card">
            <FontAwesomeIcon icon={faGithub} className="skill-icon"/>
            <p className="skill-label">Github</p>
          </div>

          <div className="skill-card">
            <img src={figma} alt="Figma logo" style={{background: "#FFF", borderRadius: "50%"}} className="skill-img"/>
            <p className="skill-label">Figma</p>
          </div>

          <div className="skill-card">
            <FontAwesomeIcon icon={faNotion} className="skill-icon"/>
            <p className="skill-label">Notion</p>
          </div>

        </div>

      </section>
{/* ///////////////////////////////////////////// PROJETS //////////////////////////////////////////// */}

      <section className='projects-section'>

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



      <footer></footer>




      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}



    </div>
  )
}

export default App
