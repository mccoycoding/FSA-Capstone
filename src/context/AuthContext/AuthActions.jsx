import { URL } from '../../helpers/fetchRequests'

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        console.log(result)

        if (result.error) {
            return {error: result.error.message}
        }

        if (result.token) {
            sessionStorage.setItem('user', result.token);
            return result.token
        }
    } catch (error) {
        const errorMessage = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

        return {error: errorMessage};
    };
};

export const logoutUser = async () => await sessionStorage.removeItem('user')