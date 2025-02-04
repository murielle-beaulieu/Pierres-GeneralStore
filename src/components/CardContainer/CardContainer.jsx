import Card from "../Card/Card";
import { useContext } from 'react';
import { InventoryContext } from "../../context/InventoryContextProvider";
import classes from "./CardContainer.module.scss";
import Skeleton from "../Skeleton/Skeleton";

const CardContainer = () => {

  const { data, fetchStatus} = useContext(InventoryContext);

    return(
        <main className={classes.card_container}>
        {fetchStatus === 'loading' && <Skeleton/>}
        {fetchStatus === 'success' && data.map((item) => <Card key={item.id} data={item} onClick={console.log('woohoo')}/>)}
        {fetchStatus === 'failure' &&
          <section className={classes.loading_error}>
            <img src="./src/assets/empty.png" alt="Something went wrong"/>
            <h2>Something went wrong, try again!</h2>
          </section>}
        </main>
      );
}

export default CardContainer;
