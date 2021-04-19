import { put } from 'redux-saga/effects'
import { axiosFetch } from '../../axios/HTTP/http'
import * as actions from '../actions'
// import { axiosFetch } from '../../axios/HTTP/http'
import { inputsValidator } from '../../utils/InputValidator'

export function* sendOrder (action) {
    console.log("Setting Order...")
    yield put({type : actions.SENDING_ORDER})
    if(!inputsValidator(action.order)) return yield put({type : actions.ORDER_ERROR})
    const order = extractOrderValues(action.order)
    const result = yield axiosFetch('order', 'POST', {order : order, products : action.cart})
    if(result.error) return yield put({type : actions.ORDER_ERROR})
    yield put({type : actions.ORDER_SENT, orderID : result.data.orderID})
}


const extractOrderValues = order =>{
    const orderValues = {}
    for(let o in order) orderValues[o] = order[o].value
    return orderValues
}