import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext/AuthContext";
import { useContext } from "react";
import { logoutUser } from "../context/AuthContext/AuthActions"

export default function NavBar() {
    const {user, dispatch} = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
        dispatch({type: 'USER_LOGOUT'})
    }

    return (
        <div>
            <h1>Unlucky Tanooki</h1>
            <h2>Your one stop shop</h2>
            {!user && (
                <Link to='/'>Login</Link>
            )}
            <Link to='/shop'>Shop</Link>
            {user && (
                <Link to='/' onClick={() => handleLogout()}>Logout</Link>
            )}
        </div>
    )
}