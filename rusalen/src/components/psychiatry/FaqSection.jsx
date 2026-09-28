import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeader from '@/components/shared/SectionHeader';

const faqs = [
  {
    q: 'Можно ли поступить во время обучения в вузе?',
    a: 'Да, возможность ДПО предусмотрена и для получающих образование. Условия приёма на эту программу зависят от вашей подготовки. Порядок выдачи удостоверения указан выше.',
  },
  {
    q: 'Смогу ли я ставить медицинские диагнозы?',
    a: 'Курс развивает компетенции психолога по наблюдению, анализу случая и взаимодействию с врачами. Врачебные полномочия он не предоставляет.',
  },
  {
    q: 'Что означает 72+?',
    a: 'Базовая программа составляет 72 академических часа. Расширение возможно по согласованному учебному плану с отдельными условиями.',
  },
  {
    q: 'Когда старт и сколько стоит?',
    a: 'Стоимость базовой программы — 29 900 ₽. Дату старта ближайшего набора запросите у координатора.',
  },
  {
    q: 'Будет ли перезачёт?',
    a: 'Он возможен только по утверждённому порядку и после сопоставления освоенных результатов обучения.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Вопросы и ответы" title="FAQ" />
        <Accordion type="single" collapsible className="glass rounded-xl px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-base hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}