import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import {
  FaAngellist, FaTwitter, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';
import mail from '../../assets/skilsimgs/skillsection/email.png';
import mobile from '../../assets/skilsimgs/skillsection/mobile.png';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .send('service_jvbk5b4', 'template_zbxydka', formData, 'XgZaqWBWHffgTBbd2')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset the form fields
      })
      .catch((error) => {
        console.error('FAILED...', error);
        // Handle error if needed
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      sendEmail();
    }, 2000);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsFormSubmitted(false);
        setShowForm(true);
      }, 4000);
    }
  }, [isFormSubmitted]);
  return (
    <>
      <hr className="new4" />
      <br />
      <h2 className="head-text">
        Get in
        <span className="about-header">Touch!</span>
      </h2>

      <ul className="icons-container">
        <li className="bannerIcon">
          <a href="https://www.linkedin.com/in/abdimulhin-yussuf" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="bannerIcon">
          <a href="https://github.com/AbdimulhinYussuf3675" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className="bannerIcon">
          <a href="https://twitter.com/abdimulhin" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li className="bannerIcon">
          <a href="https://wellfound.com/u/abdimulhin-yussuf" target="_blank" rel="noopener noreferrer">
            <FaAngellist />
          </a>
        </li>
      </ul>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={mail} alt="email" />
          <a href="mailto:adamabdimulhi.001@gmail.com" className="p-text">
            adamabdimulhi.001@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="phone" />
          <a href="tel:(+254) 718878917" className="p-text">
            (+254) 718878917
          </a>
        </div>
      </div>

      <div className="about-desc">
        <div className="p-contact para">
          <p>
            I&lsquo;d love if you reach out to me. Even if it&lsquo;s just to
            say &quot;Hey!&quot;. Don&lsquo;t hesitate! Drop me a line and I&lsquo;ll
            get back to you ASAP!:
          </p>
          <br />
          <p>
            You can use the form, For gig and other opportunities, begin your subject with
            {' '}
            <em>&quot;GIG&quot;</em>
          </p>

        </div>
      </div>

      {showForm && !isFormSubmitted && (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="form-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="form-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="form-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      )}

      {isFormSubmitted && (
        <div>
          <h3 className="head-text form-confirm">
            Thank you for your message! 🙏
            <br />
            I&lsquo;ll respond soon 🤝.
          </h3>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">@2023 Abdimulhin A.</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
