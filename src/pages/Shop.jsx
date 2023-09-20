import { useEffect, useState } from "react";
import ShopGrid from "../components/ShopGrid";
import { fetchAllProducts } from "../helpers/fetchRequests";
import { Outlet } from "react-router-dom";

export default function Shop() {
    
    //console.log(inventory)

    return (
        <div className="container-fluid">
            <Outlet />
        </div>
        
    )
}