import { useParams } from "react-router";
import { getInventoryItem } from "../../services/inventory";
import { useState } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

const ProductPage = () => {
  const {id} = useParams();

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
      <h1>Product Page - One Item</h1>
      {fetchStatus === 'weeeehoo' && <ItemDetails item={item}/>}
    </>
  )

}

export default ProductPage;
