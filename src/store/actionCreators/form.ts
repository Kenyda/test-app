import {Dispatch} from "redux";
import {actionTypes, formAction, IFormState} from "../reducers/formReducer";

export const setFormValues = (data: IFormState) => {
    return (dispatch: Dispatch<formAction>) => {
        dispatch({type: actionTypes.SET_VALUES, payload: data})
    }
}

export const resetFormValues = () => {
    return (dispatch: Dispatch<formAction>) => {
        dispatch({type: actionTypes.RESET_VALUES})
    }
}