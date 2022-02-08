import styled from "styled-components";
import React, {useState} from "react";




export default function Product(props){

    const [likes, setLikes] = useState(0)
    const [product, setProduct] = useState(props.product)


    const ProductFrame = styled.div`
        border-radius: 25px;
        min-height: 150px;
        max-width: 150px;
        min-width: 150px;
        background-color: rgb(110, 110, 110, 0.7);
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const ProductImageWrapper = styled.div`
        margin: 5px;
        max-width: 150px;
    `

    const ProductImage = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 25px;
    `

    const ProductInfoWrapper = styled.div`
      margin-top: auto;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      & > span {
        text-align: center;
      }
    `;
    const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
    const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
    const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
    const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
    const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


    return (
    <ProductFrame>
        {product.name}
        <ProductImageWrapper>
            <ProductImage src={product.img}/>
        </ProductImageWrapper>
        <ProductInfoWrapper>
            <p>💲{product.price} 💕{product.likes}</p>
            <button onClick={() => setProduct({...product, likes: Number(product.likes + 1)})}>💖💖💖</button>
        </ProductInfoWrapper>
    </ProductFrame>
    )



}


