import { URL } from '../../helpers/fetchRequests'

export const loginUser = async (username, password) => {
    try {
        const body = {
            username: username,
            password: password
        }
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        console.log(result)
        if (result.token) {
            sessionStorage.setItem('userToken', JSON.stringify(result.token));
            return result.data
        }
    } catch (error) {
        console.error(`ERROR LOGGING IN: ${error}`)
    };
};

export const logoutUser = async () => await sessionStorage.removeItem('userToken')