"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const CalendarWidget = () => {
  // Use a fixed date for initial render to prevent hydration mismatch
  const [date, setDate] = useState(new Date(2025, 8, 1)); // Default to Sept 2025 for SSR
  const [selectedDate, setSelectedDate] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDate(new Date()); // Set to current date after mounting
  }, []);

  const redirectToAghori = () => {
    const url = "https://aghori.club/yosant-patel/consultancy";
    window.open(url, '_blank');
  };

  const renderCalendar = () => {
    if (!mounted) return null;

    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const calendarDays = [];

    daysOfWeek.forEach((day, index) => {
      calendarDays.push(<div key={`header-${index}`} className="calendar-day header">{day}</div>);
    });

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`pad-${i}`} className="calendar-day disabled"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && 
                         day === selectedDate.getDate() && 
                         month === selectedDate.getMonth() && 
                         year === selectedDate.getFullYear();
      
      calendarDays.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-day ${isSelected ? 'active' : ''}`}
          onClick={() => {
            const newSelected = new Date(year, month, day);
            setSelectedDate(newSelected);
            redirectToAghori();
          }}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const changeMonth = (offset) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + offset);
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)} id="prevMonth">&lt;</button>
        <h2 id="monthYear">
          {mounted ? date.toLocaleString("default", { month: "long" }) : "September"} {mounted ? date.getFullYear() : "2025"}
        </h2>
        <button onClick={() => changeMonth(1)} id="nextMonth">&gt;</button>
      </div>
      <div className="calendar-grid" id="calendarGrid">
        {renderCalendar()}
      </div>
      <button className="schedule-btn" onClick={redirectToAghori}>
        Schedule a free consultation
      </button>

      {/* Use a global style to avoid styled-jsx hydration mismatches with dynamic classes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .calendar-container {
          background: #f4f4f4;
          padding: 30px;
          border-radius: 5px;
          width: 100%;
          margin: 0 auto;
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .calendar-header h2 {
          font-size: 1.5rem !important;
          margin: 0 !important;
          font-weight: bold !important;
        }
        .calendar-header button {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px 10px;
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
          margin-bottom: 20px;
        }
        .calendar-day {
          padding: 10px;
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
          transition: background 0.3s;
          font-size: 14px;
        }
        .calendar-day:hover:not(.disabled):not(.header) {
          background: #e0e0e0;
        }
        .calendar-day.header {
          font-weight: bold;
          cursor: default;
          color: #333;
        }
        .calendar-day.active {
          background: #1f3d73;
          color: #fff;
        }
        .calendar-day.disabled {
          color: #ccc;
          cursor: default;
        }
        .schedule-btn {
          width: 100%;
          padding: 15px;
          background: #1f3d73;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .schedule-btn:hover {
          background: #2a5298;
        }
      `}} />
    </div>
  );
};

export default function Contact() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      {/* Full Width Slider Section */}
      <section className="section-block featured-media page-intro tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit style={{ backgroundImage: "url('/images/slider/slide-2-page-intro.jpg')" }}>
              <div className="tms-content">
                <div className="tms-content-inner left">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Contact
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img data-src="/images/slider/slide-2-page-intro.jpg" data-retina src="/images/blank.png" alt="" />
            </li>
          </ul>
        </div>
      </section>

      <div className="section-block content-inner bkg-white">
        <div className="container">
          <div className="row">
            <div className="column width-6">
              <h3><b>Are you ready to transform your brand?</b><br />Let’s Connect!</h3>
              
              <div className="row inner-row" style={{ marginTop: '40px' }}>
                <div className="column width-12">
                  <div className="contact-card">
                    <div className="icon-box">
                      <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h4 className="weight-bold no-margin-bottom">OFFICE</h4>
                      <p>204, Vaishali Shopping Center, Next to Natraj Market, S.V.Road, Malad West, Mumbai, 400064.</p>
                    </div>
                  </div>
                </div>
                
                <div className="column width-12" style={{ marginTop: '20px' }}>
                  <div className="contact-card">
                    <div className="icon-box">
                      <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h4 className="weight-bold no-margin-bottom">GET IN TOUCH WITH ME</h4>
                      <p><a href="mailto:iam@yosantpatel.com">iam@yosantpatel.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column width-6">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: #1f3d73;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          flex-shrink: 0;
        }
        .contact-svg {
          width: 24px;
          height: 24px;
        }
        .card-content h4 {
          font-size: 1rem;
          letter-spacing: 1px;
          color: #333;
        }
        .card-content p {
          margin-top: 5px;
          color: #666;
          font-size: 14px;
        }
      `}} />
    </>
  );
}
