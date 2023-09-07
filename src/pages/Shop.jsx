import { useEffect, useState } from "react";
import ShopGrid from "../components/ShopGrid";
import { fetchAllProducts } from "../helpers/fetchRequests";

export default function Shop() {
    const [inventory, setInventory] = useState([])

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
    
    // console.log(inventory)

    return (
        <div>
            <h1>SHOP</h1>
            <ShopGrid inventory={inventory}/>
        </div>
        
    )
}