import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { loginUser } from "../context/AuthContext/AuthActions";
import AuthContext from "../context/AuthContext/AuthContext";

export default function LoginForm() {
    const {user, isError, message, isLoading, dispatch} = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleClick = async () => {
        dispatch({type: 'SET_LOADING'});
        const result = await loginUser(username, password);
        console.log(result);

        if (result.error) {
            return dispatch({type: 'USER_AUTH_ERROR', payload: result.error})
        }

        dispatch({type: 'USER_LOGIN', payload: JSON.stringify(result)});
        navigate('/shop')
    }

    return (
        <div className="container text-center">
            <h2 className="display-3">Log in!</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-floating mb-3">
                    <input className="form-control" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="passowrd" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => handleClick()}>Login</button>
            </form>
        </div>
        
    )
}