import { Link } from "react-router";
import classes from "./Product.module.scss"
import Button from "../Button/Button";
import { useEffect, useState} from "react";
import { updateItemStock } from "../../services/inventory";

const ItemDetails = ({item, id}) => {

  const [qty, setQty] = useState(0)
  const [itemVariant, setItemVariant] = useState('Seeds');
  const [cartItem, setCartItem] = useState(item);

  const initialItem = item;
  const itemID = id;

  const decrement = () => {
    setQty((qty) => qty - 1);
  }

  const increment = () => {
      setQty((qty) => qty + 1);
  }

  useEffect(()=> {
    initialItem.variant = itemVariant;
    setCartItem(initialItem);
  }, [itemVariant])

  const addToCart = (id, qty) => {
    if (itemVariant === 'Seeds') {
      if (qty > item.seedpack_stock){
        console.log ('no way jose')
        return;
      } else {
        updateItemStock(itemID, qty).then(() => console.log('success'));
        return window.localStorage.setItem(`${JSON.stringify(cartItem)}`,`${qty}`)
      }
    }

    if (itemVariant === 'Seedlings') {
      if (qty > item.seedling_stock){
        console.log ('in your dream mister')
        return;
      } else {
        return window.localStorage.setItem(`${JSON.stringify(cartItem)}`,`${qty}`)
      }
    }
  }

  return (
    <section>
      <h1>{item.name} {itemVariant}</h1>
      { itemVariant === 'Seeds' ? <img className={classes.product_img} src={item.pack_image} alt={item.name}/> : <img className={classes.product_img} src={item.seedling_image} alt={item.name} />}

      <h2>{item.description}</h2>
      {itemVariant === 'Seeds' ?  <>
      <p>Seed pack price: {item.seedpack_price}</p>
      <p>Growth to Maturity in: {item.growth_days}</p>
      <p>Available stock: {item.seedpack_stock}</p>
      </> : <>
      <p>Seedling price: {item.seedling_price}</p>
      <p>Growth to Maturity in: {item.growth_days -3}</p>
      <p>Available stock: {item.seedling_stock}</p>
      </>}
      <div>
        <Button onClick={() => setItemVariant('Seeds')} value={'Seed Pack'}/>
        <Button onClick={() => setItemVariant('Seedlings')} value={'Seedling'}/>
      </div>
      <div className={classes.quantity}>
        <Button onClick={decrement} value={'-'}/>
        <h4>{qty}</h4>
        <Button onClick={increment} value={'+'}/>
        <Button onClick={() => addToCart(itemID, qty)} value={'Add to Cart'}/>
      </div>
      <Link to="/">Back</Link>
    </section>
  )
}

export default ItemDetails;
