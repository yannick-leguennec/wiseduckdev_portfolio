import classes from "./Portfolio.module.scss";

function Portfolio() {
  return (
    <section id="portfolio" className={classes.portfolioSection}>
      <h1 className={classes.title}>Portfolio</h1>
      <article className={classes.article}>
        <h2 className={classes.subtitle}>Projects</h2>
        <p>
          Here are some of the projects I have worked on. You can find more
          details on my GitHub page.
        </p>
      </article>
      <article className={classes.article}>
        <h2 className={classes.subtitle}>Open Source</h2>
        <p>
          I have contributed to several open source projects. You can find more
          details on my GitHub page.
        </p>
      </article>
    </section>
  );
}

export default Portfolio;
