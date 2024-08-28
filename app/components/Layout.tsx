import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css'; // Import the CSS module

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About Me
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/api" className={styles.navLink}>
                API Page
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 John Murtha. All rights reserved.</p>
      </footer>
    </div>
  );
}
