import React from 'react'
import styled from 'styled-components'
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'
import SectionTitle from './SectionTitle'

const ContactSectionStyle = styled.div`
 //padding: 10rem 0;
 .contactSection__wrapper {
  display: flex;
  gap: 5rem;
  margin-top: 7rem;
  justify-content: space-between;
  position: relative;
 }
 .contactSection__wrapper::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 50%;
  background-color: #363636;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
 }
 .left {
  width: 100%;
  max-width: 500px;
 }
 .right {
  max-width: 500px;
  width: 100%;
  border-radius: 12px;
  /* padding-left: 3rem; */
 }
 @media only screen and (max-width: 768px) {
  .contactSection__wrapper {
   flex-direction: column;
  }
  .contactSection__wrapper::after {
   display: none;
  }
  .left,
  .right {
   max-width: 100%;
  }
  .right {
  }
 }
`

export default function Contact() {
 return (
  <ContactSectionStyle>
   <div className="container">
    <SectionTitle heading="Contact" subheading="Get in touch" />
    <div className="contactSection__wrapper">
     <div className="left">
      <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
      <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
      <ContactInfoItem icon={<MdPlace />} text="Chittagong, Bangladesh" />
     </div>
     <div className="right">
      <ContactForm />
     </div>
    </div>
   </div>
  </ContactSectionStyle>
 )
}
