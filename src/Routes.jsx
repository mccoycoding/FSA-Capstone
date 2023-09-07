import { useRoutes } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart.jsx"

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
    