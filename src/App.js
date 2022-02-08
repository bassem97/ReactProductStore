import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Products from "./Components/Products";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact  path='/' render={ props => <Home {...props}/>}/>
      <Route   path='/products' render={ props => <Products {...props}/>}/>
      <Route   path='/productDetails/:id' render={ props => <ProductDetails {...props}/>}/>
    </Switch>
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
