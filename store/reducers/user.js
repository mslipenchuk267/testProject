import {
    SET_NAME,
    RESET_NAME,
    INCREMENT_VALUE,
    DECREMENT_VALUE,
    RESET_VALUE
} from '../actions/user';

const initialState = {
    userName: "None",
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                userName: action.name
            }
        case RESET_NAME:
            return {
                ...state,
                userName: "None"
            }
        case INCREMENT_VALUE:
            var newValue = state.value;
            newValue = newValue + 1
            return {
                ...state,
                value: newValue
            }
        case DECREMENT_VALUE:
            var newValue = state.value;
            newValue = newValue - 1
            return {
                ...state,
                value: newValue
            }
        case RESET_VALUE:
            return {
                ...state,
                value: 0
            }
        default:
            return state;
    }
}