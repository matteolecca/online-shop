import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css'

const Products = props => {
    const {  products, categories } = props

    return (
        <React.Fragment >
            {
                categories ? categories.map(c => {
                    const productsFiltered = products.filter(p => p.category === c)
                    return (
                        <section className={classes.ProductsContainer} id={c} key={c}>
                            <div className={classes.category}>{c}</div>
                            <div className={classes.Products}>
                                {productsFiltered.map(p => <Product key={p.ID} product={p} />)}
                            </div>
                        </section>
                    )
                })
                : null
            }
        </React.Fragment>
    );
};


export default(Products);


