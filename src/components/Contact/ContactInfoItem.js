import React from 'react'
import styled from 'styled-components'
import PText from './PText'

const ItemStyles = styled.div`
 background-color: #1e1e1e;
 display: flex;
 align-items: center;
 gap: 2rem;
 border-radius: 8px;
 margin-bottom: 2rem;
 .icon {
  color: #fff;
  background-color: #363636;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
 }
 svg {
  width: 3.5rem;
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
