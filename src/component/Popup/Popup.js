import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './Popup.module.scss'
import { hidePopup, getPopupState } from '../../redux/slices/popup-slice'
import { useDispatch, useSelector } from 'react-redux';
const Popup = props => {
    const { event, message } = useSelector(getPopupState)
    const style = event ? classes.opened : classes.closed
    const ref = React.useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (event) {
            setTimeout(() => {
                dispatch(hidePopup())
            }, 2000);
        }

    }, [event, hidePopup])
    return (
        <CSSTransition
            nodeRef={ref}
            in={event}
            mountOnEnter
            unmountOnExit
            timeout={500}
        >
            <div onClick={() => dispatch(hidePopup())} ref={ref} className={[classes.Popup, style].join(' ')}>
                {message}
            </div>
        </CSSTransition>
    );
};



export default (Popup);