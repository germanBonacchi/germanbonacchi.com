import React from 'react'
import styled from 'styled-components'

const SectionTitleStyle = styled.div`
 text-align: center;
 color: #010606;
`

const Subheading = styled.p`
 font-size: 18px;
 @media only screen and (max-width: 768px) {
  text-align: center;
  font-size: 15px;
 }
`
const Heading = styled.h2`
 font-size: 36px;
 margin-top: 0.5rem;
 text-transform: uppercase;
 @media only screen and (max-width: 768px) {
  text-align: center;
  font-size: 32px;
 }
`

export default function SectionTitle({ subheading, heading }) {
 return (
  <SectionTitleStyle>
   <Subheading>{subheading}</Subheading>
   <Heading>{heading}</Heading>
  </SectionTitleStyle>
 )
}
