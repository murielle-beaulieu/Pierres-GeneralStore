import classes from "./CartItem.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

const CartItem = ({item}) => {

  const cartStorage = {...localStorage};

  const deleting = (item) => {
    // window.localStorage.removeItem(item);
    console.log('deleting ' + item.name);

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes(`"name":"${item.name}"`)) {
        localStorage.removeItem(key);
        break;
      }
    }
  }

  cartStorage.forEach((item) => console.log(item.name));
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
