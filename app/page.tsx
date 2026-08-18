import Image from 'next/image';
import Link from 'next/link';
import site from './site.module.css';
import styles from './page.module.css';

const technologies = [
  ['/img/techlogo/react-logo.png', 'React', 150],
  ['/img/techlogo/nodejs-logo.png', 'Node.js', 150],
  ['/img/techlogo/python-logo.png', 'Python', 150],
  ['/img/techlogo/aws-logo.png', 'AWS', 150],
  ['/img/techlogo/azure-logo.png', 'Microsoft Azure', 170],
  ['/img/techlogo/google-cloud-logo.png', 'Google Cloud', 150],
  ['/img/techlogo/django-logo.png', 'Django', 170],
] as const;

export default function Home() {
  return (
    <main className={site.page}>
      <header className={site.header}>
        <Link className={site.wordmark} href="/" aria-label="Sweetwater IT home">
          SWEETWATER<span>IT</span>
        </Link>
        <nav className={site.navigation} aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <a href="mailto:contact@sweetwaterit.com">Contact</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <p className={styles.kicker}>Texas · 2017 · LATAM · US clocks</p>
        <h1 id="hero-title" className={`${site.title} ${styles.title}`}>
          Hire the team. Make AI stick.
        </h1>
        <p className={site.lede}>
          We staff LATAM technical talent into US firms, and we teach, consult, and staff applied
          and agentic AI — on your time zone.
        </p>
        <a className={site.contactButton} href="mailto:contact@sweetwaterit.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className={styles.technologies} aria-label="Technologies we work with">
        <p>Technologies we work with</p>
        <div className={styles.logoViewport}>
          <div className={styles.logoTrack}>
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className={styles.logoSet}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {technologies.map(([src, alt, width]) => (
                  <span className={styles.logoTile} key={`${copy}-${src}`}>
                    <Image src={src} alt={copy === 0 ? alt : ''} width={width} height={48} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
