
import NavBar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { CartProvider } from "./context/CartContext/CartContext"
import { Outlet } from "react-router-dom"

function App() {

  // return Outlet and Navbar

  return (
    <AuthProvider>
      <CartProvider>
      <NavBar />
      <Outlet />
      </CartProvider>
    </AuthProvider>
  )
}

export default App