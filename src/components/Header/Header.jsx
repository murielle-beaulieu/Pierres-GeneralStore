import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContextProvider";
import LoadingData from "../LoadingData/LoadingData";

const Header = () => {
  const data = useContext(InventoryContext);

  return (
    <header>
      <h1>Pierre's General Store</h1>
      <h2>Stardew Valley's very own, coming to you soon!</h2>
      <LoadingData />
    </header>
  )
}

export default Header;
