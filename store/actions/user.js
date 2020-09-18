export const SET_NAME = "SET_NAME";
export const RESET_NAME = "RESET_NAME";
export const INCREMENT_VALUE = "INCREMENT_VALUE"
export const DECREMENT_VALUE = "DECREMENT_VALUE"
export const RESET_VALUE = "RESET_VALUE"

export const setUserName = (name) => {
    return { type: SET_NAME, name: name }
}

export const resetUserName = () => {
    return { type: RESET_NAME }
}

export const incrementValue = () => {
    return { type: INCREMENT_VALUE }
}

export const decrementValue = () => {
    return { type: DECREMENT_VALUE }
}

export const resetValue = () => {
    return { type: RESET_VALUE }
}