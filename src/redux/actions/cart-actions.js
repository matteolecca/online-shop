export const initialState = {
    products: [],
    count: 0,
    subtotal: 0,
    shipping: 25
}
export const getInitialState = ()=> initialState
export const addProductToCart = (state, action) => {
    const { p, s } = action.payload
    return {
        ...state,
        products: generateProduct(p, s, state),
        count: state.count + 1,
        subtotal: state.subtotal + parseFloat(p.price)
    }
}


export const removeProductFromCart = (state, action) => {
    const { ID, size, price } = action.payload
    return {
        ...state,
        count: state.count - 1,
        products: state.products.filter(p => p.ID !== ID || p.size !== size),
        subtotal: state.subtotal - parseFloat(price)
    }
}

const generateProduct = (product, size, state) => {
    const updatedCart = [...state.products]
    const existingProduct = updatedCart.filter(p => p.ID === product.ID && p.size === size)
    const arrayRemoved = updatedCart.filter(p => p.ID !== product.ID || p.size !== size)
    if (existingProduct.length > 0) {
        const pCopy = { ...existingProduct[0], quantity: existingProduct[0].quantity + 1 }
        arrayRemoved.push(pCopy)
        return arrayRemoved
    }
    console.log('avanti andfiamo ')
    const copy = { ...product }
    copy.size = size
    copy.quantity = 1
    updatedCart.push(copy)
    return updatedCart
}