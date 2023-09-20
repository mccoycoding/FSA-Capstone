import { useRoutes } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart.jsx"
import MoreInfo from "./pages/MoreInfo.jsx"
import ShopGrid from "./components/ShopGrid.jsx"

const rootChilden = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/shop",
        element: <Shop />,
        children: [
            {
                index: true,
                element: <ShopGrid />
            },
            {
                path: ":itemId",
                element: <MoreInfo />,
            }
        ]
    },
    {
        path: "/checkout",
        element: <Cart />,
    }
]

const routes = [
    {
        path: '/',
        element: <App />,
        children: rootChilden
    }
]

export default routes
    