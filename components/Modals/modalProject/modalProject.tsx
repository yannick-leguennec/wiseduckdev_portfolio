import React from "react";
import Image from "next/image";
import classes from "./modalProject.module.scss"; // Your modal CSS module

const ModalProject = ({ project, onClose }) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <Image
          src={project.project_image}
          alt={project.project_image_alt}
          width={500} // Set appropriate width
          height={300} // Set appropriate height
        />
        <h2>{project.project_title}</h2>
        <h3>{project.project_subtitle}</h3>
        <p>{project.project_description}</p>
        <p>{project.project_role}</p>
        <a
          href={project.project_github_repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.project_github_repo}
        </a>
        <ul>
          {project.project_technologies_list.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={classes.buttonContainer}>
          <button onClick={onClose}>Return</button>
          <a
            href={project.project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
