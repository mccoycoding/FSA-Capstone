import { useContext, useState, useEffect } from "react"
import { addToCart } from "../context/CartContext/CartActions"
import  CartContext  from "../context/CartContext/CartContext"
import ProductSquare from './ProductSquare'
import { fetchAllProducts } from "../helpers/fetchRequests"


export default function ShopGrid(){
    const [inventory, setInventory] = useState([])
    const {dispatch} = useContext(CartContext)
    
    useEffect(() => {
      async function getInventory() {
          try {
              const fetchedInventory = await fetchAllProducts(); //return parsed JSON obj
              setInventory(fetchedInventory);
          } catch (error) {
              console.error(`ERROR IN getInventory: ${error}`)
          }
      }
      getInventory()
    }, [inventory])

    const handleAddToCart = async (obj) => {
        dispatch({type: 'SET_LOADING'})
        const result = await addToCart(obj)

        if (result === true){
            dispatch({type: "ADD_TO_CART", payload: obj})
        } else {
            console.error('Error adding item to cart')
        }
        
    }

    return (
        <div className="container">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {inventory.length > 0 ? (
              inventory.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                  <ProductSquare product={product} handleAddToCart={handleAddToCart} />
                </div>
              ))
            ) : (
              <h2 className="display-2 text-center">Check back later!</h2>
            )}
          </div>
        </div>
      );
    
}
// PRODUCT LAYOUT
// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// },