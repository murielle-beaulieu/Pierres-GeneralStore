import Button from "../../components/Button/Button";
import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContextProvider";

const CheckoutPage = () => {

const { data } = useContext(InventoryContext);

// const basket = {...localStorage};

// for (let [key, value] of Object.entries(localStorage)) {
//     console.log(`${key}: ${value}`);
// }

  return (
    <>
      <h1>Checkout Page</h1>
      <Button onClick={() => console.log('hello, no items in your basket!')} value={'display items in console'}/>
    </>
)
}

export default CheckoutPage;
