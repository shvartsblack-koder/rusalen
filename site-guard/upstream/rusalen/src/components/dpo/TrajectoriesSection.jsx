import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

const trajectories = [
  {
    title: 'Хочу увереннее разбирать состояние человека',
    text: 'Начните с содержания «Психиатрии для психологов». Затем обсудите с координатором, какие профильные знания нужны под ваши рабочие задачи.',
  },
  {
    title: 'Работаю со стрессом и последствиями травмы',
    text: 'Обратите внимание на направление ПТСР и психологической травмы. Блоки по психофизиологии, БОС и другим методам могут дополнять подготовку, если это предусмотрено вашей программой.',
  },
  {
    title: 'Хочу последовательно освоить КПТ',
    text: 'Рассмотрите полный цикл с тремя модулями. Переход между этапами зависит от освоения предыдущего, а не только от оплаты следующего.',
  },
  {
    title: 'Хочу работать с сексуальностью и отношениями',
    text: 'Изучите анонс консультирования в сексологии. В этой области особенно важны этика, работа с запросом и различение психологических и медицинских задач.',
  },
];

export default function TrajectoriesSection() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Траектории"
          title="Как выбрать следующий шаг"
          description="Примеры показывают связь тем. Доступность программ и условия перехода уточняются отдельно."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {trajectories.map((t, i) => (
            <GlassCard key={t.title} delay={i * 0.08}>
              <h4 className="font-semibold mb-2">{t.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}