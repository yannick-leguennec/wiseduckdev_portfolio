import Image from "next/image";
import { useEffect, useState } from "react";
import ModalProject from "../Modals/modalProject/modalProject";
import { useLanguage } from "../../context/LanguageContext";
import PortfolioProjectType from "../../types/Porfolio_Project_Type";
import classes from "./Portfolio.module.scss";

function Portfolio() {
  const { activeLanguage } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Load the projects data from the JSON file
  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch("./docs/Portfolio/portfolio.json");
      const data = await response.json();
      setProjects(data[activeLanguage]);
    };

    loadProjects();
  }, [activeLanguage]);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    // Prevent scrolling on the background
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Re-enable scrolling when the modal closes
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" className={classes.portfolioSection}>
      <h1 className={classes.title}>Portfolio</h1>

      <div className={classes.projectsContainer}>
        {/* <img src="/images/logos/simple_logo_white.png" alt="Portfolio" /> */}
        {projects.map((project: PortfolioProjectType) => (
          <div key={project.project_id} className={classes.imageContainer}>
            <img
              className={classes.image}
              src={project.project_image}
              alt={project.project_image_alt}
              onClick={() => {
                handleImageClick(project);
                if (window.gtag)
                  window.gtag("event", "navigation_click", {
                    event_category: "Navigation",
                    event_navigation: `Open modal of the ${project.project_title} project`,
                  });
              }}
              tabIndex={0}
            />
            <div className={classes.projectTitleContainer} tabIndex={1}>
              <h2 className={classes.projectTitle}>{project.project_title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Render the modal if a project is selected */}
      {selectedProject && (
        <ModalProject project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default Portfolio;
