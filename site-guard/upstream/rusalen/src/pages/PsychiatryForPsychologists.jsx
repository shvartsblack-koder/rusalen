import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import PsychiatryHero from '@/components/psychiatry/PsychiatryHero';
import AudienceSection from '@/components/psychiatry/AudienceSection';
import MethodSection from '@/components/psychiatry/MethodSection';
import CourseProgram from '@/components/psychiatry/CourseProgram';
import FormatSection from '@/components/psychiatry/FormatSection';
import FaqSection from '@/components/psychiatry/FaqSection';
import CtaSection from '@/components/psychiatry/CtaSection';

export default function PsychiatryForPsychologists() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Психиатрия для психологов 72+ часа | РУСАЛЕН';
    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute('content') || '';
    if (meta) {
      meta.setAttribute(
        'content',
        'Основы системно-функционального мышления для психологов и студентов психологических направлений. Онлайн-занятия, разборы случаев, риски и маршрутизация'
      );
    } else {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute(
        'content',
        'Основы системно-функционального мышления для психологов и студентов психологических направлений. Онлайн-занятия, разборы случаев, риски и маршрутизация'
      );
      document.head.appendChild(meta);
    }
    return () => {
      document.title = prevTitle;
      meta.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        <PsychiatryHero />
        <AudienceSection />
        <MethodSection />
        <CourseProgram />
        <FormatSection />
        <FaqSection />
        <CtaSection />
      </div>
    </MotionConfig>
  );
}