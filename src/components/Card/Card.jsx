import classes from "./Card.module.scss"

const Card = ({data}) => {
    return(
    <div className={classes.item}>
      <h2>{data.name}</h2>
      <img src={data.image}></img>
      <h3>Price (off season): ${data.offseason_price}</h3>
      <h3>Price (in season): ${data.seasonal_price}</h3>
      <p>Growth Days: {data.growth_days}</p>
    </div>
  )
}

export default Card;
