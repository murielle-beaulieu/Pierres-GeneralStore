const CheckoutPage = () => {

  const { data } = useContext(InventoryContext);

  const basket = {...localStorage};
  // console.log(basket);

  // keys are the item's id
  const localStorageKeys = Object.keys(basket);

  // values are the quantities
  const lsValues = Object.values(basket);

  let basketItems = [];
  let prices = [];

  const getItems = () => {

    // gets us the items
    for (let [id, qty] of Object.entries(localStorage)) {
      console.log(`${id} : ${qty}`);
      basketItems.push(data.find((item) => item.id === `${id}`));
    }

    console.log(basketItems);
    // gets us the value of each item
    // basketItems.map((item) => prices.push(item.seasonal_price));

    // now to work out the price based on the qty of each item

    // console.log(basketItems.map((item) => item.seasonal_price));
    console.log(prices);


    return;
  }


  // const getPrices = () => {
  //   getItems();
  //   basketItems.map((item) => prices.push(item.seasonal_price));
  //   // console.log(prices);
  //   return prices;

  // }

  // const getTotalPrice = () => {
  //   console.log(getPrices());
  //   // for (let [qty] of Object.entries(localStorage)) {
  //     console.log(prices.map((price) => price * qty ));
  //   // }

  // }

  return (
    <>
        <h1>Checkout Page</h1>
        <Button onClick={() => getItems()} value={'display items in console'}/>
          <div>
               {basket && <h2>hi</h2>}
          </div>
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
