import { useEffect, useState } from "react";
import CartCheckout from "../components/CartCheckout";
import { getCart } from "../helpers/cartFunctions";

export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const cartData = getCart();
        setCart(cartData);
    }, [])

    return <CartCheckout cart={cart}/>
}