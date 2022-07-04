import React, { useState } from 'react'
import styled from 'styled-components'

const FormStyle = styled.form`
 width: 100%;

 @media only screen and (max-width: 768px) {
  margin-top: -60px;
 }

 .form-group {
  width: 100%;
  margin-bottom: 2rem;
 }
 label {
  color: #010606;

  font-size: 1.2rem;
 }
 input,
 textarea {
  width: 100%;
  font-size: 1rem;
  padding: 1.2rem;
  color: #fff;
  background-color: #1e1e1e;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
 }
 textarea {
  min-height: 250px;
  resize: vertical;
 }
 button[type='submit'] {
  background-color: #363636;
  color: #fff;
  font-size: 1rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  //a32eff
 }
`

export default function ContactForm() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('')
 return (
  <>
   <FormStyle>
    <div className="form-group">
     <label htmlFor="name">
      Your Name
      <input
       type="text"
       id="name"
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
      />
     </label>
    </div>
    <div className="form-group">
     <label htmlFor="email">
      Your Email
      <input
       type="email"
       id="email"
       name="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
     </label>
    </div>
    <div className="form-group">
     <label htmlFor="message">
      Your message
      <textarea
       type="text"
       id="message"
       name="message"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
      />
     </label>
    </div>
    <button type="submit">Send</button>
   </FormStyle>
  </>
 )
}
