import { useParams } from "react-router";
import { getInventoryItem } from "../../services/inventory";
import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import NavBar from "../../components/NavBar/NavBar";

const ProductPage = () => {

  const { id } = useParams();

  const [item, setItem] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

  const LoadingStatus = {
    Loading: "loading",
    Success: "success",
    Failed: "failed"
  };


  const fetchItem = (id) => {
    setFetchStatus(LoadingStatus.Loading);
    getInventoryItem(id)
      .then((doc) => {
      setItem(doc);
      setFetchStatus(LoadingStatus.Success);
      })
      .catch(() => {
        setFetchStatus(LoadingStatus.Failed);
      });
    };

    useEffect(() => {
      fetchItem(id);
    },[]);


  return (
    <>
      <NavBar/>
      {fetchStatus === 'success' && <Product item={item} id={id}/>}
    </>
  )

}

export default ProductPage;
