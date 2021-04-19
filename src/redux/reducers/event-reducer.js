import * as actions from '../actions'

const initialState = {
    event: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_POPUP:
            return { event: true, message: action.message }
        case actions.HIDE_POPUP:
            return {...state, event : false}
        default:
            return initialState
    }
}

export default reducer