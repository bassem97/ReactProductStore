import styled from "styled-components";
import React from "react";


export default class  Product extends React.Component
    {
        state={
            likes: 0,
            update: 0
        }

        constructor(props){
            super(props);
            this.addLikes= this.addLikes.bind(this);
        }

    addLikes(){
        this.setState(
            (oldState)=> (
                {likes: oldState.likes+1, update: oldState.update+1} )
            )
    }

    componentDidMount(){
        console.log("component did mount")
    }
    componentDidUpdate(){
        console.log(this.state.update)

    }
    componentWillUnmount(){
        console.log("component will unmount")

    }
    render(){
        return <ProductFrame>

                <ProductImageWrapper>
                    <ProductImage src={this.props.product.img}></ProductImage>
                </ProductImageWrapper>

                <ProductInfoWrapper>
                {this.props.product.name}
                {this.props.product.price}
                </ProductInfoWrapper>
                likes: {this.state.likes}
                update: {this.state.update}


                <button onClick={this.addLikes}>Like</button>
                </ProductFrame>
}


    }




//////////////////////////////////////////////////////////////////////
const ProductFrame = styled.div`
border-radius: 25px;
min-height: 150px;
min-width: 150px;
background-color: rgb(110, 110, 110, 0.7);
margin: 10px;
display: flex;
flex-direction: column;
`;
const ProductImageWrapper = styled.div`
margin: 5px;
max-width: 150px;
`;
const ProductImage = styled.img`
width: 100%;
height: 100%;
border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
margin-top: auto;
margin-bottom: 5px;
display: flex;
flex-direction: column;
& > span {
  text-align: center`;