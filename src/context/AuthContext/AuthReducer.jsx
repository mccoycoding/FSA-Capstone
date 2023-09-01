const authReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isError: false,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                user: null,
                isLoading: false,
                isError: false,
            };
        case 'USER_AUTH_ERROR':
            return {
                ...state,
                message: action.payload,
                isLoading: false,
                isError: true
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
};

export default authReducer;