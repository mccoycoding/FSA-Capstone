import { URL } from '../../helpers/fetchRequests'

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        if (result.data.token) {
            sessionStorage.setItem('userToken', JSON.stringify(result.data.token));
            return result.data
        }
    } catch (error) {
        console.error(`ERROR LOGGING IN: ${error}`)
    };
};

export const logoutUser = async () => await sessionStorage.removeItem('userToken')