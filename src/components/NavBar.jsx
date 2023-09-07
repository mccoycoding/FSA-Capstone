import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext/AuthContext";
import { useContext, useEffect } from "react";
import { logoutUser } from "../context/AuthContext/AuthActions"
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const {user, dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser();
        dispatch({type: 'USER_LOGOUT'})
        navigate("/")
    }

    return (
        <div>
            <h1>Unlucky Tanooki</h1>
            <h2>Your one stop shop</h2>
            <Link to="/">Home</Link>
            <Link to='/shop'>Shop</Link>
            {!user ? (
                <Link to="/login">Login</Link>
            ) : (
                <Link to="/login" onClick={() => handleLogout()}>Logout</Link>
            )}
        </div>
    )
}