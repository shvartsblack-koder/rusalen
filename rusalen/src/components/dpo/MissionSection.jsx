import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

export default function MissionSection() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Миссия и вектор"
          title="Зачем мы развиваем ДПО РУСАЛЕН"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <GlassCard>
            <h3 className="font-semibold mb-3">Наша миссия</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Наша миссия — помогать специалистам понимать человека целостно и выбирать помощь с
              учётом его состояния, задачи и жизненной ситуации. Соединяем клиническое мышление,
              психологические методы и психофизиологию, чтобы знания разных школ складывались в
              осмысленную практику. За выбранным методом должны стоять ясная задача и понимание его
              возможностей и ограничений.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <h3 className="font-semibold mb-3">Куда мы движемся</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Строим связанную систему профессионального образования: общий язык клинического
              мышления, углублённые направления, освоение методов и обсуждение практики. Наш вектор —
              специалист, который умеет сопоставлять разные объяснения, видеть пределы своей
              компетенции, сотрудничать с коллегами и пересматривать решение по результатам работы.
            </p>
          </GlassCard>
        </div>
        <GlassCard delay={0.15} className="mt-6 border-primary/20">
          <p className="font-display text-xl sm:text-2xl mb-4">
            Клиническая задача определяет выбор инструмента
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Сначала выясняем, что происходит с человеком и в чём задача помощи. Затем выбираем
            метод, учитываем подготовку специалиста и наблюдаем за результатом. Если данных
            недостаточно, уточняем их; если нужна другая компетенция, подключаем коллегу.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}