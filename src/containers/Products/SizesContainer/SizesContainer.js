import React from 'react';
import classes from './SizesContainer.module.css'

const SizesContainer = props => {
    const {sizeSelected, selectSize, sizes} = props
    return (
        <ul className={classes.SizesContainer}>
            {sizes.map(size =>{
                const selected = size === sizeSelected ? classes.selected : null
                return <li className={selected} key={size} onClick={()=>selectSize(size)} id={size}>{size}</li>
            })}
        </ul>
    );
};

export default SizesContainer;