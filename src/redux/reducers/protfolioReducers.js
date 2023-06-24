import { ADD_DATA_FAIL, ADD_DATA_REQUIEST, ADD_DATA_SUCCESS } from "../constans/protfolioConstans";

export const ContactLists = (
    state = { List:[] },
    {type, payload}
) => {
    switch (type) {
        case ADD_DATA_REQUIEST: return{...state, loading: true}
        case ADD_DATA_SUCCESS: return{...state, loading: false, AddedList:true}
        case ADD_DATA_FAIL: return{...state, loading: false, error: payload}
        default: return state
    }
}