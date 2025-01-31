import { useState, useEffect } from "react";
import BasketItem from "../../components/BasketItem/BasketItem";

const CheckoutPage = () => {

  const [shopping, setShopping] = useState([]);

  const basket = [];

  useEffect(() => {

    for (let [item, qty] of Object.entries(localStorage)) {
    const obj = JSON.parse(item);
    obj.qty = qty;
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
