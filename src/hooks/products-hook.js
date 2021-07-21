import { useCallback, useReducer } from "react"
import { axiosFetch } from "../axios/HTTP/http"

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return { loading : true, error : false}
        case 'LOADED_PRODUCTS':
            return { ...state, loading : false, products : action.products, categories : action.categories, loaded : true }
        case 'ERROR_PRODUCTS':
            return { error : true, loading : false}
        default:
            return state
    }
}

const ProductsHook = () =>{
    const [ state, dispatch ] = useReducer(reducer, { products : [], categories : []})

    const loadProducts = useCallback(async () =>{
        console.log('LOADING PROSUCES')
        dispatch({type : 'LOADING_PRODUCTS'})
        const result = await axiosFetch('/products', 'GET')
        const categories = await axiosFetch('/categories', 'GET')
        console.log(categories)
        if(result.error) return dispatch({type : 'ERROR_PRODUCTS', message : 'Failed to load products!'})
        dispatch({type : 'LOADED_PRODUCTS', products : result.data, categories : categories.data})
    },[])

    return{
        products : state.products,
        categories : state.categories,
        loading : state.loading,
        loaded : state.loaded,
        error : state.error,
        loadProducts : loadProducts
    }
}

export default ProductsHook