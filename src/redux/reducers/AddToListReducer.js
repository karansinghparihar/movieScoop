import { ActionTypes } from "../constants/ActionTypes";


export const AddToListReducer = (state = [], { type, payLoad }) => {
    switch(type) {
        case ActionTypes.ADD_TO_LIST:
            return [ ...state, payLoad ]
        default:
            return state
    }
}