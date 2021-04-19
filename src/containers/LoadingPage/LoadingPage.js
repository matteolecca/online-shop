import React from 'react';
import Backdrop from '../../component/Backdrop/Backdrop';
import Spinner from '../../component/Spinner/Spinner';

const LoadingPage = props => {
    const { message } = props
    return (
        <Backdrop opened>
            <Spinner message={message}/>
        </Backdrop>
    );
};

export default LoadingPage;