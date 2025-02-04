import classes from "./CartItem.module.scss";
import Button from "../Button/Button";
import { updateSeedpackStock, updateSeedlingStock } from "../../services/inventory";

const CartItem = ({item}) => {

  const deleting = (item) => {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes(`"name":"${item.name}"`)) {
        localStorage.removeItem(key);
        window.location.reload(); // not loving this
        break;
      }
    }

    if (item.variant === 'Seeds') {
      let restoreStock = parseInt(item.qty) + (parseInt(item.seedpack_stock) - parseInt(item.qty));
      updateSeedpackStock(item.id, restoreStock).then(console.log('success'));
    }

    if (item.variant === 'Seedlings') {
      let remainingStock = parseInt(item.seedling_stock) - parseInt(item.qty);
      let restoreStock = parseInt(item.qty) + remainingStock;
      console.log(itemPrice);
      updateSeedlingStock(item.id, restoreStock).then(console.log('success'));
    }
  }

  return(
    <>
    <article className={classes.cart_item}>
      <section className={classes.cart_img}>
      { item.variant === 'Seeds' ? <img className={classes.product_img} src={item.pack_image} alt={item.name}/> : <img className={classes.product_img} src={item.seedling_image} alt={item.name} />}
      </section>
      <section className={classes.item_details}>
      <h2>{item.name} {item.variant}</h2>
        <div>
          <h3> Quantity: {item.qty}</h3>
          {item.variant === 'seeds'? <h3>Price per item: {item.seedpack_price}.00</h3> : <h3>Price per item: {item.seedling_price}.00</h3>}
        </div>
        {item.variant === 'seeds'? <h3>Total: {item.seedpack_price * item.qty}.00</h3> : <h3>Total: {item.seedling_price * item.qty}.00</h3>}
        <div className={classes.delete_btn}>
          <Button onClick={() => deleting(item)} value='x'/>
        </div>
      </section>
    </article>
    </>
  )
}

export default CartItem;
