import { useEffect, useState } from "react";
import { getAllInventory } from "../../services/get-inventory"
import Card from "../Card/Card";

const LoadingData = () => {
   const [data, setData] = useState('');
   const [fetchStatus, setFetchStatus] = useState('');

    const fetchData = () => {
      getAllInventory()
        .then((data) => {
        setData(data[0]);
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

      return(
        <>
        {fetchStatus ==='weeeehoo' && <Card data={data}/>}
        </>
      );
}

export default LoadingData;
