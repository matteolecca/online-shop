import React from 'react';
import Button from '../../component/Button/Button';
import classes from './ErrorPage.module.css'
import RefreshIcon from '@material-ui/icons/Refresh';
const ErrorPage = () => {
    return (
        <div className={classes.ErrorPage}>
            <div className={classes.container}>
                <h1>Ops</h1>
                <h2>Something went wrong</h2>
                <img alt="error" src="error.png" />
                <p>Something went wrong trying load your products... try to refresh this page</p>
                <Button onclick={() => window.location.reload(true)} fullwidth><label>Refresh</label><RefreshIcon /></Button>
            </div>
        </div>
    );
};

export default ErrorPage;