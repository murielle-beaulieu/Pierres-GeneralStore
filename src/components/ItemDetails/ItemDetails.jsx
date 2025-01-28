import { Link } from "react-router";
import classes from "./ItemDetails.module.scss"
import Button from "../Button/Button";
import { useState, useEffect } from "react";

const ItemDetails = ({item}) => {
  const [qty, setQty] = useState(0)
  const [cart, setCart] = useState(null);
  const [itemVariant, setItemVariant] = useState('seeds');

  const decrement = () => {
    setQty((qty) => qty - 1);
  }

  const increment = () => {
    setQty((qty) => qty + 1);
  }

  return (
    <section>
      { itemVariant === 'seeds' && <img className={classes.product_img} src={item.image} alt={item.name}/> }
      { itemVariant === 'seedlings' &&<img className={classes.product_img} src={item.seedling_image} alt={item.name} />}
      <h2>{item.description}</h2>
      <div>
        <Button onClick={() => setItemVariant('seeds')} value={'Seed Pack'}/>
        <Button onClick={() => setItemVariant('seedlings')} value={'Seedling'}/>
      </div>
      <div className={classes.quantity}>
        <Button onClick={decrement} value={'-'}/>
        <h4>{qty}</h4>
        <Button onClick={increment} value={'+'}/>
        <Button onClick={() => window.localStorage.setItem(`${item.id}`,`${qty}`)} value={'Add to Cart'}/>
      </div>
      <Link to="/">Back</Link>
    </section>
  )
}

export default ItemDetails;


/* Adding an item */
// window.localStorage.setItem("key", "value")

/* Getting an item */
// window.localStorage.getItem('Data')

/* Removing an item */
// window.localStorage.removeItem("Data");

/* Removing all items */
// window.localStorage.clear();
