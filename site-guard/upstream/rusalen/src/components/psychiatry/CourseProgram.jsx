import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

const modules = [
  {
    title: 'Клиническое интервью и психический статус',
    text: 'Структура вопросов, анамнез, наблюдение, отделение фактов от интерпретаций.',
  },
  {
    title: 'Психопатология',
    text: 'Сознание, восприятие, мышление, память, внимание, эмоции, воля и поведение.',
  },
  {
    title: 'Основные клинические картины',
    text: 'Аффективные, психотические, тревожные, стрессовые, личностные и аддиктивные состояния в объёме задач психолога.',
  },
  {
    title: 'Альтернативные объяснения',
    text: 'Возможные соматические, неврологические и лекарственные факторы. Психофармакотерапия с позиции понимания клиента и взаимодействия с врачом.',
  },
  {
    title: 'Риски и маршрутизация',
    text: 'Признаки, требующие врачебной оценки, профессиональные границы, совместное сопровождение и итоговый разбор кейса.',
  },
];

const materials = [
  'Структура первичного интервью',
  'Карта наблюдений',
  'Матрица разбора случая',
  'Клинический навигатор',
  'Учебные кейсы',
  'Литература',
];

export default function CourseProgram() {
  return (
    <section id="program" className="py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Содержание" title="Что будем изучать" />
        <Accordion type="single" collapsible className="glass rounded-xl px-6">
          {modules.map((m, i) => (
            <AccordionItem key={m.title} value={`module-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                <span className="flex items-baseline gap-3 text-left">
                  <span className="font-mono text-xs text-primary/70 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {m.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {m.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed">
          Точный состав и распределение часов указываются в утверждённом учебном плане.
        </p>

        <div className="mt-20">
          <SectionHeader label="Результат обучения" title="Что вы сможете после курса" />
          <GlassCard className="mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              На учебном кейсе вы сможете структурировать информацию, описать наблюдаемые признаки,
              сформулировать несколько гипотез, обозначить недостающие данные и обосновать
              следующий профессиональный шаг.
            </p>
          </GlassCard>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-sm mb-3">Материалы по программе</h3>
              <ul className="flex flex-wrap gap-2 list-none">
                {materials.map((m) => (
                  <li
                    key={m}
                    className="text-xs font-mono text-muted-foreground glass rounded-lg px-3 py-1.5"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}