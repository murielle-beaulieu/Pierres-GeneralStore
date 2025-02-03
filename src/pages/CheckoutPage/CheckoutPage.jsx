import { useState, useEffect } from "react";
import { Link } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import NavBar from "../../components/NavBar/NavBar";
import classes from "./CheckoutPage.module.scss"

const CheckoutPage = () => {

  const [shopping, setShopping] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const basket = [];


  useEffect(() => {
    for (let [item, qty] of Object.entries(localStorage)) {
    const obj = JSON.parse(item);
      obj.qty = qty;
      if (obj.variant === 'Seeds') {
        let itemTotal = obj.seedpack_price * obj.qty;
        setCartTotal(prev => prev + itemTotal);
        console.log('variant is seedpack ' + itemTotal)
        }
      if (obj.variant === 'Seedlings') {
        let itemTotal = obj.seedling_price * obj.qty;
        setCartTotal(prev => prev + itemTotal);
        console.log('variant is seedling ' + itemTotal)
      }
      basket.push(obj);
    }
    setShopping(basket);
  }, []);

    return (
      <>
        <NavBar/>
        <h1>Checkout Page</h1>
        {shopping.length == 0 &&
        <section className={classes.empty_cart}>
          <img src="./src/assets/empty.png"/>
          <h2>Your cart is empty, head back to the <Link to={"/"}>main page</Link> and start browsing!</h2>
        </section>}
        {shopping.length > 0 && shopping.map((item) => <CartItem item={item} key={item.id} id={item.id}/>)}
        <section>
        <h2>Total: {cartTotal}</h2>
      </section>
      </>
    )
}
export default CheckoutPage;
