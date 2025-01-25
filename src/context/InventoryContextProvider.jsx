import { createContext, useEffect, useState } from "react";

export const InventoryContext = createContext('UGH');


const inventoryContextProvider = ({children}) => {

    return (
    <InventoryContext.Provider>
      {children}
    </InventoryContext.Provider>
  )
}

export default inventoryContextProvider;
