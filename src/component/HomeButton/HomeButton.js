import React from 'react';
import classes from './HomeButton.module.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
const HomeButton = props => {
    const { onclick, hide, disabled, history, home } = props
    if (!disabled && !hide) {
        return (
            <button onClick={onclick ? onclick : home ? ()=>history.push('/') : () => history.goBack()} className={classes.HomeButton}><ArrowBackIcon fontSize="large" /> </button>
        )
    }
    else return null
};

export default withRouter(HomeButton);