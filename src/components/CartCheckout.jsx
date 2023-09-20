import { useContext, useState, useEffect } from "react";
import CartProvider from "../context/CartContext/CartContext";
import { removeItemFromCart } from "../context/CartContext/CartActions";
import CartCard from "./CartCard";

export default function CartCheckout() {
  const { cart, dispatch } = useContext(CartProvider);
  const [countedCart, setCountedCart] = useState([]);

  const handleRemoveFromCart = async (id) => {
    dispatch({ type: "SET_LOADING" });
    const result = await removeItemFromCart(id);

    if (result === true) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    }
  };

  const getTotal = () => {
    let total = 0;
    countedCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const updateQuantity = (id, newQuantity) => {
    // Find the item in countedCart with the given ID
    const updatedCart = countedCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: newQuantity,
        };
      }
      return product;
    });

    setCountedCart(updatedCart);
  };

  useEffect(() => {
    // Function to update countedCart based on the current cart state
    const updateCountedCart = (cart) => {
      const idCounts = {};

      // Iterate through the cart array to count IDs
      for (const product of cart) {
        const id = product.id;
        idCounts[id] = (idCounts[id] || 0) + 1;
      }

      // Create a new array of objects with "id," "title," "price," and "quantity"
      const countedArray = [];
      for (const product of cart) {
        const id = product.id;
        const title = product.title;
        const price = product.price;
        const quantity = idCounts[id];

        // Check if the product with the same ID has already been added to countedArray
        const existingProduct = countedArray.find((p) => p.id === id);

        if (!existingProduct) {
          // If not added yet, add it to countedArray
          countedArray.push({
            id,
            title,
            price,
            quantity,
          });
        }
      }

      setCountedCart(countedArray);
    };

    if (cart.length > 0) {
      updateCountedCart(cart);
    } else {
      setCountedCart([]);
    }
  }, [cart]);

  return (
    <div className="container">
      <h4 className="display-4">Your Cart</h4>
      {countedCart?.length > 0 ? (
        <div>
          {countedCart.map((product, index) => (
            <CartCard
              product={product}
              key={`${product.id}-${index}`}
              handleRemoveFromCart={handleRemoveFromCart}
              updateQuantity={updateQuantity} // Pass the updateQuantity function as a prop
            />
          ))}
          <h2>Total: ${getTotal().toFixed(2)}</h2>
        </div>
      ) : (
        <h2 className="display-2 text-center">Add items to see them in your cart!</h2>
      )}
    </div>
  );
}
