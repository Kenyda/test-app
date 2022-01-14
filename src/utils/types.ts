

export interface IPost {
    id: number;
    description: string;
    media?: string;
}

export interface IFormState {
    description: string,
    media: string,
    mediaData?: string,
}

export interface ISetAction {
    type: actionTypes.SET_VALUES;
    payload: IFormState;
}

export interface IResetAction {
    type: actionTypes.RESET_VALUES;
}

export enum actionTypes {
    SET_VALUES = 'SET_VALUES',
    RESET_VALUES = 'RESET_VALUES',
}

export type formAction = ISetAction | IResetAction