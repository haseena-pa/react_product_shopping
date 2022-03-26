import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ProductComponent from "./ProductComponent";
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

const ProductList = () => {
    const dispatch = useDispatch();
    const getProducts = async () => {
        const products = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log('Err', err);
        });
        dispatch(setProducts(products.data));
    };


    // call get products api only once
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductList;