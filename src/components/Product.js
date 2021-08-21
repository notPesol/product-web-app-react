// use params
import { useParams } from "react-router-dom";

// hooks
import { useProductFetch } from "../hooks/useProductFetch";


import Spinner from "./Spinner";
const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductFetch(id);
  console.log(product);

  if (loading) {
    return (
      <Spinner/>
    )
  }

  if (error) {
    return (
      <div>Something went wrong</div>
    )
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default Product;