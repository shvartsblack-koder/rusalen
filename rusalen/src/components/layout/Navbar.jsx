import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLeadModal } from '@/components/LeadModal';

const navItems = [
  { label: 'Кто мы', path: '/about', children: [
    { label: 'Команда', path: '/about/team' },
    { label: 'Миссия и цели', path: '/about/mission' },
    { label: 'Новости', path: '/about/news' },
    { label: 'Вакансии и конкурсы', path: '/about/vacancies' },
    { label: 'Документы', path: '/about/documents' },
    { label: 'Контакты и филиалы', path: '/contacts' },
  ]},
  { label: 'Научная деятельность', path: '/science', children: [
    { label: 'Направления исследований', path: '/science/directions' },
    { label: 'Лаборатории', path: '/science/labs' },
    { label: 'Публикации', path: '/science/publications' },
    { label: 'Конференции', path: '/science/conferences' },
    { label: 'Международная деятельность', path: '/science/international' },
  ]},
  { label: 'Образование', path: '/education' },
  { label: 'PsyPedia', path: '/library' },
  { label: 'PsyMedia', path: '/psymedia' },
  { label: 'PsyTorg', path: '/psytorg' },
  { label: 'PsyPay', path: '/psypay' },
  { label: 'PsyTech', path: '/psytech' },
  { label: 'Psyty', path: '/psyty' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-t border-border/40 ${scrolled ? 'glass py-2' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-gold-gradient font-display text-xl sm:text-2xl font-bold tracking-wide">РУСАЛЕН</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1 ${
                    location.pathname.startsWith(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 pt-2 min-w-[220px]"
                    >
                      <div className="glass rounded-lg p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Login button (desktop) */}
          <button
            type="button"
            onClick={openLeadModal}
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            title="Войти"
          >
            <UserCircle className="w-4 h-4" />
            Войти
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 max-h-[70vh] overflow-y-auto space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-border pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={openLeadModal}
                className="block w-full text-left px-4 py-3 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                Войти
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
