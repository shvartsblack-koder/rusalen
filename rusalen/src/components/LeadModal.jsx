import React, { createContext, useContext, useState } from 'react';

const LeadModalContext = createContext();

export const LeadModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openLeadModal = () => setIsOpen(true);
  const closeLeadModal = () => setIsOpen(false);
  return (
    <LeadModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}
      {isOpen && <LeadModal onClose={closeLeadModal} />}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => useContext(LeadModalContext);

const WEBHOOK_URL = import.meta.env.VITE_LEADS_WEBHOOK_URL;
const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME || 'unknown';

function isFormValid(form) {
  return form.name.trim() && form.email.trim() && form.phone.trim();
}

function LeadModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit = consent && isFormValid(form) && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          consent: true,
          project: PROJECT_NAME,
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('Lead submission error:', err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: 'white', borderRadius: '12px',
        padding: '2rem', maxWidth: '440px', width: '100%',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'none', border: 'none', fontSize: '1.5rem',
            cursor: 'pointer', color: '#666',
          }}
        >×</button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h2 style={{ marginBottom: '0.5rem' }}>Заявка принята!</h2>
            <p style={{ color: '#666' }}>Мы перезвоним вам в течение 24 часов.</p>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: '0.25rem' }}>Оставить заявку</h2>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Заполните форму, и мы свяжемся с вами в течение 24 часов.
            </p>
            <form onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.ru' },
                { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 500 }}>
                    {label} <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={(e) => setForm(f => ({ ...f, [name]: e.target.value }))}
                    style={{
                      width: '100%', padding: '0.625rem 0.75rem',
                      border: '1px solid #d1d5db', borderRadius: '6px',
                      fontSize: '1rem', boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.4,
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: '0.2rem', flexShrink: 0 }}
                />
                <span>
                  Я даю согласие на обработку персональных данных в соответствии с{' '}
                  <a href="/about/documents" style={{ color: '#2563eb' }}>
                    политикой конфиденциальности
                  </a>
                </span>
              </label>
              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: '#2563eb', color: 'white',
                  border: 'none', borderRadius: '6px',
                  fontSize: '1rem', fontWeight: 600,
                  cursor: !canSubmit ? 'not-allowed' : 'pointer',
                  opacity: !canSubmit ? 0.5 : 1,
                }}
              >
                {loading ? 'Отправляем...' : 'Оставить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
