"use client";

import Layout from '../components/Layout';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './About.module.css'; // Import the CSS module

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function About() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSent(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 500); // Simulate a slight delay
  };

  const handleReset = () => {
    setFormState({
      name: '',
      email: '',
      message: '',
    });
    setIsSent(false); // Reset the sent message
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Me</h1>
        <img
          src="/about/me.png"
          alt="Picture Of Me"
          className={styles.profileImage}
        />
        <div className={styles.details}>
          <h2>John Murtha</h2> {/* Replace with actual name */}
          <p>University/College: Liberty University</p>
          <p>Interesting Fact: I enjoy fishing and playing video games in my free time</p>
          <p>Time at CGI: 2 years</p>
        </div>

        <div className={styles.contactForm}>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
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
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit">Send</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>

        {isSent && (
          <p className={styles.sentMessage}>Sent!</p>
        )}
      </div>
    </Layout>
  );
}
