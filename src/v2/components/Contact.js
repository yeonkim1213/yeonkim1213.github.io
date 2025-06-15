import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import { emailConfig } from '../config/email';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      form.current,
      emailConfig.publicKey
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2><Mail className="icon" /> Contact</h2>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              required
              placeholder="Message"
              rows="5"
              className="form-input"
            />
          </div>
          <button type="submit" className="btn">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="error-message">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 