import { createContext, useEffect, useState } from "react";
import { getAllInventory } from "../services/inventory";

export const InventoryContext = createContext({});

const InventoryContextProvider = ({children}) => {

  const [data, setData] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

      const fetchData = () => {
      getAllInventory()
      .then((docs) => {
      setData(docs);
      setFetchStatus('weeeehoo');
      })
      .catch((e) => {
        console.log('Failed' + e);
        setFetchStatus('ugh');
      });
    };

      useEffect(() => {
        fetchData();
      },[fetchStatus]);

      return (
    <InventoryContext.Provider value={{data,fetchStatus}}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContextProvider;
