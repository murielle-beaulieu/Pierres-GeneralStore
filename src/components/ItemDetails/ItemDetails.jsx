import { Link } from "react-router";

const ItemDetails = ({item}) => {

  return (
    <section>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      <h3>love ur work</h3>
      <Link to="/">Back</Link>
    </section>
  )
}

export default ItemDetails;
