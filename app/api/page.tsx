"use client";

import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import styles from './Api.module.css'; // Import the CSS module

interface NasaData {
  title: string;
  explanation: string;
  url: string;
  date: string;
}

export default function ApiPage() {
  const [data, setData] = useState<NasaData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      const data: NasaData = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>NASA Picture of the Day</h1>
        {data ? (
          <div className={styles.grid}>
            <img src={data.url} alt={data.title} className={styles.image} />
            <div className={styles.details}>
              <h2>{data.title}</h2>
              <p>{data.explanation}</p>
              <p><strong>Date:</strong> {data.date}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
