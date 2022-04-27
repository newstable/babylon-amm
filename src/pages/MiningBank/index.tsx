import React from "react";
import styled from 'styled-components'


const MiningMain = styled.div`
    padding:30px;
    position:relative;
    background-color:#090805;
    color:white;
    min-width: 600px;
    z-index: 5;
    border-radius: 20px;
    border:1px solid #D0B49F;
`

const TokenInfo = styled.div`
  padding:30px;
  width:70%;
  border:1px solid #D0B49F;
`
const Header = styled.div`
  width:100%;
  margin:0 0 25px;
  font-size:20px;
  font-weight:400;
`

const Input = styled.input`
  width:70%;
  border:1px solid #D0B49F;
  border-radius:10px;
  padding:8px;
  background-color:#090805;
  color:white;
  margin-bottom:35px;
`

const TokenName = styled.div`
  width:75%;
`

const ListView = styled.div`
  margin-top:25px;
  width:100%;
  padding:0;
  height:400px;
  overflow:auto;
  border:2px solid #D0B49F;
`
const Item = styled.div`
  width:100%;
  border:1px solid #83838359;
  cursor:pointer;
  padding:12px;
  display:flex;
  &:hover{
      background-color:#83838359;
  }
`

const ClaimButton = styled.button`
  padding:8px 17px;
  position:absolute;
  right:55px;
  bottom:90px;
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

const MiningBank = () => {
    return (
        <MiningMain>
            <div style={{ textAlign: "center", fontSize: "25px", marginBottom: "20px" }}>Mining Bank</div>
            <div style={{ display: "flex" }}>
                <TokenInfo >
                    <Header>Select a Token</Header>
                    <Input />
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "70%" }}>Token Name</div>
                        <div>Amount</div>
                    </div>
                    <ListView>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                        <Item>
                            <TokenName>USDT</TokenName>
                            <div>100</div>
                        </Item>
                    </ListView>
                    <ClaimButton>Claim All</ClaimButton>
                </TokenInfo>

            </div>
        </MiningMain>
    );
}

export default MiningBank;