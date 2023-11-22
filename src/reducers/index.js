import { combineReducers } from "redux"
import firstcounterReducer from "./firstcounter"
import secondcounterReducer from "./secondcounter"

const rootReducer = combineReducers({
    firstcounterReducer,
    secondcounterReducer
})

export default rootReducer
