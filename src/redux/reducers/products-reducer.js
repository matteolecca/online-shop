import * as actions from '../actions'
const initialState = {
    products : [],
    categories : []
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actions.LOAD_PRODUCTS:
            return {products : action.products, categories : action.categories}
        default:
            return state
    }
}

export default reducer