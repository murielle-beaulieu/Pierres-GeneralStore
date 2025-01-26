import Card from "../Card/Card";
import { useContext } from 'react';
import { InventoryContext } from "../../context/InventoryContextProvider";

const LoadingData = () => {

  const { data, fetchStatus } = useContext(InventoryContext);
      return(
        <main>
        {fetchStatus ==='weeeehoo' && data.map((item) => <Card key={item.id} data={item}/>)}
        </main>
      );
}

export default LoadingData;
