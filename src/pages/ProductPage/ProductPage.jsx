import { useParams } from "react-router-dom";
// import { getProductById } from "../API";

export default function ProductPage() {
  const { id } = useParams;
  // const product = getProductById(id);
  return (
    <div>
      <h1>ProductPage</h1>
      <img src="https://via.placeholder.com/960x240" alt="placeholder" />
      {/* <h2>Product - {product.name}</h2> */}
      {/* <p>{ product.description}</p> */}
    </div>
  )
}
