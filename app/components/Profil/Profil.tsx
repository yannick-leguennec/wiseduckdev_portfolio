import classes from "./Profil.module.scss";

function Profil() {
  return (
    <section id="profil" className={`${classes.profileSection}`}>
      <h1 className={`${classes.title}`}>Profil</h1>
      <p className={`${classes.description}`}>
        I'm a web developer with a passion for creating beautiful and functional
        websites.
      </p>
      <button className={`${classes.button}`}>Contact me</button>
    </section>
  );
}

export default Profil;
