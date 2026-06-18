import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_consent_accepted';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== 'true') {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Согласие на использование cookie"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem',
        background: 'var(--cookie-banner-bg, #ffffff)',
        color: 'var(--cookie-banner-text, #1f2937)',
        borderTop: '1px solid var(--cookie-banner-border, #e5e7eb)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.08)',
      }}
      className="cookie-consent-banner"
    >
      <style>{`
        .cookie-consent-banner {
          --cookie-banner-bg: #ffffff;
          --cookie-banner-text: #1f2937;
          --cookie-banner-border: #e5e7eb;
          --cookie-banner-muted: #6b7280;
          --cookie-banner-primary: #2563eb;
          --cookie-banner-primary-hover: #1d4ed8;
        }
        @media (prefers-color-scheme: dark) {
          .cookie-consent-banner {
            --cookie-banner-bg: #111827;
            --cookie-banner-text: #f3f4f6;
            --cookie-banner-border: #374151;
            --cookie-banner-muted: #9ca3af;
            --cookie-banner-primary: #3b82f6;
            --cookie-banner-primary-hover: #2563eb;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <p style={{ flex: '1 1 280px', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
          Мы используем файлы cookie для корректной работы сайта и улучшения пользовательского опыта.
          Продолжая пользоваться сайтом, вы соглашаетесь с их использованием.
          {showDetails && (
            <span style={{ display: 'block', marginTop: '0.5rem', color: 'var(--cookie-banner-muted)' }}>
              Cookie помогают нам анализировать посещаемость и улучшать сервис. Вы можете отключить
              cookie в настройках браузера, но часть функций сайта может работать некорректно.
            </span>
          )}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: '1px solid var(--cookie-banner-border)',
              borderRadius: '6px',
              background: 'transparent',
              color: 'var(--cookie-banner-text)',
              cursor: 'pointer',
            }}
          >
            Подробнее
          </button>
          <button
            type="button"
            onClick={accept}
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              border: 'none',
              borderRadius: '6px',
              background: 'var(--cookie-banner-primary)',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--cookie-banner-primary-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cookie-banner-primary)'; }}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
