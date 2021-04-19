import * as actions from '../actions'
const initialState = {
    error : false,
    message : ''
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actions.ERROR:
            return { error : true, message : action.message || ''} 
        default:
            return state
    }
}

export default reducer