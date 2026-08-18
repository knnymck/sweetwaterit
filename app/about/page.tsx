import type { Metadata } from 'next';
import Link from 'next/link';
import site from '../site.module.css';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — Sweetwater IT',
  description:
    'Sweetwater IT staffs LATAM technical talent into US firms, and teaches, consults, and staffs applied and agentic AI — on your time zone.',
};

export default function AboutPage() {
  return (
    <main className={site.page}>
      <header className={site.header}>
        <Link className={site.wordmark} href="/" aria-label="Sweetwater IT home">
          SWEETWATER<span>IT</span>
        </Link>
        <nav className={site.navigation} aria-label="Primary navigation">
          <Link href="/about" aria-current="page">
            About
          </Link>
          <a href="mailto:contact@sweetwaterit.com">Contact</a>
        </nav>
      </header>

      <section className={styles.introduction} aria-labelledby="about-title">
        <h1 id="about-title" className={`${site.title} ${styles.title}`}>
          Hire the team. Make AI stick.
        </h1>
        <a className={`${site.contactButton} ${styles.contactButton}`} href="mailto:contact@sweetwaterit.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <p className={`${site.lede} ${styles.lede}`}>
          We staff LATAM technical talent into US firms, and we teach, consult, and staff applied
          and agentic AI — on your time zone.
        </p>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <h2 id="team-title" className={styles.visuallyHidden}>
          Team
        </h2>
        <article className={styles.member}>
          <p className={styles.role}>Founder</p>
          <h3>Kenny Mack</h3>
          <a className={styles.linkedIn} href="https://linkedin.com/knnymck" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>
    </main>
  );
}
