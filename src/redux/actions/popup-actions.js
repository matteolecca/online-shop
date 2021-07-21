export const showPopupState = (state,action)=>{
    const { p } = action.payload
    return { event : true, message : `${p.description} added to cart`}
}
export const hidePopupState = (state,action)=>{
    return { event : false, message : ''}
}