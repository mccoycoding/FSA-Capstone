
// Get cart from storage or create an empty cart
export function getCart() {
    const cart = localStorage.getItem('cart')
    //If cart does not exist
    if (!cart) {
        //create a new empty cart
        const emptyCart = []
        localStorage.setItem('cart', JSON.stringify(emptyCart))
        return emptyCart;
    }
    //return cart
    return JSON.parse(cart)
}

// Get cart, then add an item to the cart and return true to indicate success, else false
export function addToCart(obj) {
    try {
        const cart = getCart() //Should return a cart array of objects or an empty array
        cart.push(obj)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('Successfully added item')
        return true
    } catch (error) {
        console.error('Error adding to cart:', error)
        return false 
    }
}

// Remove an item from the cart based on id
export function removeItemFromCart(id) {
    try {
        const cart = getCart() //Shoudl return a cart array of objects
        const updatedCart = cart.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log(`Item removed from cart: ID ${id}`)
        return true
    } catch (error) {
        
    }
}

// Clear entire cart
export function clearCart() {
    const emptyCart = []
    localStorage.setItem('cart', JSON.stringify(emptyCart))
}