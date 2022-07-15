import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const FormStyle = styled.form`
  width: 100%;
 
  @media only screen and (max-width: 768px) {
    margin-top: -60px;
  }

  .form-group {
    margin-bottom: 2rem;
  }
  label {
    color: #010606;
    font-size: 1.2rem;
    width: 80px;
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
  button[type="submit"] {
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
  .error {
    color: #ff0000;
    font-size: 0.9rem;
  }
`;

export default function ContactForm() {
  const { t, i18n } = useTranslation("translation", { keyPrefix: 'Contact.ContactForm' });
  const translations = {
    nameError: t("nameError"),
    emailError: t("emailError"),
    emailNotValid: t("emailNotValid"),
    messageError: t("messageError"),
    wait: t("wait"),
    success: t("success"),
    error: t("error"),
    statusSend: t("statusSend"),
    statusSending: t("statusSending"),
    name: t("name"),
    placeholderName: t("placeholderName"),
    email: t("email"),
    placeholderEmail: t("placeholderEmail"),
    message: t("message"),
    placeholderMessage: t("placeholderMessage"),
  };
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [userError, setUserError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [status, setStatus] = useState(translations.statusSend);

  useEffect(() => {
    if (i18n) {
      setStatus(translations.statusSend);
    }
  }
  , [i18n, translations.statusSend]);
  
  const validateEmail = (email) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  };

  const validate = () => {
    let isValid = true;
    if (name === "") {
      setNameError(translations.nameError);
      isValid = false;
    } else {
      setNameError("");
    }
    if (user === "") {
      setUserError(translations.emailError);
      isValid = false;
    } else {
      if (!validateEmail(user)) {
        setUserError(translations.emailNotValid);
      } else {
        setUserError("");
      }
    }

    if (message === "") {
      setMessageError(translations.messageError);
      isValid = false;
    } else {
      setMessageError("");
    }
    return isValid;
  };
  const toastId = React.useRef(null);
  const notifyLoading = () => {
    toastId.current = toast.loading(translations.wait, {
      autoClose: false,
      closeButton: false, // Remove the closeButton
    });
  };

  const updateSuccess = () => {
    toast.update(toastId.current, {
      render: translations.success,
      type: "success",
      isLoading: false,
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Flip,
    });
  };

  const updateError = () => {
    toast.update(toastId.current, {
      render: translations.error,
      type: "error",
      isLoading: false,
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Flip,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      notifyLoading();
      setStatus(translations.statusSending);

      const { name, user, message } = e.target.elements;
      const details = {
        name: name.value,
        user: user.value,
        message: message.value,
      };
      emailjs
        .send(
          "service_m88jayg",
          "template_c05l9c4",
          details,
          "A1ex8DiA-BK1Cs2jb"
        )
        .then((_result) => {
          updateSuccess();
          setStatus(translations.statusSend);
        })
        .catch((error) => {
          updateError();
          setStatus(translations.statusSend);
        });
    }
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            {translations.name}
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder={translations.placeholderName}
              value={name}
              onChange={(e) => {
                const newName = e.target.value;
                if (nameError && newName) {
                  setNameError("");
                }
                setName(newName);
              }}
            />
          </label>
          {nameError ? <div className="error">{nameError}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="user">
            {translations.email}
            <input
              required
              type="email"
              id="user"
              name="user"
              placeholder={translations.placeholderEmail}
              value={user}
              onChange={(e) => {
                const newUser = e.target.value;
                if (userError && newUser) {
                  setUserError("");
                }
                setUser(newUser);
              }}
            />
          </label>
          {userError ? <div className="error">{userError}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="message">
            {translations.message}
            <textarea
              required
              type="text"
              id="message"
              name="message"
              placeholder={translations.placeholderMessage}
              value={message}
              onChange={(e) => {
                const newMessage = e.target.value;
                if (messageError && newMessage) {
                  setMessageError("");
                }
                setMessage(newMessage);
              }}
            />
          </label>
          {messageError ? <div className="error">{messageError}</div> : null}
        </div>
        <button type="submit">{status}</button>
      </FormStyle>
    </>
  );
}
