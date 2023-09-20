import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSquare({product, handleAddToCart}) {
    const [buttonText, setButtonText] = useState("Add to Cart")
    const navigate = useNavigate()
    const maxTitleLength = 20
    const title = product.title.length > maxTitleLength
    ? product.title.substring(0, maxTitleLength) + ' ...' 
    : product.title;

    const addToCartClicked = async () => {
        handleAddToCart(product)
        setButtonText("Item Added to Cart!")

        setTimeout(() => {
            setButtonText("Add to Cart")
        }, 2000);
    }

    const handleMoreDetails = async () => {
      navigate(`/shop/${product.id}`)
    }

    return (
        <div className="card product-card p-3 text-center">
          <div className="img-container">
            <img
              src={product.image}
              className="card-img-top img-fluid"
              alt={product.title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-3">${product.price.toFixed(2)}</h6>
            <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary me-1"
            onClick={() => addToCartClicked()}
          >
            {buttonText}
          </button>
          <button className="btn btn-secondary" onClick={() => handleMoreDetails()}>More Details</button>
        </div>
          </div>
        </div>
      );
}