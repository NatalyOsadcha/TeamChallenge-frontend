import { createContext, useContext } from 'react';
import useLocalStorage from 'components/hooks/useLocalStorage';

export const StoreContext = createContext();

export function useStoreCart() {
  return useContext(StoreContext);
}

export function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // To get quantity of products
  function getItemQuantity(id) {
    const foundItem = cartItems.find(item => item.id === id);
    return foundItem ? foundItem.quantity : 0;
  }

  // To increase quantity of product
  function increaseCartQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            const updatedValue = Math.max(
              parseFloat((item.quantity + 0.1).toFixed(1)),
              0
            );
            return { ...item, quantity: updatedValue };
          } else {
            return item;
          }
        });
      }
    });
  }

   // To decrease quantity of product
  function decreaseCartQuantity(id) {
    setCartItems(currentItems => {
      const foundItem = currentItems.find(item => item.id === id);
      if (foundItem.quantity === 0.1) {
        return currentItems.filter(item => item.id !== id);
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            const updatedValue = Math.max(
              parseFloat((item.quantity - 0.1).toFixed(1)),
              0
            );
            return { ...item, quantity: updatedValue };
          } else {
            return item;
          }
        });
      }
    });
  }

  // To remove product from cart
  function removeFromCart(id) {
    const newCartItems = cartItems.filter(item => item.id !== id);
    return setCartItems(newCartItems);
  }

  // To input quantity of products manually
  function updateCartItemQuantity(id, newQuantity) {
     setCartItems(currentItems => {
   
        return currentItems.map(item => {
          if (item.id === id) {
            const updatedValue = Math.max(
              parseFloat((newQuantity).toFixed(1)),
              0
            );
            return { ...item, quantity: updatedValue };
          } else {
            return item;
          }
        });
      }
    );
  }

  const contextValue = {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    updateCartItemQuantity,
    cartQuantity,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}
