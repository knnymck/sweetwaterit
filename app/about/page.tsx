import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import site from '../site.module.css';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — Sweetwater IT',
  description:
    'Services: technology talent for US companies, and AI training that stays in the work.',
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

      <div className={styles.body}>
        <section className={`${styles.introduction} ${site.copy}`} aria-labelledby="about-title">
          <p className={styles.eyebrow}>Services</p>
          <h1 id="about-title" className={site.lede}>
            Technology talent for US companies, and AI training that stays in the work.
          </h1>
          <a className={`${site.contactButton} ${styles.contactButton}`} href="mailto:kenny.mack@sweetwaterit.com">
            Get in touch
          </a>
        </section>

        <section className={`${styles.services} ${site.copy}`} aria-label="What we do">
          <article className={styles.panel}>
            <header className={styles.panelHead}>
              <span className={styles.index}>01</span>
              <h2>Staffing</h2>
            </header>
            <ul className={styles.points}>
              <li>LATAM engineers, CAD, and operators</li>
              <li>US hours, US tools, US standups</li>
              <li>On your team — not a distant bench</li>
            </ul>
          </article>

          <article className={styles.panel}>
            <header className={styles.panelHead}>
              <span className={styles.index}>02</span>
              <h2>AI training</h2>
            </header>
            <ul className={styles.points}>
              <li>Applied AI in the tools you already run</li>
              <li>Workflows a team can keep after we leave</li>
              <li>Training that ships a system, not a deck</li>
            </ul>
          </article>
        </section>
      </div>

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
          <a
            className={`${site.contactButton} ${styles.linkedIn}`}
            href="https://www.linkedin.com/in/knnymck/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </article>
      </section>
    </main>
  );
}
