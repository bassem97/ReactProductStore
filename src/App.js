import logo from './logo.svg';
import './App.css';
import React, {Suspense,lazy}  from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";

const Products = lazy(() => import(`./Components/Products`));


function App() {
  return <BrowserRouter>
    <Suspense fallback={()=> <h1>....Loading</h1>}>
      <Navbar/>
      <Switch>
        <Route exact  path='/' render={ props => <Home {...props}/>}/>
        <Route   path='/products' render={ props => <Products {...props}/>}/>
        <Route   path='/productDetails/:id' render={ props => <ProductDetails {...props}/>}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
  // npm i react-router-dom@5

}

export default App;

//////////////////////////////////////////////
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  justify-content : center
`;
