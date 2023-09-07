

export default function ShopGrid( {inventory} ){



    return (
        <div>
         {inventory.length > 0 ? (
            inventory.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image}/>
                    <h3>${product.price.toFixed(2)}</h3>
                    <p>{product.description}</p>
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