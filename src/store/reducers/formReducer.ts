export interface IFormState {
    description: string,
    media: string,
    mediaData?: string,
}

export enum actionTypes {
    SET_VALUES = 'SET_VALUES',
    RESET_VALUES = 'RESET_VALUES',
}

interface ISetAction {
    type: actionTypes.SET_VALUES;
    payload: IFormState;
}

interface IResetAction {
    type: actionTypes.RESET_VALUES;
}

export type formAction = ISetAction | IResetAction

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