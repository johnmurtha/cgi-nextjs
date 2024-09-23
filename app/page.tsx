import Layout from './components/Layout';
import styles from './styles/Home.module.css';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
          <title>NextJS Technical Training</title>
          <meta name="description" content="CGI NextJS Technical Training" />
          
          {/* Open Graph Metadata */}
          <meta property="og:title" content="NextJS Technical Training" />
          <meta property="og:description" content="CGI NextJS Technical Training" />
          <meta property="og:image" content="/React.png" />
          <meta property="og:url" content="http://localhost:3000/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card Metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="NextJS Technical Training" />
          <meta name="twitter:description" content="CGI NextJS Technical Training" />
          <meta name="twitter:image" content="/React.png" />
          <meta name="twitter:url" content="http://localhost:3000/" />
        </Head>
      <Layout>
        <div className={styles.container}>
          <h1>Welcome to My Next.js App</h1>
        </div>
      </Layout>
    </>
  );
}
