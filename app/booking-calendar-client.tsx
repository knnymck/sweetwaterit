'use client';

import { FormEvent, useMemo, useState } from 'react';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const TIMES = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatLong(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function BookingCalendarClient() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const items: { date: Date; muted: boolean; available: boolean }[] = [];

    for (let i = 0; i < startPad; i += 1) {
      const date = new Date(year, month, i - startPad + 1);
      items.push({ date, muted: true, available: false });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const weekday = date.getDay();
      const available = date >= today && weekday !== 0 && weekday !== 6;
      items.push({ date, muted: false, available });
    }

    while (items.length % 7 !== 0) {
      const last = items[items.length - 1].date;
      const date = new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
      items.push({ date, muted: true, available: false });
    }

    return items;
  }, [cursor, today]);

  const monthLabel = cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const showingDetails = Boolean(selectedDate && selectedTime);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) return;
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Requested time: ${formatLong(selectedDate)} at ${selectedTime} CST`,
      '',
      String(data.get('message') || ''),
    ].join('\n');

    window.location.href =
      'mailto:sales@sweetwaterit.com?subject=' +
      encodeURIComponent('Sweetwater IT — discovery call') +
      '&body=' +
      encodeURIComponent(body);
    setSent(true);
  };

  return (
    <section className="booking-section" id="book-a-call" data-screen-label="Book a call">
      <div className="shell">
        <div className="section-heading booking-heading">
          <span className="eyebrow">Discovery</span>
          <h2>Book a 30-minute call</h2>
          <p>Pick a weekday on US hours. We will confirm by email the same business day.</p>
        </div>

        {sent ? (
          <div className="booking-details-card">
            <div className="booking-details-summary">
              <h3>Request sent</h3>
              <p className="calendar-intro">
                Your mail client should be open. If not, write sales@sweetwaterit.com and we will lock the slot.
              </p>
            </div>
          </div>
        ) : showingDetails && selectedDate && selectedTime ? (
          <div className="booking-details-card">
            <div className="booking-details-summary">
              <h3>Confirm the call</h3>
              <p className="calendar-intro">30-minute intro on talent, applied AI, or both.</p>
              <div className="selected-slot">
                <span aria-hidden="true">◷</span>
                <strong>
                  {formatLong(selectedDate)} · {selectedTime} CST
                </strong>
              </div>
              <button className="change-time-button" type="button" onClick={() => setSelectedTime(null)}>
                Change time
              </button>
            </div>
            <form className="booking-details-fields" onSubmit={onSubmit}>
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
                What should we cover
                <textarea name="message" required />
              </label>
              <label className="consent-row">
                <input type="checkbox" name="consent" required />
                <span>You can email me to confirm this time.</span>
              </label>
              <button className="btn" type="submit">
                Request this time
              </button>
            </form>
          </div>
        ) : (
          <div className="calendar-card">
            <div className="calendar-profile">
              <div className="calendar-avatar" style={{ background: 'var(--accent)' }} />
              <p className="calendar-host">Sweetwater IT</p>
              <h3>Intro call</h3>
              <p className="calendar-intro">
                Role, culture, budget, and whether you need talent, applied AI, or both.
              </p>
              <ul className="calendar-meta-list">
                <li className="calendar-meta">
                  <span aria-hidden="true">◷</span>
                  <strong>30 min</strong>
                </li>
                <li className="calendar-meta">
                  <span aria-hidden="true">◎</span>
                  Texas (CST)
                </li>
                <li className="calendar-meta">
                  <span aria-hidden="true">✉</span>
                  sales@sweetwaterit.com
                </li>
              </ul>
            </div>

            <div className="calendar-month">
              <div className="calendar-month-bar">
                <h3>{monthLabel}</h3>
                <div className="calendar-arrows">
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="calendar-weekdays">
                {WEEKDAYS.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="calendar-grid">
                {cells.map(({ date, muted, available }) => {
                  const selected = selectedDate ? sameDay(date, selectedDate) : false;
                  const className = [
                    'calendar-day',
                    muted ? 'is-muted' : '',
                    available ? 'is-available' : '',
                    selected ? 'is-selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      className={className}
                      disabled={!available}
                      onClick={() => setSelectedDate(date)}
                    >
                      {date.getDate()}
                      {available ? <i /> : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="calendar-times">
              <div className="calendar-times-head">
                <h3>{selectedDate ? formatLong(selectedDate) : 'Pick a day'}</h3>
                <div className="time-toggle" aria-hidden="true">
                  <span>12h</span>
                  <span>24h</span>
                </div>
              </div>
              <div className="time-list">
                {TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={selectedTime === time ? 'is-selected' : undefined}
                    disabled={!selectedDate}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
