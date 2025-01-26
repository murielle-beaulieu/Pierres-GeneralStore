import classes from "./Card.module.scss"
import { Link } from "react-router";

const Card = ({data}) => {


  return(
    <div className={classes.item}>
      <h2>{data.name}</h2>
      <p>{data.season} seeds</p>
      <img src={data.image}></img>
      <h3>Price (in season): {data.seasonal_price}</h3>
      <h3>Price (off season): {data.offseason_price}</h3>
      <p>Growth Days: {data.growth_days}</p>
      <Link to={`/products/${data.id}`}>See more</Link>
    </div>
  )
}

export default Card;
