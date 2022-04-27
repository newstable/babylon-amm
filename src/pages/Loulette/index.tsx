import React from "react";
import styled from 'styled-components'

const MainLoulette = styled.div`
    padding:50px 50px;
    position:relative;
    background-color:#090805;
    color:white;
    min-width: 800px;
    z-index: 5;
    border-radius: 20px;
    border:1px solid #D0B49F;
    
    @media (max-width: 840px) {
        min-width:400px;
    }
    @media (max-width: 540px) {
        min-width:350px;
    }

`
const Game = styled.div`
    justify-content: center;
    margin:25px 0;
    align-items: center;
    display:flex;
    position:relative;
    @media (max-width: 840px) {
        flex-direction:column;
    }
`

const Wheal = styled.div`
    width:400px;
    height:400px;
    border-radius:50px;
    background:url(./images/wheel.png);
    background-size:100% 100%;
    animation: circle 0.3s linear infinite;

    @keyframes circle{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
`
const Button = styled.button`
  width:100px;
  margin:auto;
  margin-right:60px;
  padding:8px 17px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
  border:2px solid #D0B49F;
  color:white;
  background-color:#090805;
  &:hover{
      background-color:white;
      color:#090805;
  }
    @media (max-width: 840px) {
        margin:auto;
        margin-top:15px;
    }
`
const Direction = styled.div`
  position:absolute;

`

const Loulette = () => {
    return (
        <MainLoulette>
            <Game>
                <Wheal />
                <Button >Play</Button>
            </Game>
            <Game>
                <div>Reward Amount</div>
                <Button>Claim All</Button>
            </Game>
        </MainLoulette>
    );
}


export default Loulette;