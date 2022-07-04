import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
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
 const [user, setUser] = useState('')
 const [message, setMessage] = useState('')

 const [status, setStatus] = useState('Send')

 const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('Sending...')

  const { name, user, message } = e.target.elements
  const details = {
   name: name.value,
   user: user.value,
   message: message.value,
  }
  emailjs
   .send('service_m88jayg', 'template_c05l9c4', details, 'A1ex8DiA-BK1Cs2jb')
   .then((result) => {
    console.log(result)
    setStatus('Send')
   })
   .catch((error) => {
    console.log(error.text)
    setStatus('Error!')
   })
 }

 return (
  <>
   <FormStyle onSubmit={handleSubmit}>
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
     <label htmlFor="user">
      Your Email
      <input
       type="email"
       id="user"
       name="user"
       value={user}
       onChange={(e) => setUser(e.target.value)}
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
    <button type="submit">{status}</button>
   </FormStyle>
  </>
 )
}
