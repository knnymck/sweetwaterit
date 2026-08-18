import Image from 'next/image';
import ScrollHeaderState from './scroll-header-state';
import TalkFormClient from './talk-form-client';
import { BookingCalendarClient } from './booking-calendar-client';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top" aria-label="Sweetwater IT home">
            SWEETWATER<span>IT</span>
          </a>
          <input
            className="menu-toggle"
            type="checkbox"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          />
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#talent">Talent</a>
            <a href="#applied-ai">Applied AI</a>
            <a href="#about">About</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <a className="nav-cta" href="#book-a-call">
            Book a call
          </a>
          <label className="menu-button" htmlFor="mobile-menu-toggle" aria-label="Toggle navigation menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </label>
        </div>
      </header>
      <ScrollHeaderState />
      <main id="top">
        <section className="fold" id="reserve" data-screen-label="Above the fold">
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-copy reveal">
                <h1>
                  Hire the team. Make AI stick. LATAM technical talent on US clocks,
                  <br /> and applied AI that lives inside the work — not next to it.
                </h1>
                <div className="hero-actions" aria-label="Hero calls to action">
                  <a className="btn" href="#talk" data-anchor-cta="">
                    LET&apos;S TALK
                  </a>
                  <a className="btn btn-secondary" href="#talent" data-anchor-cta="">
                    SEE ROLES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-wall" aria-label="Technologies we work with">
          <div className="logo-wall-inner">
            <p className="eyebrow logo-wall-label">Technologies we work with</p>
            <div className="logo-wall-grid">
              <span className="logo-tile">
                <Image src="/img/techlogo/react-logo.png" alt="React" width={150} height={48} />
              </span>
              <span className="logo-tile">
                <Image src="/img/techlogo/nodejs-logo.png" alt="Node.js" width={150} height={48} />
              </span>
              <span className="logo-tile">
                <Image src="/img/techlogo/python-logo.png" alt="Python" width={150} height={48} />
              </span>
              <span className="logo-tile">
                <Image src="/img/techlogo/aws-logo.png" alt="AWS" width={150} height={48} />
              </span>
              <span className="logo-tile">
                <Image src="/img/techlogo/azure-logo.png" alt="Microsoft Azure" width={170} height={48} />
              </span>
              <span className="logo-tile">
                <Image
                  className="logo-image-preserve"
                  src="/img/techlogo/google-cloud-logo.png"
                  alt="Google Cloud"
                  width={150}
                  height={48}
                />
              </span>
              <span className="logo-tile">
                <Image
                  className="logo-image-preserve"
                  src="/img/techlogo/django-logo.png"
                  alt="Django"
                  width={170}
                  height={48}
                />
              </span>
            </div>
          </div>
        </section>

        <TalkFormClient />

        <section className="featured learn-section" id="talent" data-screen-label="Talent">
          <div className="shell learn-shell">
            <div className="featured-copy learn-copy">
              <span className="eyebrow">Staffing</span>
              <h2>LATAM technical talent, on your clock.</h2>
              <div className="learn-list">
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>Roles we staff</h3>
                    <p>
                      CAD designers, civil and structural engineers, estimators, software engineers, and
                      applied-AI talent — placed as an extension of your team.
                    </p>
                  </div>
                </div>
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>How a search runs</h3>
                    <p>
                      Call for role, culture, budget, and start date. Recruit and shortlist. Propose two or
                      three people you can actually hire. Onboard them to your hours, tools, and standups.
                    </p>
                  </div>
                </div>
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>Why it lands</h3>
                    <p>
                      US time-zone overlap, English-ready communication, and people who already work in North
                      American delivery culture. Houston-founded, LATAM-sourced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learn-visual">
              <img
                src="/img/datacenter_hero.jpg"
                alt="Technical delivery team at work"
                className="learn-visual-image"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="featured consulting-section" id="applied-ai" data-screen-label="Applied AI">
          <div className="shell consulting-shell">
            <div className="learn-visual consulting-visual">
              <img
                src="/img/developer.png"
                alt="Applied AI work inside an existing operating system"
                className="learn-visual-image"
                loading="lazy"
              />
            </div>
            <div className="featured-copy consulting-copy">
              <span className="eyebrow">Applied AI</span>
              <h2>AI inside the work, not next to it.</h2>
              <div className="prop-tag">Coach · train · build · staff</div>
              <p className="body">
                We coach leaders, train teams, and build agentic workflows in the tools you already run —
                then staff the talent who can keep that system alive after we leave.
              </p>
              <div className="sec-cta">
                <a className="btn" href="#book-a-call" data-anchor-cta="">
                  Book a call <span className="arr">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="about" data-screen-label="How we work">
          <div className="shell pricing-shell">
            <div className="section-heading">
              <span className="eyebrow">How we work</span>
              <h2>
                Two practices.
                <br />
                One standard.
              </h2>
              <p>People who fit your hours, your tools, and the job — whether you need capacity or applied AI.</p>
            </div>
            <div className="pricing-options">
              <input type="radio" id="pricing-monthly" name="pricing-plan" defaultChecked />
              <input type="radio" id="pricing-project" name="pricing-plan" />
              <div className="pricing-toggle" aria-label="Engagement options">
                <label htmlFor="pricing-monthly">Talent search</label>
                <label htmlFor="pricing-project">Applied AI</label>
              </div>
              <div className="pricing-panel monthly-panel">
                <div className="pricing-benefits">
                  <ul>
                    <li>Call — role, culture, budget, start date.</li>
                    <li>Recruit — screen, interview, and shortlist.</li>
                    <li>Propose — two or three people you can actually hire.</li>
                    <li>Onboard — they join your hours, tools, and standups.</li>
                    <li>Bilingual, US-hours overlap, vetted for the work — not a distant vendor bench.</li>
                  </ul>
                  <p>For US and Canadian teams that need capacity now.</p>
                  <span className="pricing-note">Location and time: Houston · LATAM · US hours</span>
                </div>
                <article className="pricing-card">
                  <div className="availability">
                    <span aria-hidden="true" />
                    Open for new searches
                  </div>
                  <h3>Staff a role</h3>
                  <p>
                    CAD, civil, structural, estimating, software, and applied-AI people placed on your team.
                  </p>
                  <div className="pricing-rule" />
                  <div className="price">Request talent</div>
                  <a className="btn" href="#talk" data-anchor-cta="">
                    REQUEST TALENT
                  </a>
                </article>
              </div>
              <div className="pricing-panel project-panel">
                <div className="pricing-benefits">
                  <ul>
                    <li>Coach founders and operators on live work.</li>
                    <li>Train teams so the habits stick after the session.</li>
                    <li>Build intake agents, knowledge layers, and document flow.</li>
                    <li>Staff the people who run the system after we leave.</li>
                  </ul>
                  <p>Ideal when AI has to live in the weekly work.</p>
                  <span className="pricing-note">Location and time: Houston · LATAM · US hours</span>
                </div>
                <article className="pricing-card">
                  <div className="availability">
                    <span aria-hidden="true" />
                    Intro calls this month
                  </div>
                  <h3>Make AI stick</h3>
                  <p>Teach it. Build it. Staff it — inside the tools you already run.</p>
                  <div className="pricing-rule" />
                  <div className="price">Book an intro</div>
                  <a className="btn" href="#book-a-call" data-anchor-cta="">
                    START A PROJECT
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faqs" data-screen-label="FAQ">
          <div className="shell faq-shell">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
            <div className="faq-list">
              <details>
                <summary>What roles do you staff?</summary>
                <p>
                  CAD designers, civil engineers, structural designers, estimators, software engineers, and
                  applied / agentic AI talent for US and Canadian teams.
                </p>
              </details>
              <details>
                <summary>Are people on our hours?</summary>
                <p>
                  Yes. We staff LATAM talent onto US clocks — same standups, same tools, same delivery
                  culture. Founded in Texas in 2017.
                </p>
              </details>
              <details>
                <summary>What does applied AI actually mean here?</summary>
                <p>
                  Coach, train, build, and staff. Intake and triage agents, meeting-to-action flow, knowledge
                  layers, document generation, and the people who keep those systems alive.
                </p>
              </details>
              <details>
                <summary>Can you work with our existing tools?</summary>
                <p>
                  Yes. We design around your current systems and identify practical integrations that improve
                  daily operations without unnecessary tool sprawl.
                </p>
              </details>
              <details>
                <summary>Who is this not for?</summary>
                <p>
                  Generic AI lectures. Offshore talent that ghosts your standups. Extra tools you have to buy
                  to make the last tool work.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="reprompt" data-screen-label="Closing CTA">
          <div className="shell">
            <div className="reprompt-inner">
              <div>
                <h2>Ready to hire the team or make AI stick?</h2>
                <p>
                  Book a 30-minute call to discuss the role, the work, and the right next step — talent,
                  applied AI, or both.
                </p>
              </div>
              <a className="btn" href="#book-a-call" data-anchor-cta="">
                BOOK A CALL
              </a>
            </div>
          </div>
        </section>

        <BookingCalendarClient />

        <footer className="site-footer" data-screen-label="Footer">
          <div className="shell footer-bottom">
            <div className={`footer-social ${styles.footerSocialRight}`} aria-label="Contact">
              <a href="mailto:contact@sweetwaterit.com" aria-label="Email">
                @
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>
          <div className="shell footer-credit">© Sweetwater IT 2026 · 2700 Post Oak Blvd, Houston, TX</div>
        </footer>
      </main>
      <div className="stickybar" aria-hidden="true">
        <a className="btn" href="#talk" data-anchor-cta="">
          Let’s talk
        </a>
      </div>
    </>
  );
}
