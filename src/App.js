import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Products from './Products.json';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      {Products.map(
        (product,index)=>(
        <Product product={product} key={index}/>)
        )}     
    </div>
  );
}

export default App;

//////////////////////////////////////////////
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;