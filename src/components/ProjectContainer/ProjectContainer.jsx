import "./ProjectContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext'

export default function ProjectContainer({title, responsive, description, technos, screenshot, websiteLink, backEndLink, frontEndLink}) {

    const {theme} = useContext(ThemeContext)

    return (

        <article className={`project-ctnr ${theme}`}>

            <div className="description-ctnr">
                <h3 className="project-title">{title}</h3>
                <p className="project-responsive">{`portabilité : ${responsive}`}</p>
                <p className="project-description">{description}</p>
                <ul className="tools-ctnr">
                    {technos.map((el, index) =>
                    <li className={`tools-item ${theme}`} key={index}>
                        {el}
                    </li>
                    )}
                </ul>
            </div>


            <div className="details-ctnr">

                <img src={screenshot} alt="web site screenshot" className="screenshot"/>

                <div className="links-ctnr">

                    {websiteLink &&
                        <a className="link"href={websiteLink}>
                            <FontAwesomeIcon className="link-icon" icon={faLink} />
                            <p>Voir le site</p>
                        </a>
                    }

                        <a className="link"href={frontEndLink}>
                            <FontAwesomeIcon className="link-icon" icon={faLink} />
                            <p>Voir le frontend</p>
                        </a>

                    {backEndLink &&
                        <a className="link"href={backEndLink}>
                            <FontAwesomeIcon className="link-icon" icon={faLink} />
                            <p>Voir le backend</p>
                        </a>
                    }
                
                </div>
                
            </div>

        </article>
    )
}