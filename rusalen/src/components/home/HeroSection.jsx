import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FlaskConical, Handshake } from 'lucide-react';

const SLIDES = [
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80', // human brain 2
  'https://images.unsplash.com/photo-1630516609879-fe1d190a7ec4?w=1600&q=80', // neural network
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=80', // neon connections
  'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1600&q=80', // science/consciousness
  'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=1600&q=80', // psychology symbol
  'https://images.unsplash.com/photo-1480944657103-7fed22359e1d?w=1600&q=80', // futuristic city
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80', // neural network AI
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={SLIDES[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.28, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Neural overlay lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="600" y2="400" stroke="hsl(40,45%,55%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <line x1="300" y1="0" x2="900" y2="600" stroke="hsl(187,80%,53%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <line x1="600" y1="100" x2="1200" y2="500" stroke="hsl(40,45%,55%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <circle cx="600" cy="400" r="3" fill="hsl(40,45%,55%)" className="animate-pulse-glow" />
          <circle cx="300" cy="250" r="2" fill="hsl(187,80%,53%)" className="animate-pulse-glow" />
          <circle cx="900" cy="350" r="2" fill="hsl(40,45%,55%)" className="animate-pulse-glow" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6">
            <span className="block font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground/60 mb-2">
              Международный исследовательский центр
            </span>
            <span className="text-gold-gradient font-display text-6xl sm:text-7xl lg:text-8xl font-bold block mb-2">
              РУСАЛЕН
            </span>
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-light text-foreground/90 leading-tight block">
              Международный центр интегративной психологии, психосоматики и исследований сознания
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Центр, объединяющий классический комплекс знаний о психике человека XIX–XX веков 
            с технологиями XXI века, цифровой средой и новыми формами человеческого сознания Homo Digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/80 gap-2 h-12 px-6">
              <Link to="/about"><ArrowRight className="w-4 h-4" /> Узнать о центре</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-12 px-6">
              <Link to="/education"><BookOpen className="w-4 h-4" /> Образовательные программы</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-12 px-6">
              <Link to="/science"><FlaskConical className="w-4 h-4" /> Научная деятельность</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-12 px-6">
              <Link to="/contacts"><Handshake className="w-4 h-4" /> Стать партнером</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}