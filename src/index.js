import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import "./index.css"
import App from './App';

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #2c2c2c;
`;
const Content = styled.div`
width: 100%;
max-width: 600px;
height: 30vh;
background-color: #262626;
padding: 32px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: 16px;
box-shadow: 9px 4px 32px 0px #000000b3;
color: white;
font-size: 32px;
margin: 0px 12px;
`;

//root
ReactDOM.render(
  <Container>
    {localStorage.getItem('attempted') ? <Content>You already attempted the quiz</Content> : <App />}
  </Container>,
  document.getElementById('root')
);

