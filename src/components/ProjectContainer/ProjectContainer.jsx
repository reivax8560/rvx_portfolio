import "./ProjectContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectContainer({title, description, technos, screenshot, websiteLink, backEndLink, frontEndLink}) {


    return (

        <article className="project-ctnr">

            <div className="presentation">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <ul className="technos-ctnr">
                    {technos.map((el, index) =>
                    <li key={index}>
                        {el}
                    </li>
                    )}
                </ul>
            </div>

            <div className="site-web">
                <img src={screenshot} alt="web site screenshot" className="screenshot"/>

                <div className="links-ctnr">
                    {websiteLink &&
                    <p className="link"><a href={websiteLink}><FontAwesomeIcon icon={faLink} /> Voir le site</a></p>
                    }
                    <p className="link"><a href={frontEndLink}><FontAwesomeIcon icon={faLink} /> Voir le frontend</a></p>
                    {backEndLink &&
                    <p className="link"><a href={backEndLink}><FontAwesomeIcon icon={faLink} /> Voir le backend</a></p>
                    }
                
                </div>
            </div>

        </article>
    )
}