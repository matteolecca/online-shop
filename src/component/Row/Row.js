import React from 'react';
import classes from './Row.module.css'
const Row = props => <div className={classes.Row}>{props.children}</div>

export default Row;