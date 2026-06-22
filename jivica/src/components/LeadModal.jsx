import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { validateLeadFields } from '@/lib/formValidation';
import { submitLead } from '@/lib/submitLead';

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

const fieldStyle = {
  width: '100%',
  padding: '0.625rem 0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem' }}>{message}</p>;
}

function LeadModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;

    const { valid, errors: validationErrors } = validateLeadFields(form);
    setErrors(validationErrors);
    if (!valid) return;

    setLoading(true);
    try {
      await submitLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        source: window.location.pathname,
        consent: true,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.ru', autoComplete: 'email' },
    { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (999) 123-45-67', autoComplete: 'tel' },
  ];

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
          type="button"
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
            <form onSubmit={handleSubmit} noValidate>
              {fields.map(({ name, label, type, placeholder, autoComplete }) => (
                <div key={name} style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 500 }}>
                    {label} <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    value={form[name]}
                    onChange={(e) => handleChange(name, e.target.value)}
                    style={{
                      ...fieldStyle,
                      borderColor: errors[name] ? '#dc2626' : '#d1d5db',
                    }}
                  />
                  <FieldError message={errors[name]} />
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
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: '0.2rem', flexShrink: 0 }}
                />
                <span>
                  Я даю согласие на обработку персональных данных в соответствии с{' '}
                  <Link to="/privacy" style={{ color: '#2563eb' }} onClick={(e) => e.stopPropagation()}>
                    политикой конфиденциальности
                  </Link>
                </span>
              </label>
              {!consent && (
                <p style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '1rem' }}>
                  Необходимо согласие на обработку персональных данных
                </p>
              )}
              <button
                type="submit"
                disabled={loading || !consent}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: '#2563eb', color: 'white',
                  border: 'none', borderRadius: '6px',
                  fontSize: '1rem', fontWeight: 600,
                  cursor: loading || !consent ? 'not-allowed' : 'pointer',
                  opacity: loading || !consent ? 0.5 : 1,
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
