import {ActionTypes} from "../contants/action-types";

const initialState = {
    product: [{
        id: 1,
        title: "suraj",
        category: "developer",
    },],
};
export const productReducer = (state = initialState, {type, payload}) => {

    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        default:
            return state;
    }
}