import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './Spinner.module.scss'
const Spinner = props => {
    const { message } = props 
    const absolute = props.absolutepos ? classes.AbsolutePosition : null
    const dark = props.dark ? classes.dark : null
    const small = props.small ? classes.small : null
    return (
        <div className={[classes.SpinnerContainer, absolute,dark ].join(' ')}>
            <CircularProgress className={[classes.Spinner, small,dark].join(' ')}/>
            {message ? <p>{message}</p> : null}
        </div>
    );
};

export default Spinner;