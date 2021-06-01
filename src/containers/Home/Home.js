import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Categories from './Categories/Categories';
import classes from './Home.module.css'
import productsHook from '../../hooks/products-hook'
import LoadingPage from '../LoadingPage/LoadingPage';
const Home = props => {
    const { products, loading, loaded, categories, error, loadProducts } = productsHook()

    useEffect(() => {
        if(!loaded)loadProducts()
    }, [loadProducts, loaded])
    useEffect(()=>{
        console.log('LOADED', loaded)
    },[loaded])
    return (
        <div className={classes.Home}>
            {
                error ? <div>Error loading</div>
                    :
                    loading ?
                        <LoadingPage message="loading" />
                        :
                        <React.Fragment>
                            <div className={classes.ImageContainer}>
                            </div>
                            <div className={classes.ProductsContainer}>
                                <Categories categories={categories} />
                                <div className={classes.Products}>
                                    <h1>Products</h1>
                                    <Products categories={categories} products={products} />
                                </div>
                            </div>
                            <Footer />
                        </React.Fragment>
            }
        </div>
    );
};

export default Home;