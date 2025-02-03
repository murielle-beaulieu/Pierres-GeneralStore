import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <img src="../src/assets/PierresBanner.png" alt="Pierre's Banner" className={classes.banner}/>
    </header>
  )
}

export default Header;
