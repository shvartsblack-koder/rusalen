import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

const blocks = [
  {
    title: 'Основы клинического мышления',
    text: 'Сбор данных, сопоставление гипотез, понимание профессиональных границ и выбор дальнейшего действия. Программа «Психиатрия для психологов» развивает это направление.',
  },
  {
    title: 'Основы гипноза',
    text: 'Общий методический блок, который может связывать разные профильные программы. Его содержание и возможность зачёта определяются учебными планами.',
  },
  {
    title: 'Нейропсихиатрия травмы и стресса',
    text: 'Как соотносить клиническое наблюдение с данными исследований мозга и организма. Рассматриваем возможности и ограничения инструментальных, лабораторных и исследовательских методов.',
  },
  {
    title: 'Основы дыхательных практик',
    text: 'Разбор задач, ограничений и условий применения. Общие основы могут встречаться в ПФК и трансперсональном направлении; специальные практики рассматриваются отдельно.',
  },
];

export default function BlocksSection() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Учебные блоки"
          title="Темы, которые связывают направления"
          description="Развиваем блоки, которые могут входить в профильные программы. Их состав и доступность будут указаны в соответствующих учебных планах."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {blocks.map((b, i) => (
            <GlassCard key={b.title} delay={i * 0.08}>
              <h4 className="font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </GlassCard>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/60 mt-8 max-w-2xl">
          Знакомство с методом включает оценку качества данных о нём. Исследовательская гипотеза и
          инструмент, пригодный для индивидуальной клинической диагностики, требуют разного уровня
          подтверждения.
        </p>
      </div>
    </section>
  );
}