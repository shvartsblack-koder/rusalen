import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Monitor, ClipboardList } from 'lucide-react';
import { MAILTO_HREF } from './CtaSection';

const params = [
  { icon: Clock, text: '72+ академических часа' },
  { icon: Monitor, text: 'Живой онлайн-формат' },
  { icon: ClipboardList, text: 'Практические разборы' },
  { icon: null, text: '29 900 ₽' },
];

export default function PsychiatryHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
        >
          Повышение квалификации для психологов
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 max-w-3xl"
        >
          Психиатрия для психологов
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-xl sm:text-2xl text-gold-gradient mb-6"
        >
          Основы системно-функционального мышления
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8"
        >
          Учитесь описывать состояние человека, рассматривать возможные объяснения и выбирать
          обоснованный следующий шаг: психологическую работу, консультацию врача или совместное
          сопровождение.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-3"
        >
          {params.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 glass rounded-lg px-4 py-2 text-sm font-medium"
            >
              {Icon && <Icon className="w-4 h-4 text-primary" aria-hidden="true" />}
              {text}
            </span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xs text-muted-foreground/80 max-w-2xl leading-relaxed mb-8"
        >
          Базовая программа — 72 академических часа. Дополнительные модули, их объём и стоимость
          согласуются отдельно. Точный объём фиксируется в учебном плане и договоре.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto">
            <a href={MAILTO_HREF}>Получить программу и условия</a>
          </Button>
          <a
            href="#program"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-1 py-1"
          >
            Что будем изучать
          </a>
        </motion.div>
      </div>
    </section>
  );
}