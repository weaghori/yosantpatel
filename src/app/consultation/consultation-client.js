"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ConsultationModal from '../../components/ConsultationModal';

const CalendarWidget = ({ onDateSelect, onScheduleClick }) => {
  // Use a fixed date for initial render to prevent hydration mismatch
  const [date, setDate] = useState(new Date(2025, 8, 1)); // Default to Sept 2025 for SSR
  const [selectedDate, setSelectedDate] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDate(new Date()); // Set to current date after mounting
  }, []);

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
            if (onDateSelect) onDateSelect(newSelected);
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
      <button className="schedule-btn" onClick={onScheduleClick}>
        Schedule a free consultation
      </button>

      {/* Global CSS style block for Calendar layout */}
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

export default function ConsultationClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Premium Hero Header Section */}
      <section style={{
        position: 'relative',
        height: isMobile ? '280px' : '550px',
        backgroundImage: "url('/images/slider/About-Kahani-Yosant-Patel.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Dark Overlay for Hero text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 15, 30, 0.4)',
          zIndex: 1
        }} />

        {/* Hero Caption Lockup */}
        <div className="row" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="column width-12" style={{ textAlign: 'left' }}>
            <h1 style={{
              fontSize: isMobile ? '30px' : '64px',
              fontWeight: '800',
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-1.5px',
              lineHeight: '1.15',
              fontFamily: 'inherit'
            }}>
              Consultation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <div className="section-block content-inner bkg-white">
        <div className="container">
          <div className="row">
            <div className="column width-6">
              <h3><b>Ready to elevate your business?</b><br />Let's Connect!</h3>
              
              <div className="row inner-row" style={{ marginTop: '40px' }}>
                <div className="column width-12">
                  <div className="contact-card">
                    <div className="icon-box">
                      <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h4 className="weight-bold no-margin-bottom">WHAT TO EXPECT</h4>
                      <p>In this free 30-minute deep-dive session, we will audit your brand presence, identify key market opportunities, and map out a strategic growth plan.</p>
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
                      <h4 className="weight-bold no-margin-bottom">GET IN TOUCH</h4>
                      <p><a href="mailto:iam@yosantpatel.com">iam@yosantpatel.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column width-6">
              <CalendarWidget 
                onDateSelect={(date) => {
                  setModalDate(date);
                  setIsModalOpen(true);
                }}
                onScheduleClick={() => {
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={modalDate}
      />

      {/* Global CSS styles for layout consistency */}
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
