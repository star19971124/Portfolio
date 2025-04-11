"use client"

import React, {useState, useEffect, useRef} from 'react'
import {InputValidator} from "@/utils/inputValidator"
import FormButton from "@/app/components/formButton";

function ContactForm() {
    const [state, setState] = useState({isLoading: false, isValid: false, msgSent: false})

    // Crea i ref per gli input
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    const submitBtnRef = useRef(null)
    const emailErrorRef = useRef(null)

    useEffect(() => {
            const checkFormValidity = () => {
                console.log('validating form')
                const nameInput = nameRef.current
                const emailInput = emailRef.current
                const messageInput = messageRef.current

                const isValid = nameInput.value.trim() !== '' && InputValidator.isValidMail(emailInput.value) && messageInput.value.trim() !== ''
                console.log('form is valid?', isValid)
                setState(prevState => {
                    return ({...prevState, isValid: isValid});
                })
            }

            const handleEmailChange = (e) => {
                const emailInput = e.target
                const isValidEmail = InputValidator.isValidMail(emailInput.value)
                isValidEmail ? emailErrorRef.current.classList.add('hidden') : emailErrorRef.current.classList.remove('hidden')
                checkFormValidity()
            }

            const form = document.getElementById('contact-form')
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    setState(prevState => {
                        return ({...prevState, isLoading: true});
                    })
                    console.log('Form submitted', {
                        name: nameRef.current.value, email: emailRef.current.value, message: messageRef.current.value
                    })
                    fetch('api/contact', {
                        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                            name: nameInput.value.trim(),
                            email: emailInput.value.trim(),
                            message: messageInput.value.trim(),
                        })
                    }).then(async res => console.log(await res.text()))
                        .then(json => console.log(json))
                        .catch(e => console.error(e))
                })
            }

            // Aggiungi gli event listeners per il controllo della validità
            const nameInput = nameRef.current
            const messageInput = messageRef.current
            const emailInput = emailRef.current

            nameInput.addEventListener('input', checkFormValidity)
            messageInput.addEventListener('input', checkFormValidity)
            emailInput.addEventListener('input', handleEmailChange)

            return () => {
                // Rimuovi gli event listeners al momento della dismount
                nameInput.removeEventListener('input', checkFormValidity)
                messageInput.removeEventListener('input', checkFormValidity)
                emailInput.removeEventListener('input', handleEmailChange)

                if (form) {
                    form.removeEventListener('submit', (e) => e.preventDefault())
                }
            }
        }

        , [])
    console.log('state in form is', state)
    return (<form id="contact-form">
        <h2 className="footer-title text-xl lg:text-2xl flex items-center">Get in touch</h2>
        <label className="form-control ">
            <div className="label">
                <span className="label-text text-lg">Name</span>
            </div>
            <input ref={nameRef} type="text"
                   className="input input-bordered input-md input-primary w-full" disabled={state.isLoading}/>
        </label>
        <label className="form-control">
            <div className="label">
                <span className="label-text text-lg">Email</span>
            </div>
            <input ref={emailRef} type="email"
                   className="input validator input-bordered input-md input-primary w-full"
                   disabled={state.isLoading}/>
            <div className="label">
          <span ref={emailErrorRef} className="label-text-alt hidden text-error">
            Enter valid email address
          </span>
            </div>
        </label>
        <label className="form-control">
            <div className="label">
                <span className="label-text text-lg">Message</span>
            </div>
            <textarea ref={messageRef} className="textarea textarea-primary h-24 w-full"
                      disabled={state.isLoading}></textarea>
        </label>
        <input type="text" name="faxNumber" className="hidden" autoComplete="off" tabIndex="-1" aria-hidden="true"/>
        <FormButton state={state} submitRef={submitBtnRef}/>
    </form>)
}

export default ContactForm