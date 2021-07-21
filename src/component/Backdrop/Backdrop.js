import React from 'react';
import TransitionCSS from 'react-transition-group/CSSTransition';

import classes from './Backdrop.module.scss'
const Backdrop = props => {
    const nodeRef = React.useRef(null)
    const status = props.opened ? classes.opened : classes.closed
    return (
        <TransitionCSS
            nodeRef={nodeRef}
            in={props.opened}
            timeout={500}
            mountOnEnter
            unmountOnExit>
            <div ref={nodeRef} onClick={props.onclick} className={[classes.Backdrop, status].join(' ')}>
                {props.children}
            </div>
        </TransitionCSS>)
}


export default Backdrop;