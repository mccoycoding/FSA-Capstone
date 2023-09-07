import { addToCart } from "../helpers/cartFunctions";


export default function ShopGrid( {inventory} ){

    

    return (
        <div>
         {inventory.length > 0 ? (
            inventory.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img style={{maxWidth: '250px'}} src={product.image}/>
                    <h3>${product.price.toFixed(2)}</h3>
                    <button onClick={() => addToCart(product)} className="btn btn-primary me-1">Add to Cart</button>
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