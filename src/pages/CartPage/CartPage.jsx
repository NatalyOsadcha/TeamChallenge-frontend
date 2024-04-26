import { useNavigate } from 'react-router-dom';
import products from '../../products'; /// To change on request to BackEnd
import { useStoreCart } from 'context/StoreContext';
import FormatCurrency from 'helpers/FormatCurrency';
import Product from '../../components/Product/Product';

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems } = useStoreCart();
  return (
    <div>
      <h1>Your cart</h1>

      {cartItems && cartItems.length !== 0 ? (
        <div>
          <ul>
            {cartItems.map(cartItem => {
              if (cartItems && cartItems[cartItem.id] !== 0) {
                const item = products.find(i => i.id === cartItem.id);
                return <Product key={item.id} item={item} />;
              }
              return null;
            })}
          </ul>
          <h3>
            Total price:
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i.id === cartItem.id);
                return total + (item?.productPrice || 0) * cartItem.quantity;
              }, 0)
            )}
          </h3>
          <button type="button" onClick={() => navigate('/catalog')}>
            Continue shopping
          </button>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
}
