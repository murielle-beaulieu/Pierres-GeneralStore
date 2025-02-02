import classes from "./CartItem.module.scss";
import Button from "../Button/Button";
import { updateSeedpackStock, updateSeedlingStock } from "../../services/inventory";

const CartItem = ({item}) => {

  const deleting = (item) => {
    // window.localStorage.removeItem(item);
    console.log('deleting ' + item.name);

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
      updateSeedlingStock(item.id, restoreStock).then(console.log('success'));
      console.log(item.seedling_stock);
    }
  }
  return(
    <section className={classes.cart_item}>
      <h2>{item.name} {item.variant}</h2>
      <div>
        <h3> qty: {item.qty}</h3>
        {item.variant === 'seeds'? <h3>price per item: {item.seedpack_price}</h3> : <h3>price per item: {item.seedling_price}</h3>}
      </div>
      {item.variant === 'seeds'? <h3>total: {item.seedpack_price * item.qty}</h3> : <h3>total: {item.seedling_price * item.qty}</h3>}
      <Button onClick={() => deleting(item)} value='x'/>
    </section>
  )
}

export default CartItem;
