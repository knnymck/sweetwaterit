import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — Sweetwater IT',
  description:
    'Sweetwater IT staffs LATAM talent and builds applied AI that stays in the work. Training, consulting, and staffing for US teams.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Sweetwater IT home">
          SWEETWATER<span>IT</span>
        </Link>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <Link href="/about" aria-current="page">
            About
          </Link>
          <a href="mailto:contact@sweetwaterit.com">Contact</a>
        </nav>
      </header>

      <div className={styles.body}>
        <p className={styles.verticalLabel}>About</p>

        <section className={styles.introduction} aria-labelledby="about-title">
          <h1 id="about-title">
            Sweetwater IT staffs LATAM talent and builds applied AI that stays in the work.
          </h1>
          <a className={styles.contactButton} href="mailto:contact@sweetwaterit.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <p>We offer training, consulting, and technical staffing for US teams on US hours.</p>
        </section>

        <section className={styles.team} aria-labelledby="team-title">
          <h2 id="team-title" className={styles.visuallyHidden}>
            Team
          </h2>
          <article className={styles.member}>
            <p className={styles.role}>Founder</p>
            <h3>Kenny Mack</h3>
            <a
              className={styles.linkedIn}
              href="https://www.linkedin.com/in/knnymck"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
