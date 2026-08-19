import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import site from '../site.module.css';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About | Sweetwater IT',
  description:
    'Private equity, AI training and implementation, staffing, and recruitment for US companies.',
};

const offerings = [
  {
    eyebrow: 'Private Equity',
    copy: 'Work directly with CTOs and operating partners across portfolio companies to find where AI moves the needle.',
  },
  {
    eyebrow: 'AI Training and Implementation',
    copy: 'Work directly with operators and team leads to train people and implement AI in the tools they already use.',
  },
  {
    eyebrow: 'Staffing',
    copy: 'Work directly with hiring managers to place LATAM technology talent on US hours, on their team.',
  },
  {
    eyebrow: 'Recruitment',
    copy: 'Work directly with founders and department leads to run the search and land the hire.',
  },
] as const;

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
        <section className={`${styles.offerings} ${site.copy}`} aria-labelledby="about-title">
          <h1 id="about-title" className={styles.visuallyHidden}>
            Services
          </h1>
          {offerings.map((offering) => (
            <article className={styles.offering} key={offering.eyebrow}>
              <p className={styles.eyebrow}>{offering.eyebrow}</p>
              <p>{offering.copy}</p>
            </article>
          ))}
          <a className={`${site.contactButton} ${styles.contactButton}`} href="mailto:kenny.mack@sweetwaterit.com">
            Get in touch
          </a>
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
            <h3>Kenny Mack, Solutions Architect</h3>
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
