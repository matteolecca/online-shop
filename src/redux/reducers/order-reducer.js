import { inputsValidator } from '../../utils/InputValidator'
import * as actions from '../actions'
const initialState = {
    valid: false,
    loading: false,
    error: false,
    success: false,
    inputs: {
        email: {
            value: '',
            valid: false
        },
        name: {
            value: '',
            valid: false
        },
        surname: {
            value: '',
            valid: false
        },
        city: {
            value: '',
            valid: false
        },
        postcode: {
            value: '',
            valid: false
        }
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_VALUE:
            const subState = {...state}
            const subStateInputs = { ...subState.inputs[action.valueType] }
            subStateInputs.value = action.value
            subStateInputs.valid = action.valid
            return { ...state, valid : inputsValidator({...subState.inputs, [action.valueType] : subStateInputs}),  inputs: { ...state.inputs, [action.valueType]: subStateInputs } }
        case actions.SENDING_ORDER:
            return { ...state, loading: true }
        case actions.ORDER_SENT:
            return { ...state, loading: false, success: true, orderID: action.orderID }
        case actions.ORDER_ERROR:
            return { ...state, loading: false, error: true }
        case actions.RESET_ORDER:
            return initialState
        default:
            return state
    }

}

export default reducer