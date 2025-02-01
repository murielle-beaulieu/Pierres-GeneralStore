import classes from "./BasketItem.module.scss";

const BasketItem = ({item}) => {

/* will need to access the variant chosen so we can calculate the price accordingly*/


  return(
    <section className={classes.basketItem}>
      <h2>{item.name}</h2>
      <div>
        <h3> qty: {item.qty}</h3>
        <h3>price: tbd</h3>
      </div>
      <h3>total: tbd</h3>
    </section>
  )
}

export default BasketItem;
