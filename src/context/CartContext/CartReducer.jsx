const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
        case 'CLEAR_CART':
          return {
            ...state,
            cart: [],
          };
        case 'SET_LOADING':
          return {
              ...state,
              isLoading: true,
          }
          case 'SHOW_CART':
            return {
                ...state,
                isLoading: false,
            }
        default:
          return state;
      }
}

export default cartReducer