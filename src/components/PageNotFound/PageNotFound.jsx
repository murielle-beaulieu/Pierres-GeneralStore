import { Link } from "react-router";
import classes from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <section className={classes.not_found}>
    <h1>Nothing to see here!</h1>
    <img src="./src/assets/empty.png" alt="Page Not Found"/>
    <Link to="/">home</Link>
    </section>
  )
}

export default PageNotFound;
