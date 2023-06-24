import api from "../api";
import { ADD_DATA_FAIL, ADD_DATA_REQUIEST, ADD_DATA_SUCCESS } from "../constans/protfolioConstans"

export const contactMeListData = contactdata => async dispatch => {
    try {
        dispatch({ type:ADD_DATA_REQUIEST })
        const {data} = await api.post("/contact", contactdata) 
        dispatch({ type: ADD_DATA_SUCCESS})
    } catch (error) {
        dispatch({ type:ADD_DATA_FAIL, payload: error.message})
    }
}