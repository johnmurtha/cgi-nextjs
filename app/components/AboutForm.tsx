"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../about/About.module.css'; // Import the CSS module

interface formData {
  name: string;
  email: string;
  message: string;
}

export default function AboutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus(null);

    try {
      const response = await fetch('/about/api/fakeSendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === 'Sent') {
        setStatus('sent');
      }
    } catch (error) {
      console.error('Error sending message', error);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setStatus(null);
  };

  return (
        <div className={styles.contactForm}>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit">Send</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </div>
          </form>
          {status === 'sent' && <p className={styles.sentMessage}>Sent</p>}
          {status === 'error' && <p className={styles.badMessage}>Failed to send the message. Try again!</p>}
      </div>
  );
}