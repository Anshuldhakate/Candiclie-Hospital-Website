import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const toast = useToast();

  // Function to handle input change and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const getInTouch = (e) => {
    e.preventDefault();

    // Check for required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    setErrorMessage('');

    // Show success toast message
    toast({
      title: "Form Submitted.",
      description: "We have received your message and will get back to you shortly.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
      onCloseComplete: () => {
        window.location.href = '/';
      }
    });

    // Clear form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Email, call, or complete the form to learn how we can help you.</p>
          <p><strong>Email:</strong> info@forevercare.com</p>
          <p><strong>Phone:</strong> 321-221-231</p>
          <a href="#support">Customer Support</a>

          <div className="extra-info">
            <div>
              <h3>Customer Support</h3>
              <p>Our support team is available around the clock to address your concerns.</p>
            </div>
            <div>
              <h3>Feedback and Suggestions</h3>
              <p>We value your feedback to continuously improve our services.</p>
            </div>
            <div>
              <h3>Media Inquiries</h3>
              <p>For media-related questions, please reach out to media@forevercare.com.</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={getInTouch}>
            <div className="input-row">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-row">
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Submit</button>
          </form>
          <p>
            By contacting us, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
