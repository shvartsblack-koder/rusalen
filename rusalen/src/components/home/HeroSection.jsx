import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FlaskConical, Handshake } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const ALL_SLIDES = [
  `${base}hero/slide-01.png`,
  `${base}hero/slide-02.png`,
  `${base}hero/slide-03.png`,
  `${base}hero/slide-04.png`,
  `${base}hero/slide-05.png`,
  `${base}hero/slide-06.png`,
  `${base}hero/slide-07.png`,
  `${base}hero/slide-08.png`,
  `${base}hero/slide-09.png`,
  `${base}hero/slide-10.png`,
  `${base}hero/slide-11.png`,
  `${base}hero/slide-12.png`,
  `${base}hero/slide-13.png`,
  `${base}hero/slide-14.png`,
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const SLIDES = useMemo(() => {
    return [...ALL_SLIDES].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [SLIDES]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={SLIDES[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="600" y2="400" stroke="hsl(164,100%,45%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <line x1="300" y1="0" x2="900" y2="600" stroke="hsl(200,100%,46%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <line x1="600" y1="100" x2="1200" y2="500" stroke="hsl(164,100%,45%)" strokeWidth="0.5" className="animate-pulse-glow" />
          <circle cx="600" cy="400" r="3" fill="hsl(164,100%,45%)" className="animate-pulse-glow" />
          <circle cx="300" cy="250" r="2" fill="hsl(200,100%,46%)" className="animate-pulse-glow" />
          <circle cx="900" cy="350" r="2" fill="hsl(164,100%,45%)" className="animate-pulse-glow" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
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
            <span className="text-primary font-display text-5xl sm:text-7xl lg:text-8xl font-bold block mb-2">
              РУСАЛЕН
            </span>
            <span className="font-display text-lg sm:text-2xl lg:text-3xl font-light text-foreground/90 leading-tight block">
              Международный центр интегративной психологии, психосоматики и исследований сознания
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            Центр, объединяющий классический комплекс знаний о психике человека XIX–XX веков
            с технологиями XXI века, цифровой средой и новыми формами человеческого сознания Homo Digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/80 gap-2 h-10 sm:h-12 px-4 sm:px-6 text-sm">
              <Link to="/about"><ArrowRight className="w-4 h-4" /> Узнать о центре</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-10 sm:h-12 px-4 sm:px-6 text-sm">
              <Link to="/education"><BookOpen className="w-4 h-4" /> Образование</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-10 sm:h-12 px-4 sm:px-6 text-sm">
              <Link to="/science"><FlaskConical className="w-4 h-4" /> Наука</Link>
            </Button>
            <Button asChild variant="outline" className="border-border/50 hover:bg-secondary gap-2 h-10 sm:h-12 px-4 sm:px-6 text-sm">
              <Link to="/contacts"><Handshake className="w-4 h-4" /> Партнёрство</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
