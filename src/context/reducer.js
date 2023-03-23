export const addReducer = (state, actions) => {
    switch (actions.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                list: [...state.list, {...actions.payload }],
            };
            // case "REMOVE_FROM_LIST":
            //     return {
            //         ...state,
            //         list: state.cart.filter(c => c.id != actions.payload.id),
            //     };

        default:
            return state;
    }
};