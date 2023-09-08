import { useContext } from "react"
import { addToCart } from "../context/CartContext/CartActions"
import  CartContext  from "../context/CartContext/CartContext"


export default function ShopGrid( {inventory} ){
    const {dispatch} = useContext(CartContext)
    
    const handleAddToCart = async (obj) => {
        dispatch({type: 'SET_LOADING'})
        const result = await addToCart(obj)

        if (result === true){
            dispatch({type: "ADD_TO_CART", payload: obj})
        }
    }

    return (
        <div>
         {inventory.length > 0 ? (
            inventory.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img style={{maxWidth: '250px'}} src={product.image}/>
                    <h3>${product.price.toFixed(2)}</h3>
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary me-1">Add to Cart</button>
                    <button className="btn btn-secondary">More Details</button>
                </div>
            ))
         ) : (
            <h2>Check back later!</h2>
         )}  
        </div>
        
    )
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