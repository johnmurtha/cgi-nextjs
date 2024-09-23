"use client";

import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

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
      <div style={styles.container}>
        <h1 style={styles.title}>NASA Picture of the Day</h1>
        {data ? (
          <div style={styles.grid}>
            <img src={data.url} alt={data.title} style={styles.image} />
            <div style={styles.details}>
              <h2 style={styles.subtitle}>{data.title}</h2>
              <p style={styles.paragraph}>{data.explanation}</p>
              <p style={styles.date}><strong>Date:</strong> {data.date}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#000000'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  details: {
    padding: '10px',
    color: '#000000'
  },
  subtitle: {
    fontSize: '1.75rem',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  date: {
    fontSize: '1rem',
    color: 'grey',
  },
};
