import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FormatCurrency from 'helpers/FormatCurrency';

export default function Product({ item }) {
  const { id, productName, productPrice } = item;
  const {
    increaseCartQuantity,
    getItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
    updateCartItemQuantity,
  } = useContext(StoreContext);
  // const cartItemAmount = cartItems[id];
  const quantity = getItemQuantity(id);

  const handleInputChange = e => {
    const newValue = e.target.value;
    if (newValue.length <= 3) {
      updateCartItemQuantity(id, Number(newValue) || 1);
    }
  };

  return (
    <li key={id}>
      <img src="https://via.placeholder.com/200x100" alt="" />
      <p>{productName}</p>
      <p> {FormatCurrency(productPrice)}</p>
      {quantity === 0 ? (
        <button type="button" onClick={() => increaseCartQuantity(id)}>
          Add to cart
        </button>
      ) : (
        <div>
          <button type="button" onClick={() => decreaseCartQuantity(id)}>
            -
          </button>
          <span>
            <input
              type="number"
              min="0.1"
              max="99"
              value={quantity}
              onChange={handleInputChange}
            />
            <span>kg</span>
          </span>
          <button type="button" onClick={() => increaseCartQuantity(id)}>
            +
          </button>
          <button type="button" onClick={() => removeFromCart(id)}>
            &times;
          </button>
          <p>{FormatCurrency(productPrice * quantity)}</p>
        </div>
      )}
    </li>
  );
}
