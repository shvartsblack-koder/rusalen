import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

const values = [
  {
    title: 'Уважение к человеку',
    text: 'Учитываем достоинство, согласие и индивидуальный опыт. Человек остаётся участником работы, а не объектом применения техники.',
  },
  {
    title: 'Целостный взгляд',
    text: 'Рассматриваем психические процессы, телесное состояние и жизненную среду во взаимосвязи. Сопоставляем разные объяснения, не сводя человека к одному симптому или показателю.',
  },
  {
    title: 'Ясность мышления',
    text: 'Различаем наблюдение, предположение и вывод. Учимся задавать точные вопросы и признавать, когда информации недостаточно.',
  },
  {
    title: 'Научная честность',
    text: 'Проверяем источники и качество данных. Открыто обсуждаем ограничения подходов и не выдаём авторскую идею за установленный факт.',
  },
  {
    title: 'Ответственность за практику',
    text: 'Соотносим метод с задачей, подготовкой специалиста и условиями работы. Знаем, когда нужна консультация или участие другого специалиста.',
  },
  {
    title: 'Сотрудничество',
    text: 'Развиваем общий язык психологов, врачей и других помогающих специалистов. Разные профессиональные взгляды помогают полнее разобрать случай.',
  },
  {
    title: 'Развитие через обратную связь',
    text: 'Обсуждаем ошибки, проверяем навыки и возвращаемся к сложным вопросам. Профессиональное развитие продолжается после завершения отдельного курса.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Ценности" title="На что мы опираемся" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {values.map((v, i) => (
            <GlassCard key={v.title} delay={(i % 3) * 0.08}>
              <span className="block w-8 h-px bg-gradient-to-r from-primary to-accent mb-4" />
              <h4 className="font-semibold mb-2">{v.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}