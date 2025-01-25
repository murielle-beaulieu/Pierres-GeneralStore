import { useParams } from "react-router";

const ProductPage = ({data}) => {

  const {id} = useParams();
  return (
    <h1>Product Page - One Item</h1>
    // <h2>{data.name}</h2>
  )

}

export default ProductPage;
