import { ActionTypes } from '../constants/ActionTypes'

export const AddToList = (item) => {
    return {
        type: ActionTypes.ADD_TO_LIST,
        payLoad: item
    }
}