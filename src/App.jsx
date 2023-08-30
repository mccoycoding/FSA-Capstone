import Login from "./pages/Login"
import Shop from "./pages/Shop"
import NavBar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
