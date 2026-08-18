import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import site from '../site.module.css';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — Sweetwater IT',
  description:
    'Staffing and applied AI. LATAM talent for US firms, and AI implementation that stays in the work.',
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
          <a href="mailto:kenny.mack@sweetwaterit.com">Contact</a>
        </nav>
      </header>

      <section className={`${styles.introduction} ${site.copy}`} aria-labelledby="about-title">
        <h1 id="about-title" className={`${site.title} ${styles.title}`}>
          Staffing and applied AI.
        </h1>
        <a className={`${site.contactButton} ${styles.contactButton}`} href="mailto:kenny.mack@sweetwaterit.com">
          Get in touch
        </a>
        <p className={`${site.lede} ${styles.lede}`}>
          LATAM talent for US firms, and AI implementation that stays in the work.
        </p>
      </section>

      <section className={`${styles.team} ${site.copy}`} aria-labelledby="team-title">
        <h2 id="team-title" className={styles.visuallyHidden}>
          Team
        </h2>
        <article className={styles.member}>
          <p className={styles.role}>Founder</p>
          <div className={styles.nameRow}>
            <Image
              className={styles.avatar}
              src="/images/ava1.jpg"
              alt=""
              width={40}
              height={40}
            />
            <h3>Kenny Mack, Applied AI Engineer</h3>
          </div>
          <a className={`${site.contactButton} ${styles.linkedIn}`} href="https://www.linkedin.com/in/knnymck/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </article>
      </section>
    </main>
  );
}
