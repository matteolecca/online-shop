import * as actions from '../actions'

const initialState = {
    products: [],
    count: 0,
    subtotal: 0,
    shipping: 25
}

const generateProduct = (product, size, state) => {
    let updated = false
    const updatedCart = state.products.map(p => {
        if (p.ID === product.ID && p.size === size) {
            p.quantity += 1
            updated = true
        }
        return p
    })
    if (updated) return updatedCart
    const copy = { ...product }
    copy.size = size
    copy.quantity = 1
    updatedCart.push(copy)
    return updatedCart
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return { ...state, products: generateProduct(action.product, action.size, state), count: state.count + 1, subtotal: state.subtotal + parseFloat(action.product.price) }
        case actions.REMOVE_FROM_CART:
            return { ...state, count: state.count - 1, products: state.products.filter(p => p.ID !== action.ID || p.size !== action.size), subtotal: state.subtotal - parseFloat(action.price) }
        case actions.RESET_ORDER:
            return initialState
        default:
            return state
    }
}

export default reducer