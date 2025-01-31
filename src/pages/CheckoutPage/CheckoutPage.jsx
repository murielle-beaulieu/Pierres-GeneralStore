import { useState, useEffect } from "react";
import BasketItem from "../../components/BasketItem/BasketItem";

const CheckoutPage = () => {

  // const [shop, setShop] = useState(false);
  const [shopping, setShopping] = useState([]);

  const basket = [];

  useEffect(() => {

    for (let [item, qty] of Object.entries(localStorage)) {
    const obj = JSON.parse(item);
      // setBasket(JSON.parse(item));
    basket.push(obj);
    }
    setShopping(basket);
  }, []);

  console.log(shopping);

    return (
      <>
          <h1>Checkout Page</h1>
          {shopping.length > 0 && shopping.map((item) => <BasketItem item={item}/>)}
        </>
    )
}
export default CheckoutPage;


/* Adding an item */
// window.localStorage.setItem("key", "value")

/* Getting an item */
// window.localStorage.getItem('Data')

/* Removing an item */
// window.localStorage.removeItem("Data");

/* Removing all items */
// window.localStorage.clear();
