import { Link } from "react-router";
import classes from "./ItemDetails.module.scss"
import Button from "../Button/Button";
import { createContext, useEffect, useState} from "react";

export const CartItemsContext = createContext({});

// const CartItemsContextProvider = ({children}) => {



//   return (
//     <InventoryContext.Provider value={{itemVariant}}>
//       {children}
//     </InventoryContext.Provider>
//   )
// }

const ItemDetails = ({item}) => {
  const [qty, setQty] = useState(0)
  const [itemVariant, setItemVariant] = useState('seeds');
  const [cartItem, setCartItem] = useState(item);

  const initialItem = item;

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
        <Button onClick={() => window.localStorage.setItem(`${JSON.stringify(cartItem)}`,`${qty}`)} value={'Add to Cart'}/>
        {/* <Button onClick={() => window.localStorage.clear()} value={'Clear'}/> */}

      </div>
      <Link to="/">Back</Link>
    </section>
  )
}

export default ItemDetails;
