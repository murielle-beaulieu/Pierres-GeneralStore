import { createContext, useEffect, useState } from "react";
import { getAllInventory } from "../services/inventory";

export const InventoryContext = createContext({});


const InventoryContextProvider = ({children}) => {

  const LoadingStatus = {
    Loading: "loading",
    Success: "success",
    Failed: "failed"
  };

  const [data, setData] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

    const fetchData = () => {
      getAllInventory()
      .then((docs) => {
      setData(docs);
      setFetchStatus(LoadingStatus.Success);
      })
      .catch((e) => {
        console.log('Failed' + e);
        setFetchStatus(LoadingStatus.Failed);
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
