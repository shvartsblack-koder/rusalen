import React from 'react';
import { Eye, Search, Target, Hand, RefreshCw, Brain, Heart } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

const steps = [
  { icon: Eye, title: 'Состояние', text: 'Что наблюдаем сейчас.' },
  { icon: Search, title: 'Контекст и механизмы', text: 'Что могло повлиять и что поддерживает проблему.' },
  { icon: Target, title: 'Задача и мишень', text: 'Что нужно уточнить или изменить.' },
  { icon: Hand, title: 'Действие', text: 'Что находится в компетенции психолога и кого необходимо подключить.' },
  { icon: RefreshCw, title: 'Обратная связь', text: 'По каким признакам пересмотреть решение.' },
];

export default function MethodSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Подход"
          title="Системно-функциональное мышление"
          description="Случай рассматривается как взаимодействие состояния, психических функций, поведения и среды. Рабочую гипотезу связывают с профессиональной задачей, выбором помощи и обратной связью."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 list-none mb-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <GlassCard delay={i * 0.08} className="h-full p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
              </GlassCard>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted-foreground/70 text-center max-w-xl mx-auto leading-relaxed">
          Это учебная схема анализа случая. Она не определяет диагноз и не назначает метод
          автоматически.
        </p>

        <div className="mt-20">
          <SectionHeader label="Две профессиональные оптики" title="Один случай — два языка описания" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard>
              <Brain className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-semibold mb-2">Психиатрическая</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Симптомы, синдромы, динамика и возможные медицинские причины.
              </p>
            </GlassCard>
            <GlassCard delay={0.1}>
              <Heart className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-semibold mb-2">Психологическая</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Психические функции, переживания, поведение, контекст и задачи помощи.
              </p>
            </GlassCard>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            Согласованный язык обсуждения случая и понятный маршрут взаимодействия специалистов.
          </p>
        </div>
      </div>
    </section>
  );
}