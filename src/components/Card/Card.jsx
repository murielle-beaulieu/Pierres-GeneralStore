import classes from "./Card.module.scss"
import { Link } from "react-router";

const Card = ({data}) => {


  return(
    <div className={classes.item}>
      <h2>{data.name}</h2>
      <p>{data.season} seeds</p>
      <img src={data.image}></img>
      <p>Pack price: {data.seedpack_price}</p>
      <p>Seedling price: {data.seedling_price}</p>
      <p>Growth Days: {data.growth_days}</p>
      <Link to={`/products/${data.id}`}>See more</Link>
    </div>
  )
}

export default Card;
