import React from 'react'
import styled from 'styled-components'

const ItemStyles = styled.div`
 background-color: #1e1e1e;
 display: flex;
 align-items: center;
 gap: 2rem;
 border-radius: 8px;
 margin-bottom: 2rem;
 padding: 0.5rem;
 .icon {
  color: #fff;
  background-color: #363636;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
 }
`

const PText = styled.div`
 max-width: 500px;
 margin: 0 auto;
 font-size: 1.2rem;
 line-height: 1.3em;
 @media only screen and (max-width: 768px) {
  font-size: 1rem;
 }
`
export default function ContactInfoItem({ icon, text = 'I need text ' }) {
 return (
  <ItemStyles>
   <div className="icon">{icon}</div>
   <div className="info">
    <PText>{text}</PText>
   </div>
  </ItemStyles>
 )
}
