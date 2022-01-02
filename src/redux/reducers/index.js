import { combineReducers } from "redux";
import { AddToListReducer } from './AddToListReducer'

const reducers = combineReducers({
    myList : AddToListReducer
})
export default reducers