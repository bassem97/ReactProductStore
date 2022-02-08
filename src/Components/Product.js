import styled from "styled-components";
import React, {useState} from "react";




export default function Product(props){

    const [likes, setLikes] = useState(0)

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
        text-align: center
    `


    return <ProductFrame>
        {props.product.name}
        <ProductImageWrapper>
            <ProductImage src={props.product.img}/>
        </ProductImageWrapper>
        <ProductInfoWrapper>
            <p>💲{props.product.price} 💕{likes}</p>
            <button onClick={() => setLikes(likes + 1)}>💖💖💖</button>
        </ProductInfoWrapper>
    </ProductFrame>



}


