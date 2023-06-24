import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { ContactLists } from "./reducers/protfolioReducers"


const rootReducer = combineReducers({
    allList:ContactLists
})
const store = createStore(
    rootReducer,
    { },
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
