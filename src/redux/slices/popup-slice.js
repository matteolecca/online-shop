import { createSlice } from "@reduxjs/toolkit";
import { hidePopupState, showPopupState } from "../actions/popup-actions";

const slice = createSlice({
    name : 'popup', 
    initialState : {
        event : false,
        message : ''
    },
    reducers : {
        showPopup : showPopupState,
        hidePopup : hidePopupState
    }
})

export const  { showPopup, hidePopup }  = slice.actions
export const getPopupState = state => state.popup
export default slice.reducer

