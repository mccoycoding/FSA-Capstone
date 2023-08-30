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

        dispatch({type: 'USER_LOGIN', payload: JSON.stringify(result)});
        navigate('/shop')
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <label>Username</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={() => handleClick()}>Login</button>
        </form>
    )
}