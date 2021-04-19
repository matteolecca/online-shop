import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import classes from './Popup.module.css'
const Popup = props => {
    const {event, message} = props.event
    const { hidePopup } = props
    const style = event ? classes.opened : classes.closed
    const ref = React.useRef(null)
    useEffect(()=>{
        if(event){
            setTimeout(() => {
                hidePopup() 
            }, 2000);
        }
            
    },[event, hidePopup])
    return (
        <CSSTransition
        nodeRef={ref}
        in={event}
        mountOnEnter
        unmountOnExit
        timeout={500}
        >
        <div ref={ref} className={[classes.Popup, style].join(' ')}>
            {message}
        </div>
        </CSSTransition>
    );
};

const State = state =>{
    return {
        event : state.eventReducer
    }
}
const Actions = dispatch =>{
    return{
        hidePopup : ()=>dispatch({type : 'HIDE_POPUP'})
    }
}

export default connect(State, Actions)(Popup);