import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Products from "./Components/Products";
function App() {
  return (
      <Products/>
  );
}

export default App;

//////////////////////////////////////////////
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  justify-content : center
`;
