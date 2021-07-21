import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import { useCallback, useReducer } from 'react';
import { inputsValidator } from '../utils/InputValidator';
import { axiosFetch } from '../axios/HTTP/http';


const inputs = {
    userInfoForm: {
        inputs: {
            email: { type: 'email', value: '', placeholder: 'email', required: true, icon: MailOutlineIcon, fullwidth: true, id: 0 },
        },
        valid: false
    },
    shippingInfoForm: {
        inputs: {
            name: { type: 'text', value: '', placeholder: 'name', required: true, icon: SpellcheckIcon, fullwidth: false, id: 0 },
            surname: { type: 'text', value: '', placeholder: 'surname', required: true, icon: SpellcheckIcon, fullwidth: false, id: 1 },
            address: { type: 'text', value: '', placeholder: 'address', required: true, icon: HomeIcon, fullwidth: true, id: 2 },
            city: { type: 'text', value: '', placeholder: 'city', required: true, icon: LocationCityIcon, fullwidth: false, id: 3 },
            postcode: { type: 'text', value: '', placeholder: 'postcode', required: true, icon: MarkunreadMailboxIcon, fullwidth: false, id: 4 },
        },
        valid: false
    }
}

const inputsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            const subState = { ...state[action.group] }
            const subStateInputs = { ...subState.inputs[action.key] }
            subStateInputs.value = action.value
            subStateInputs.valid = action.valid
            const final = {
                ...state,
                [action.group]: {
                    ...subState,
                    valid: inputsValidator({ ...subState.inputs, [action.key]: subStateInputs }),
                    inputs: {
                        ...state[action.group].inputs,
                        [action.key]: subStateInputs,
                    }
                },
            }
            return final
        default:
            return state
    }
}

const orderStatusReducer = (state, action) => {
    switch (action.type) {
        case 'INSERTING':
            return { inserting: true, }
        case 'ERROR':
            return { inserting: false, error: true }
        case 'INSERTED':
            return { inserting: false, inserted: true, orderID: action.orderID }
        default:
            return state
    }
}



const CheckoutFormReducer = () => {
    const [inputsState, inputsDispatch] = useReducer(inputsReducer, inputs)
    const [ orderState, orderDispatch ] = useReducer(orderStatusReducer, {})
    const setValue = (group, value, key, valid) => inputsDispatch({ type: 'SET_VALUE', group: group, value: value, key: key, valid: valid })
    
    const submitOrder = useCallback( async (products) => {
        orderDispatch({type : 'INSERTING'})
        let order = {
            email  : inputsState.userInfoForm.inputs.email.value
        }
        Object.keys(inputsState.shippingInfoForm.inputs).forEach(i=>{
            order[i] = inputsState.shippingInfoForm.inputs[i].value
        })
        const result = await axiosFetch('/order', 'POST', { order : order, products : products})
        console.log(result)
        if(result.error)return orderDispatch({type : 'ERROR'})
        orderDispatch({type : 'INSERTED', orderID : result.data.orderID})
    }, [inputsState])

    return {
        inputs: inputsState,
        emailValid: inputsState.userInfoForm.valid,
        addressValid: inputsState.shippingInfoForm.valid,
        setValue: setValue,
        submitOrder : submitOrder,
        inserting : orderState.inserting,
        error : orderState.error,
        inserted : orderState.inserted,
        orderID : orderState.orderID
    }
}

export default CheckoutFormReducer