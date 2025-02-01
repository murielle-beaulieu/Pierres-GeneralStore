import classes from "./Button.module.scss";

const Button = ({onClick, value}) => {

  return (
    <>
    <button className={classes.btn} onClick={onClick}>{value}</button>
    </>
  )
}

export default Button;
