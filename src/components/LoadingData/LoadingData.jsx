import Card from "../Card/Card";
import { useContext } from 'react';
import { InventoryContext } from "../../context/InventoryContextProvider";
import classes from "./LoadingData.module.scss";

const LoadingData = () => {

  const { data, fetchStatus} = useContext(InventoryContext);

      return(
        <main className={classes.card_container}>
          {fetchStatus === 'success' && data.map((item) => <Card key={item.id} data={item}/>)}
        </main>
      );
}

export default LoadingData;
