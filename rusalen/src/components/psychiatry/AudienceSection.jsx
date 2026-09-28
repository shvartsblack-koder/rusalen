import React from 'react';
import { GraduationCap, Stethoscope } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

export default function AudienceSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Кому подойдёт" title="Программа для тех, кто работает со случаем" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <GlassCard>
            <GraduationCap className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Студентам психологических направлений, выпускникам и начинающим специалистам, которые
              хотят связать университетские знания с разбором конкретного случая.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <Stethoscope className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Практикующим психологам, которым нужна более ясная система наблюдения, оценки рисков
              и взаимодействия с врачами.
            </p>
          </GlassCard>
        </div>
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          Условия приёма зависят от образования и базовой подготовки. Координатор уточнит
          соответствие программы вашей ситуации до зачисления.
        </p>

        <div className="mt-16 max-w-4xl mx-auto">
          <SectionHeader label="Профессиональная задача" title="Каких данных не хватает для решения?" />
          <GlassCard className="border-l-2 border-l-primary">
            <p className="text-base leading-relaxed mb-4">
              «Человек сообщает, что несколько дней почти не спит, но чувствует необычный прилив
              сил».
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              На разборе вы отделяете наблюдения от интерпретаций, выясняете динамику и контекст,
              сопоставляете гипотезы и обсуждаете дальнейший маршрут. Одна реплика сама по себе не
              определяет диагноз.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}