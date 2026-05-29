"use client";
import { useState, useEffect } from 'react';
import Script from 'next/script';

const RECAPTCHA_SITE_KEY = "6LcRzfgsAAAAAAXSGljZN5vB3-54x1AG0D3nAwc6";

const STEPS = ['Personal Info', 'Project Details', 'Review'];

export default function ConsultationModal({ isOpen, onClose, selectedDate }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', city: '', occupation: '',
    services: [], budget: '', businessDetails: '', inquiryDetails: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setErrors({});
    setStep(p => Math.min(p + 1, 3));
  };
  const handleBack = () => setStep(p => Math.max(p - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Execute Google reCAPTCHA v3
      const token = await new Promise((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error('reCAPTCHA not loaded'));
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'submit'}).then(resolve).catch(reject);
        });
      });

      const response = await fetch('/submit-consultation.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          selectedDate: selectedDate ? selectedDate.toISOString() : undefined,
          'g-recaptcha-response': token
        })
      });

      let result;
      try {
        result = await response.json();
      } catch (e) {
        throw new Error('Server returned an invalid response (might be blocked by a firewall).');
      }

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        alert('Failed to send request: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const set = (name, value) => {
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const toggleService = (srv) => {
    setFormData(p => ({
      ...p,
      services: p.services.includes(srv) ? p.services.filter(s => s !== srv) : [...p.services, srv]
    }));
    if (errors.services) setErrors(p => ({ ...p, services: undefined }));
  };

  const services = ['Graphic Design', 'Branding', 'Web Development', 'Digital Marketing', 'Social Marketing', 'Other'];
  const budgets = ['20–50k', '50k–1L', '1–5L'];

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      <div id="consultation-overlay" className="cm-overlay" onClick={onClose}>
        <div className="cm-modal" onClick={e => e.stopPropagation()}>

        {/* Left accent panel */}
        <div className="cm-panel">
          <div className="cm-panel-inner">
            <div className="cm-brand">Yosant Patel</div>
            <h3 className="cm-panel-title">Book a Free Consultation</h3>
            {selectedDate && (
              <div className="cm-date-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {selectedDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
              </div>
            )}
            <div className="cm-steps-list">
              {STEPS.map((label, i) => (
                <div key={i} className={`cm-step-row ${step === i + 1 ? 'cm-step-active' : ''} ${step > i + 1 ? 'cm-step-done' : ''}`}>
                  <div className="cm-step-dot">
                    {step > i + 1
                      ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      : i + 1}
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form area */}
        <div className="cm-form-area">
          <button className="cm-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', pointerEvents: 'none' }}>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="3" />
            </svg>
          </button>

          {/* Progress bar */}
          <div className="cm-progress-bar">
            <div className="cm-progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>

          <div className="cm-scroll-area">

            {isSuccess ? (
              <div className="cm-pane cm-success-pane" key="success">
                <div className="cm-success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h2 className="cm-form-title">Request Submitted!</h2>
                <p className="cm-form-sub" style={{ textAlign: 'center' }}>We have received your details and will reach out to you shortly.</p>
                <div className="cm-actions" style={{ justifyContent: 'center', marginTop: '30px' }}>
                  <button className="cm-btn-primary" onClick={() => {
                    onClose();
                    setTimeout(() => {
                      setIsSuccess(false);
                      setStep(1);
                      setFormData({ fullName: '', email: '', phone: '', city: '', occupation: '', services: [], budget: '', businessDetails: '', inquiryDetails: '' });
                    }, 300);
                  }}>Done</button>
                </div>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="cm-pane" key="step1">
                    <p className="cm-step-label">Step 1 of 3</p>
                <h2 className="cm-form-title">Personal Information</h2>
                <p className="cm-form-sub">Tell us a bit about yourself so we can personalise your consultation.</p>

                <div className="cm-fields">
                  <div className="cm-field-row">
                    <div className="cm-field">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Alex Johnson" value={formData.fullName} onChange={e => set('fullName', e.target.value)} className={errors.fullName ? 'cm-error-input' : ''} />
                      {errors.fullName && <span className="cm-error-text">{errors.fullName}</span>}
                    </div>
                    <div className="cm-field">
                      <label>Email *</label>
                      <input type="email" placeholder="alex@email.com" value={formData.email} onChange={e => set('email', e.target.value)} className={errors.email ? 'cm-error-input' : ''} />
                      {errors.email && <span className="cm-error-text">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="cm-field-row">
                    <div className="cm-field">
                      <label>Phone *</label>
                      <input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={e => set('phone', e.target.value)} className={errors.phone ? 'cm-error-input' : ''} />
                      {errors.phone && <span className="cm-error-text">{errors.phone}</span>}
                    </div>
                    <div className="cm-field">
                      <label>City</label>
                      <input type="text" placeholder="Mumbai" value={formData.city} onChange={e => set('city', e.target.value)} />
                    </div>
                  </div>
                  <div className="cm-field">
                    <label>Occupation</label>
                    <input type="text" placeholder="e.g. Business Owner, Designer…" value={formData.occupation} onChange={e => set('occupation', e.target.value)} />
                  </div>
                </div>

                <div className="cm-actions">
                  <button className="cm-btn-primary" onClick={handleNext}>Continue &rarr;</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="cm-pane" key="step2">
                <p className="cm-step-label">Step 2 of 3</p>
                <h2 className="cm-form-title">Project Details</h2>
                <p className="cm-form-sub">Help us understand the scope of your project.</p>

                <div className="cm-fields">
                  <div className="cm-field">
                    <label>Services Needed *</label>
                    <div className="cm-chip-group">
                      {services.map(s => (
                        <button key={s} className={`cm-chip ${formData.services.includes(s) ? 'on' : ''} ${errors.services ? 'cm-error-chip' : ''}`} onClick={() => toggleService(s)}>{s}</button>
                      ))}
                    </div>
                    {errors.services && <span className="cm-error-text">{errors.services}</span>}
                  </div>

                  <div className="cm-field">
                    <label>Budget Range *</label>
                    <div className="cm-chip-group">
                      {budgets.map(b => (
                        <button key={b} className={`cm-chip ${formData.budget === b ? 'on' : ''} ${errors.budget ? 'cm-error-chip' : ''}`} onClick={() => set('budget', b)}>{b}</button>
                      ))}
                    </div>
                    {errors.budget && <span className="cm-error-text">{errors.budget}</span>}
                  </div>

                  <div className="cm-field">
                    <label>About Your Business</label>
                    <textarea placeholder="Briefly describe your business and goals…" rows="3" value={formData.businessDetails} onChange={e => set('businessDetails', e.target.value)} />
                  </div>

                  <div className="cm-field">
                    <label>Inquiry Details</label>
                    <textarea placeholder="Any specific requirements or questions?" rows="3" value={formData.inquiryDetails} onChange={e => set('inquiryDetails', e.target.value)} />
                  </div>
                </div>

                <div className="cm-actions split">
                  <button className="cm-btn-ghost" onClick={handleBack}>&larr; Back</button>
                  <button className="cm-btn-primary" onClick={handleNext}>Review &rarr;</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="cm-pane" key="step3">
                <p className="cm-step-label">Step 3 of 3</p>
                <h2 className="cm-form-title">Review & Submit</h2>
                <p className="cm-form-sub">Everything look right? Hit submit and we'll be in touch shortly.</p>

                <div className="cm-review">
                  {selectedDate && <Row label="Preferred Date" val={selectedDate.toDateString()} />}
                  <Row label="Full Name" val={formData.fullName} />
                  <Row label="Email" val={formData.email} />
                  <Row label="Phone" val={formData.phone} />
                  <Row label="City" val={formData.city} />
                  <Row label="Occupation" val={formData.occupation} />
                  <Row label="Services" val={formData.services.join(', ')} />
                  <Row label="Budget" val={formData.budget} />
                  <Row label="Business Info" val={formData.businessDetails} />
                  <Row label="Inquiry" val={formData.inquiryDetails} />
                </div>

                <div className="cm-actions split">
                  <button className="cm-btn-ghost" onClick={handleBack}>&larr; Back</button>
                  <button className="cm-btn-submit" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request ✓'}
                  </button>
                </div>
              </div>
            )}
              </>
            )}

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Overlay ── */
        .cm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,15,30,0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        /* ── Modal shell ── */
        .cm-modal {
          display: flex;
          width: 860px;
          max-width: 100%;
          height: 600px !important;
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.4);
          animation: cmIn .35s cubic-bezier(.16,1,.3,1) both;
        }
        @keyframes cmIn {
          from { opacity: 0; transform: scale(.96) translateY(20px); }
          to   { opacity: 1; transform: scale(1)  translateY(0); }
        }

        /* ── Left accent panel ── */
        .cm-panel {
          width: 240px;
          flex-shrink: 0;
          background: linear-gradient(160deg, #203b72 0%, #162a54 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cm-panel-inner {
          padding: 40px 28px;
        }
        .cm-brand {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,.5);
          font-weight: 700;
          margin-bottom: 20px;
        }
        .cm-panel-title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.3;
          color: #fff;
          margin-bottom: 20px;
          letter-spacing: -0.3px;
        }
        .cm-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 30px;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 32px;
        }
        .cm-steps-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cm-step-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: rgba(255,255,255,.45);
          font-weight: 500;
          transition: color .2s;
        }
        .cm-step-row.cm-step-active { color: #fff; }
        .cm-step-row.cm-step-done   { color: rgba(255,255,255,.7); }
        .cm-step-dot {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
          transition: all .2s;
        }
        .cm-step-active .cm-step-dot {
          background: #fff;
          border-color: #fff;
          color: #203b72;
        }
        .cm-step-done .cm-step-dot {
          background: rgba(255,255,255,.25);
          border-color: rgba(255,255,255,.35);
          color: #fff;
        }

        /* ── Right form area ── */
        .cm-form-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fff;
          position: relative;
          min-width: 0;
          height: 100% !important;
          max-height: 100% !important;
          overflow: hidden !important;
        }
        .cm-close {
          position: absolute !important;
          top: 18px !important;
          right: 24px !important;
          width: 34px !important;
          height: 34px !important;
          min-width: 34px !important;
          max-width: 34px !important;
          min-height: 34px !important;
          max-height: 34px !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          border-radius: 50% !important;
          background: #f1f5f9 !important;
          color: #64748b !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all .2s !important;
          z-index: 100 !important;
          box-sizing: border-box !important;
          line-height: 0 !important;
        }
        .cm-close:hover {
          background: #e2e8f0 !important;
          color: #0f172a !important;
        }

        /* ── Progress bar ── */
        .cm-progress-bar {
          height: 3px;
          background: #f1f5f9;
          flex-shrink: 0;
        }
        .cm-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #203b72, #4a72c4);
          transition: width .4s cubic-bezier(.16,1,.3,1);
          border-radius: 0 3px 3px 0;
        }

        /* ── Scrollable content ── */
        .cm-scroll-area {
          flex: 1;
          overflow-y: auto;
          padding: 36px 40px 30px;
        }
        .cm-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .cm-scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .cm-scroll-area::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .cm-scroll-area::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .cm-pane {
          animation: paneIn .3s ease;
        }
        @keyframes paneIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .cm-step-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: #203b72;
          margin-bottom: 6px;
        }
        .cm-form-title {
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }
        .cm-form-sub {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 18px;
          line-height: 1.5;
        }

        /* ── Fields ── */
        .cm-fields {
          display: flex;
          flex-direction: column;
          gap: 14px !important;
        }
        .cm-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px !important;
        }
        .cm-field {
          display: flex;
          flex-direction: column;
          gap: 4px !important;
        }
        .cm-field label {
          font-size: 11px !important;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #475569;
        }
        .cm-field input {
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 14px !important;
          font-size: 14px !important;
          font-family: inherit;
          color: #0f172a;
          background: #fafbfc;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
          height: 40px !important;
        }
        .cm-field textarea {
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 14px !important;
          font-size: 14px !important;
          font-family: inherit;
          color: #0f172a;
          background: #fafbfc;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
          resize: none;
          height: 68px !important;
          min-height: 68px !important;
          max-height: 68px !important;
        }
        .cm-field input:focus,
        .cm-field textarea:focus {
          border-color: #203b72;
          box-shadow: 0 0 0 3px rgba(32,59,114,.1);
          background: #fff;
        }
        .cm-field input::placeholder,
        .cm-field textarea::placeholder {
          color: #94a3b8;
        }
        .cm-field input.cm-error-input {
          border-color: #ef4444;
          background: #fef2f2;
        }
        .cm-field input.cm-error-input:focus {
          box-shadow: 0 0 0 3px rgba(239,68,68,.15);
        }
        .cm-error-text {
          color: #ef4444;
          font-size: 12px;
          margin-top: 2px;
          font-weight: 500;
        }

        /* ── Chips ── */
        .cm-chip-group {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 2px;
        }
        .cm-chip {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 30px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
          transition: all .2s;
        }
        .cm-chip:hover {
          border-color: #203b72;
          color: #203b72;
        }
        .cm-chip.cm-error-chip {
          border-color: #ef4444;
          background: #fef2f2;
          color: #ef4444;
        }
        .cm-chip.on {
          background: #203b72;
          border-color: #203b72;
          color: #fff;
          font-weight: 600;
        }

        /* ── Review ── */
        .cm-review {
          background: #f8fafc;
          border: 1.5px solid #e8edf4;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        .cm-review-row {
          display: flex;
          align-items: flex-start;
          padding: 12px 18px;
          border-bottom: 1px solid #f1f5f9;
          gap: 14px;
        }
        .cm-review-row:last-child { border-bottom: none; }
        .cm-review-label {
          width: 130px;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          padding-top: 2px;
        }
        .cm-review-val {
          font-size: 14px;
          color: #0f172a;
          font-weight: 500;
          line-height: 1.5;
        }

        /* ── Actions ── */
        .cm-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 18px;
          gap: 12px;
        }
        .cm-actions.split { justify-content: space-between; }

        .cm-btn-primary, .cm-btn-submit {
          background: transparent;
          color: #203b72;
          border: 1px solid #203b72;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .cm-btn-primary:hover, .cm-btn-submit:hover {
          background: #203b72;
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(32, 59, 114, 0.25);
        }
        
        .cm-btn-ghost {
          background: transparent;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cm-btn-ghost:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .cm-panel { display: none; }
          .cm-modal { border-radius: 16px; }
          .cm-scroll-area { padding: 28px 22px 22px; }
          .cm-field-row { grid-template-columns: 1fr; }
          .cm-form-title { font-size: 22px; }
        }
      `}} />
      </div>
    </>
  );
}

function Row({ label, val }) {
  return (
    <div className="cm-review-row">
      <span className="cm-review-label">{label}</span>
      <span className="cm-review-val">{val || <em style={{color:'#94a3b8'}}>—</em>}</span>
    </div>
  );
}
