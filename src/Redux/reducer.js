const initialState = {
    addedNum: 0,
    addedProducts: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let newAddedNum = state.addedNum;
            const newAddedProducts = state.addedProducts.map((item) => ({ ...item }));
            const { id, price } = action.data;
            if (newAddedProducts.some((item) => item.id === id)) {
                newAddedProducts.map((item) => {
                    if (item.id === id) {
                        item.count += 1;
                        item.totalPrice = item.count * item.price;
                    }
                });
            } else {
                newAddedProducts.push({
                    ...action.data,
                    count: 1,
                    totalPrice: price,
                });
                newAddedNum += 1;
            }
            return {
                ...state,
                addedNum: newAddedNum,
                addedProducts: newAddedProducts,
            };
        }
        case "INCREASE_IN_CART": {
            const newAddedProducts = state.addedProducts.map((item) => ({ ...item }));
            newAddedProducts.map((item) => {
                if (item.id === action.id) {
                    item.count += 1;
                    item.totalPrice = item.count * item.price;
                }
            });
            return { ...state, addedProducts: newAddedProducts };
        }
        case "DECREASE_IN_CART": {
            const newAddedProducts = state.addedProducts.map((item) => ({ ...item }));
            newAddedProducts.map((item) => {
                if (item.id === action.id) {
                    item.count -= 1;
                    item.totalPrice = item.count * item.price;
                }
            });
            return { ...state, addedProducts: newAddedProducts };
        }
        case "REMOVE_FROM_CART": {
            const newState = { ...state };
            const updateAddedProducts = newState.addedProducts.filter(
                (item) => item.id !== action.id
            );
            newState.addedProducts = updateAddedProducts;
            newState.addedNum -= 1;
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;
