'use client';

import { FormEvent, useState } from 'react';

export default function TalkFormClient() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const need = String(data.get('need') || '');
    const message = String(data.get('message') || '');
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Need: ${need}`,
      '',
      message,
    ].join('\n');

    window.location.href =
      'mailto:sales@sweetwaterit.com?subject=' +
      encodeURIComponent(`Sweetwater IT — ${need}`) +
      '&body=' +
      encodeURIComponent(body);
    setSent(true);
  };

  return (
    <section className="webinar" id="talk" data-screen-label="Talk">
      <div className="shell webinar-shell">
        <div className="webinar-copy">
          <span className="eyebrow webinar-eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Houston · LATAM · US hours
          </span>
          <h2>Tell us what you need.</h2>
          <p className="body">
            Talent, applied AI, or both. We reply within one business day — on your time zone.
          </p>
          <div className="speaker-row">
            <div className="speaker-item">
              <span className="speaker-avatar">SW</span>
              <div>
                <strong>Staffing</strong>
                <span>CAD, civil, structural, estimators, software</span>
              </div>
            </div>
            <div className="speaker-item">
              <span className="speaker-avatar">AI</span>
              <div>
                <strong>Applied AI</strong>
                <span>Coach, train, build, and staff the people who keep it</span>
              </div>
            </div>
          </div>
        </div>

        {sent ? (
          <div className="webinar-card confirm-card" style={{ display: 'block' }}>
            <span className="eyebrow">Sent</span>
            <h3>Your mail client should be open.</h3>
            <p>If nothing appeared, write us directly at sales@sweetwaterit.com.</p>
          </div>
        ) : (
          <form className="webinar-card" onSubmit={onSubmit} id="talk-form">
            <div className="field-grid">
              <label>
                Name
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Company
              <input type="text" name="company" autoComplete="organization" />
            </label>
            <label>
              I need
              <select name="need" defaultValue="Talent" required>
                <option value="Talent">Talent</option>
                <option value="Applied AI">Applied AI</option>
                <option value="Both">Both</option>
              </select>
            </label>
            <label>
              What should we know
              <input type="text" name="message" required />
            </label>
            <label className="consent-row">
              <input type="checkbox" name="consent" required />
              <span>You can reach me about this request. We do not sell contact details.</span>
            </label>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
