import React from "react";
import classes from "./modalProject.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";
import { IoCloseCircleSharp } from "react-icons/io5";

const ModalProject = ({ project, onClose }) => {
  const { activeLanguage } = useLanguage();

  const translations: TranslationsType = {
    role: {
      EN: "Role: ",
      FR: "Rôle: ",
    },
    github: {
      EN: "GitHub Repo: ",
      FR: "Dépôt GitHub: ",
    },
    technology: {
      EN: "Technologies used: ",
      FR: "Technologies utilisées :",
    },
    creation_year: {
      EN: "Year: ",
      FR: "Année: ",
    },
    return: {
      EN: "Return",
      FR: "Retour",
    },
    project: {
      EN: "See Project",
      FR: "Voir le projet",
    },
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <div className={classes.closeContainer} onClick={onClose}>
          <IoCloseCircleSharp className={classes.closeButton} />
        </div>
        <img
          src={project.project_image}
          alt={project.project_image_alt}
          className={classes.modalImage}
        />
        <h2 className={classes.modalTitle}>{project.project_title}</h2>
        <h3 className={classes.modalSubtitle}>{project.project_subtitle}</h3>
        <div className={classes.modalText}>
          <p className={classes.modalDescription}>
            <strong>Description: </strong>
            {project.project_description}
          </p>
          <p className={classes.modalDescription}>
            <strong>{translations.role[activeLanguage]}</strong>
            {project.project_role}
          </p>
          <div className={classes.githubContainer}>
            <a
              href={project.project_github_repo}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.githubLink}
            >
              <strong>{translations.github[activeLanguage]}</strong>
              {project.project_github_repo}
            </a>
          </div>
        </div>
        <div className={classes.itemsContainer}>
          <strong className={classes.technologyTitle}>
            {translations.technology[activeLanguage]}
          </strong>
          {project.project_technologies_list.map((tech) => (
            <div key={tech} className={classes.list}>
              {tech}
            </div>
          ))}
        </div>
        <p className={classes.modalDescriptionYear}>
          <strong>{translations.creation_year[activeLanguage]}</strong>
          {project.project_creation_year}
        </p>
        <div className={classes.buttonContainer}>
          <button onClick={onClose} className={classes.buttonReverted}>
            {translations.return[activeLanguage]}
          </button>
          <a
            href={project.project_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (window.gtag)
                window.gtag("event", "navigation_click", {
                  event_category: "Navigations",
                  event_navigation: `Open project ${project.project_title}`,
                });
            }}
          >
            <button className={classes.buttonRun}>
              {translations.project[activeLanguage]}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
