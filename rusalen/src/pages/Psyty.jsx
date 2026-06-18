import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import SectionHeader from '../components/shared/SectionHeader';
import GlassCard from '../components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Cpu, Leaf, CalendarCheck, ArrowRight, Handshake } from 'lucide-react';

const PSYTY_IMG = 'https://media.base44.com/images/public/6a26ff9818a50c7b968c3bf4/a4e4d7735_generated_581a815f.png';

const features = [
  { icon: Building2, title: 'Исследовательский кампус', desc: 'Лаборатории, аудитории и пространства для совместной работы' },
  { icon: MapPin, title: 'Жилые корпуса', desc: 'Комфортное проживание для специалистов, студентов и участников программ' },
  { icon: Cpu, title: 'Технологический хаб', desc: 'Серверные, студии записи, VR/AR-лаборатории и цифровая инфраструктура' },
  { icon: Leaf, title: 'Экоферма', desc: 'Устойчивое сельское хозяйство, зелёные зоны и пространства для практик' },
];

const subpages = [
  { label: 'Город будущего', icon: Building2 },
  { label: 'Местоположение и инфраструктура', icon: MapPin },
  { label: 'Проекты и технологии', icon: Cpu },
  { label: 'Экоферма', icon: Leaf },
  { label: 'Забронировать место', icon: CalendarCheck },
];

export default function Psyty() {
  return (
    <div>
      <PageHero
        label="Psyty"
        title="Город будущего"
        description="Проект будущего кампуса, исследовательского города и среды проживания для специалистов, студентов, исследователей и участников программ РУСАЛЕН"
        imageUrl={PSYTY_IMG}
      />

      {/* Visual showcase */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden aspect-[21/9] -mt-16 relative z-10"
          >
            <img src={PSYTY_IMG} alt="Psyty — город будущего" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex flex-wrap gap-4">
                {subpages.map((sp, i) => (
                  <div key={i} className="glass-light rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                    <sp.icon className="w-3.5 h-3.5 text-accent" />
                    {sp.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Инфраструктура"
            title="Архитектура будущего"
            description="Модульный кампус, объединяющий науку, образование, технологии и устойчивое развитие"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <GlassCard key={i} delay={i * 0.1} className="text-center">
                <f.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center">
              <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Узнать о проекте</h4>
              <Button asChild variant="outline" size="sm" className="border-border/50">
                <Link to="/contacts">Подробнее</Link>
              </Button>
            </GlassCard>
            <GlassCard className="text-center" delay={0.1}>
              <CalendarCheck className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Забронировать место</h4>
              <Button asChild variant="outline" size="sm" className="border-border/50">
                <Link to="/contacts">Забронировать</Link>
              </Button>
            </GlassCard>
            <GlassCard className="text-center" delay={0.2}>
              <Handshake className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Стать партнёром</h4>
              <Button asChild variant="outline" size="sm" className="border-border/50">
                <Link to="/contacts">Связаться</Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}