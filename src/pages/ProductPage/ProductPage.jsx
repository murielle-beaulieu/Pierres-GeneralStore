import { useParams } from "react-router";
import { getInventoryItem } from "../../services/inventory";
import { useState } from "react";
import Product from "../../components/Product/Product";

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
      {fetchStatus === 'weeeehoo' && <Product item={item} id={id}/>}
    </>
  )

}

export default ProductPage;
