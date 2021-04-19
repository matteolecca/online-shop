import { put } from 'redux-saga/effects'
import * as actions from '../actions'
import { axiosFetch } from '../../axios/HTTP/http'

export function* getProducts () {
    console.log("Getting products...")
    const result = yield axiosFetch('/products', 'GET')
    console.log(result)
    const categories = yield axiosFetch('/categories', 'GET')
    if(result.error) yield put({type : actions.ERROR, message : 'Failed to load products!'})
    yield put({type : actions.LOAD_PRODUCTS, products : result.data, categories : categories.data})
}
