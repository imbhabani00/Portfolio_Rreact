import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const [done, setDone] = useState(false); // State to manage the success message display
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c42o5c4',
        'template_udou2x8',
        form.current,
        'ZrCBffu6P5RuV3bYr'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true); // Set done to true on successful contact
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form" id='Contact'>
        <div className="c-left">
          <div className="awesome">
            <span>Get in touch</span>
            <br />
            <span>Contact Me!!!</span>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user-name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user-email"
              className="user"
              placeholder="Email"
            />
            <textarea
              name="Message"
              className="user"
              placeholder="Message"
            />
            <input type="submit" value="Send" className="button" />
            <br />
            {done && <span style={{ marginLeft: '3rem' }}>Thanks for contacting Mr Mishra!!!</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
