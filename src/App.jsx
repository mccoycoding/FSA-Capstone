import Login from "./pages/Login"
import LoginForm from "./components/LoginForm"
import Shop from "./pages/Shop"
import NavBar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { BrowserRouter, Route, Routes, Outlet, useRoutes } from "react-router-dom"

function App() {

  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <RouterContext />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Login/>
  //       },
  //       {
  //         path: "/shop",
  //         element: <Shop />,
  //       }
  //     ]
  //   },
  // ])

  const routes = useRoutes([
    {
      index: true,
      element: <LoginForm />
    },
    {
      path: "/shop",
      element: <Shop />,
    }
  ])


  // return routes
  return (
    <AuthProvider>

      <NavBar />
      {routes}
    </AuthProvider>
  )
}

// const RouterContext = () => {
//   return (
//     <AuthProvider>
//       <NavBar />
//       <Outlet />
//     </AuthProvider>
    
//   )
// }

export default App
