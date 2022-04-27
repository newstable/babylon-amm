import React from "react";
import styled from 'styled-components'

const Evengal = styled.div`
    margin-top:150px;
    padding:30px 50px;
    position:relative;
    background-color:#090805;
    color:white;
    min-width: 600px;
    z-index: 5;
    border-radius: 20px;
    border:1px solid #D0B49F;
`

const Header = styled.div`
    font-size:35px;
    text-align:center;
    margin:5px 0 30px;
`

const Input = styled.input`
  width:70%;
  border:1px solid #D0B49F;
  border-radius:10px;
  padding:8px;
  background-color:#090805;
  color:white;
`
const Button = styled.button`
  margin:auto;
  margin-right:0px;
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
`

const Evengalist = () => {
    return (
        <Evengal>
            <Header>Evengalist</Header>
            <div style={{ width: "100%", marginBottom: "25px" }}>Enter your referrer address</div>
            <div style={{ display: "flex", marginBottom: "50px" }}>
                <Input />
                <Button >Submit</Button>
            </div>
            <div style={{ display: "flex" }}>
                Reward Amount
                <Button >Claim All</Button>
            </div>
        </Evengal>
    );
}

export default Evengalist;