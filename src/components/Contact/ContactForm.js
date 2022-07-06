import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  min-height: 300px;
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
  transition: 0.3s ease-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
   transition: 0.3s ease-out;
   background-color: #a32eff;
  }
 }
`

export default function ContactForm() {
 const [name, setName] = useState('')
 const [user, setUser] = useState('')
 const [message, setMessage] = useState('')
 const [status, setStatus] = useState('Send')

 const toastId = React.useRef(null)
 const notifyLoading = () => {
  toastId.current = toast.loading('Please wait...', {
   autoClose: false,
   closeButton: false, // Remove the closeButton
  })
 }

 const updateSuccess = () => {
  toast.update(toastId.current, {
   render: 'Success! 😊',
   type: 'success',
   isLoading: false,
   position: 'bottom-left',
   autoClose: 4000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   transition: Flip,
  })
 }

 const updateError = () => {
  toast.update(toastId.current, {
   render: 'Error, try again later 🙁',
   type: 'error',
   isLoading: false,
   position: 'bottom-left',
   autoClose: 4000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   transition: Flip,
  })
 }

 const handleSubmit = async (e) => {
  e.preventDefault()
  notifyLoading()
  setStatus('Sending...')

  const { name, user, message } = e.target.elements
  const details = {
   name: name.value,
   user: user.value,
   message: message.value,
  }
  emailjs
   .send('service_m88jayg', 'template_c05l9c4', details, 'A1ex8DiA-BK1Cs2jb')
   .then((_result) => {
    updateSuccess()
    setStatus('Send')
   })
   .catch((error) => {
    updateError()
    setStatus('Send')
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
