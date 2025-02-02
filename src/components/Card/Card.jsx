import classes from "./Card.module.scss"
import { Link } from "react-router";

const Card = ({data}) => {


  return(
    <section className={classes.item}>
      <h2>{data.name}</h2>
      <p>{data.season} seeds</p>
      <img src={data.plant_image}></img>
      <Link to={`/products/${data.id}`}>See more</Link>
    </section>
  )
}

export default Card;
