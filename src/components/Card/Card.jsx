import classes from "./Card.module.scss"
import { Link } from "react-router";

const Card = ({data}) => {

  return(
    <article className={classes.item}>
        <div className={classes.title}>
          <h2>{data.name}</h2>
        </div>
      <section className={classes.item_details}>
        <h4><i>{data.season} {data.category}</i></h4>
        <p>from ${data.seedpack_price}.00</p>
      </section>
      <section className={classes.item_img}>
        <img src={data.plant_image} alt={data.name} className={classes.item_img}></img>
      </section>
      <Link to={`/products/${data.id}`}>See more</Link>
    </article>
  )
}

export default Card;
