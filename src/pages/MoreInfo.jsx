import React, { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext/CartContext";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../helpers/fetchRequests";
import { addToCart } from "../context/CartContext/CartActions"

export default function MoreInfo() {
    const [item, setItem] = useState(null)
    const [buttonText, setButtonText] = useState("Add to Cart")
    const {itemId} = useParams();
    const {dispatch} = useContext(CartContext)

    useEffect(() => {
        async function fetchItemDetails() {
            try {
                const fetchedItem = await fetchSingleProduct(itemId)
                setItem(fetchedItem)
            } catch (error) {
                console.error(`Error in fetchItemDetails(): ${error}`)
            }
        }
        fetchItemDetails()
    }, [itemId])

    const handleAddToCart = async (obj) => {
        dispatch({type: 'SET_LOADING'})
        const result = await addToCart(obj)

        if (result === true){
            dispatch({type: "ADD_TO_CART", payload: obj})
        } else {
            console.error('Error adding item to cart')
        }
        
    }

    const addToCartClicked = async () => {
        handleAddToCart(item)
        setButtonText("Item Added to Cart!")

        setTimeout(() => {
            setButtonText("Add to Cart")
        }, 2000);
    }

    return(
        <div>
      {item ? (
        <div className="container-fluid">
            <div className="row">
                <div className="item-image col-md-4">
                    <img
                        style={{maxWidth: '350px'}}
                        src={item.image}
                        className="img-fluid"
                        alt={item.title}
                    />
                </div>
                <div className="item-description col-md-8">
                    <h1>{item.title}</h1>
                    <h2>${item.price.toFixed(2)}</h2>
                    <p>{item.description}</p>
                    <button className="btn btn-primary btn-lg" onClick={() => addToCartClicked()}>{buttonText}</button>
                </div>
            </div>
            
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}