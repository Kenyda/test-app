import {actionTypes, formAction, IFormState, IResetAction, ISetAction} from "../../utils/types";

const initialState: IFormState = {
    description: '',
    media: '',
    mediaData: undefined,
}

export const formReducer = (state = initialState, action: formAction): IFormState => {
    switch (action.type) {
        case actionTypes.SET_VALUES:
            return {description: action.payload.description, media: action.payload.media, mediaData: action.payload.mediaData}
        case actionTypes.RESET_VALUES:
            return {description: '', media: '', mediaData: undefined}
        default:
            return state
    }
}