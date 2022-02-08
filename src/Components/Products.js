import React from 'react';
import Product from "./Product";
import products from '../Products.json';
import styled from 'styled-components';

function Products() {
    return (<div
        className="App"
        style={{'display': 'flex', 'justifyContent': 'center'}}
    >
        {products.map(product => <Product product={product} />)}
    </div>)
}

export default Products;
