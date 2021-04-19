import React from 'react';
import classes from './Categories.module.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Categories = props => {
    const {categories} = props
    return (
        <div className={classes.CategoriesContainer}>
            <div className={classes.Categories}>
                { categories ? categories.map(c=>{
                    return (<div key={c} className={classes.CategoryContainer}>
                        <ArrowDownwardIcon/>
                        <AnchorLink href={"#" + c}>{c}</AnchorLink>
                    </div>)
                })
            :null
            }
        </div>
        </div>
    );
};



export default  (Categories);