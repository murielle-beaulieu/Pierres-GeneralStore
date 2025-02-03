import { useParams } from "react-router";
import { getInventoryItem } from "../../services/inventory";
import { useState } from "react";
import Product from "../../components/Product/Product";
import NavBar from "../../components/NavBar/NavBar";

const ProductPage = () => {

  const { id } = useParams();

  const [item, setItem] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

  const fetchItem = (id) => {
    getInventoryItem(id)
      .then((doc) => {
      setItem(doc);
      setFetchStatus('weeeehoo');
      })
      .catch((e) => {
        console.log('Failed' + e);
        setFetchStatus('ugh');
      });
    };

    fetchItem(id);

  return (
    <>
      <NavBar/>
      {fetchStatus === 'weeeehoo' && <Product item={item} id={id}/>}
    </>
  )

}

export default ProductPage;
