import "../stylesheets/ProjectCard.css"

import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ data, isEven }) => {

    const openGithub = () => {
        window.open(data.links.github, '_blank');
    }

    const openPage = () => {
        window.open(data.links.page, '_blank');
    }
    return (
        <div className={`project-card ${!isEven ? "is-even" : ""}`}>
            <h2 className="project-card-name">{data.name}</h2>
            <p className="project-card-description">{data.description}</p>
            <div className="project-card-image-container">
            <img src={data.image} className="project-card-image"/>
            <div>
                <RiGlobalLine onClick={openPage} />
                <FaGithub onClick={openGithub} />
            </div>
            </div>
            <p className="project-card-footer"></p>
        </div>
    )
}