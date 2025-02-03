import classes from "./NavBar.module.scss";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to={"/"}><img src="./src/assets/logo.png"/></NavLink>
      <NavLink to={"/checkout"}><img src="./src/assets/cart.png" className={classes.cart}/></NavLink>
    </nav>
  )
}

export default NavBar;
