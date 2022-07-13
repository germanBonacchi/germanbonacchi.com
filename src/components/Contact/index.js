import React from 'react'
import styled from 'styled-components'
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'
import SectionTitle from './SectionTitle'
import { personalInfo } from './Data'

const ContactSectionStyle = styled.div`
 .contactSection__wrapper {
  display: flex;
  gap: 6rem;
  margin-top: 2rem;
  justify-content: space-between;
  position: relative;
 }
 .contactSection__wrapper::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 100%;
  background-color: #363636;
  left: 50%;
  top: 60%;
  transform: translate(-60%, -60%);
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
   <SectionTitle heading="Contact" subheading="Get in touch" />
   <div className="contactSection__wrapper">
    <div className="left">
     <ContactInfoItem iconInfo={<MdEmail />} text={personalInfo.email} />
     <ContactInfoItem iconInfo={<MdLocalPhone />} text={personalInfo.phone} />
     <ContactInfoItem iconInfo={<MdPlace />} text={personalInfo.address} />
    </div>
    <div className="right">
     <ContactForm />
    </div>
   </div>
  </ContactSectionStyle>
 )
}
