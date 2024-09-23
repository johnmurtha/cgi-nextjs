import Layout from '../components/Layout';
import AboutForm from '../components/AboutForm'; // Client Component
import styles from './About.module.css'; // Import the CSS module

export default function AboutPage() {
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
        <AboutForm />
      </div>
    </Layout>
  );
}
