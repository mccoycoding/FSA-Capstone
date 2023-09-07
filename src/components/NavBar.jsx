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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Unlucky Tanooki</Link>
                <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target="#navContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/shop'>Shop</Link>
                        </li>
                        {!user ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => handleLogout()}>Logout</Link>
                            </li>
                        )}
                    
                    </ul>
                    <button type="button" className="btn btn-primary d-flex rounded-circle align-items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            
            
            
        </nav>
    )
}