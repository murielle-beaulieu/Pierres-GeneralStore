import classes from "./BasketItem.module.scss";

const BasketItem = ({item}) => {

  return(
    <section className={classes.basketItem}>
      <h2>{item.name}</h2>
      <h2> price: {item.seasonal_price * item.qty}</h2>
    </section>
  )
}

export default BasketItem;
