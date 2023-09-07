import { createContext, useReducer } from "react";
import cartReducer from './CartReducer';
const CartContext = createContext();

export const CartProvider = ({children}) => {
    //Pull cart from storage if it exists
    const cart = JSON.parse(localStorage.getItem('cart'));

    const initialState = {
        cart: cart ? cart : [],
        isError: false,
        isLoading: false,
        message: '',
    };

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return(
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}