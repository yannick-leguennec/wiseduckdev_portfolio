import classes from "./Loader.module.scss";

const Loader = () => (
  <div className={classes.loaderOverlay}>
    <h1>Loading ...</h1>
    <div className={classes.loaderCircle}></div>
  </div>
);

export default Loader;
