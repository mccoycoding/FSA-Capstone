
import NavBar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { Outlet } from "react-router-dom"

function App() {

  // return Outlet and Navbar

  return (
    <AuthProvider>
      <NavBar />
      <Outlet />
    </AuthProvider>
  )
}

export default App