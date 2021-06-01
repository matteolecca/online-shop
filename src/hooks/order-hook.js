import { useCallback, useReducer } from "react"
import { axiosFetch } from "../axios/HTTP/http"

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_ORDER':
            return { loading : true, error : false}
        case 'LOADED_ORDER':
            return { ...state, loading : false, order : action.order }
        case 'ERROR_ORDER':
            return { error : true, loading : false, message : action.message}
        default:
            return state
    }
}

const OrderHook = () =>{
    const [ state, dispatch ] = useReducer(reducer, {})

    const loadOrder = useCallback(async orderID =>{
        dispatch({type : 'LOADING_ORDER'})
        const result = await axiosFetch(`order/${orderID}`, 'GET')
        console.log("result", result)
        if(result.error) return dispatch({type : 'ERROR_ORDER', message : 'Failed to load order!'})
        dispatch({type : 'LOADED_ORDER', order : result.data})
    },[])

    return{
        orderOverview : state.order,
        loading : state.loading,
        error : state.error,
        errorMessage : state.message,
        loadOrder : loadOrder
    }
}

export default OrderHook