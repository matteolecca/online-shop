import { takeEvery, all } from 'redux-saga/effects';
import * as actions from './actions'
import { getProducts } from './saga/products-saga';
import { sendOrder } from './saga/orders-saga';

export function* productsListener() {
    yield all([
        takeEvery(actions.GET_PRODUCTS, getProducts)
    ])
}

export function* ordersListener() {
    yield all([
        takeEvery(actions.SEND_ORDER, sendOrder),
    ])
}