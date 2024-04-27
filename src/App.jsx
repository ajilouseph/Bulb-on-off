import React, { useState } from 'react'
import styled from 'styled-components'
export default function App() {
  const [ trigger, setTrigger ] = useState(false) 
  const [ trigger1, setTrigger1 ] = useState(false) 
  const triggerButton = ()=>{
    setTrigger(!trigger)
  }
  const triggerButton1 = ()=>{
    setTrigger1(!trigger1)
  }
  return (
    <>  
    <StyleDiv>
      <RoundedDiv  design = {(trigger)?  "ON":"OFF"}></RoundedDiv>
      <RoundedDiv   design = {(trigger1)?  "OFF":"ON"}></RoundedDiv>
      <Button onClick={triggerButton}>{trigger?'OFF':'ON'}</Button>
      <Button onClick={triggerButton1}>{trigger1?'ON':'OFF'}</Button>
    </StyleDiv>
    </>
  )}
const StyleDiv = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  height:400px;
  width:400px ;
  background-color: #00ff33;
  margin: 20px auto;
  border-radius: 15px;
`
const RoundedDiv = styled.div`

 display: block;
 margin-top: 10px;
 margin-left: 40px; 
 height: 120px;
 width: 120px;
 border-radius:60px  ;
 border-style:none;
 ${(props) =>{
   switch (props.design){
    case "ON":
        return`
            background-color:red;
           
        `;
        case "OFF":
        return`
            background-color:aqua;
            
        `;   
        default:
   } }}
`
 const Button = styled.button`
  margin-top:210px ;
  margin-left: 70px;
  font-style: oblique;
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background-color: yellow;
  




 

 `
