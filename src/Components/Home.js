import React from 'react';
import styled from 'styled-components';


function Home() {
    return (
        <WelcomeWrapper>
            <h1>Welcome to our shop</h1>
        </WelcomeWrapper>
    );
}

export default Home;
const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;
