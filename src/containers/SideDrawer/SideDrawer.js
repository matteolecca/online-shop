import React from 'react';
import TransitionCSS from 'react-transition-group/CSSTransition';
import classes from './SideDrawer.module.css'
import SideMenu from './SideMenu/SideMenu';
import Backdrop from '../../component/Backdrop/Backdrop';

const SideDrawer = props => {
    const status = props.opened ? classes.opened : classes.closed
    const nodeRef = React.useRef(null)
    return (
        <TransitionCSS
            nodeRef={nodeRef}
            in={props.opened}
            timeout={500}
            mountOnEnter
            unmountOnExit>
            <React.Fragment>
                <div ref={nodeRef} className={[classes.SideDrawer, status].join(' ')}>
                    <div className={classes.Container}>
                        <SideMenu />
                    </div>
                </div>
                <Backdrop onclick={props.onclick} opened />
            </React.Fragment>
        </TransitionCSS>
    );
};

export default SideDrawer;