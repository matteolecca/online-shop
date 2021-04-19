import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input copy/Input';
import classes from './Searchbar.module.css'
const Searchbar = props => {
    const [ orderID, setOrderID] = useState(null)
    console.log(orderID)
    const searchOrderHandler = ()=>{
        props.history.push(`/findorder/${orderID}`)
    }

    return (
        <div className={classes.Searchbar}>
            <div className={classes.InputContainer}>
                <Input  onchange={setOrderID} type="text" valid placeholder="Oder number"></Input>
                {/* <input onChange={(e)=>setOrderID(e.target.value)} type="text" placeholder="Oder number"></input> */}
                <Button onclick={searchOrderHandler}>Search</Button>
            </div>
        </div>
    );
};

export default Searchbar;