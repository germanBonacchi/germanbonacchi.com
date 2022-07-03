import React from 'react'
import styled from 'styled-components'

const SectionTitleStyle = styled.div`
 text-align: center;
 color: #010606;
 p {
  font-size: 18px;
 }
 h2 {
  font-size: 36px;
  margin-top: 0.5rem;
  text-transform: uppercase;
 }
 @media only screen and (max-width: 768px) {
  text-align: center;
  p {
   font-size: 15px;
  }
  h2 {
   font-size: 32px;
  }
 }
`

export default function SectionTitle({
 subheading = 'Need Subheading',
 heading = 'need heading',
}) {
 return (
  <SectionTitleStyle className="section-title">
   <p>{subheading}</p>
   <h2>{heading}</h2>
  </SectionTitleStyle>
 )
}
