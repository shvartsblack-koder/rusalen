import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, Award, Compass } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';

export default function FormatSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Формат и документ" title="Как проходит обучение и что вы получаете" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard>
            <MonitorPlay className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Живые онлайн-занятия сочетаются с практическими разборами и самостоятельной работой.
              Итоговая аттестация проверяет логику работы со случаем.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              После успешного освоения программы и аттестации выдаётся удостоверение о повышении
              квалификации. При прохождении ДПО параллельно с получением среднего профессионального
              или высшего образования документ выдают одновременно с соответствующим документом об
              образовании и квалификации.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Курс не присваивает квалификацию врача-психиатра, медицинского психолога или военного
              клинического психолога и не предоставляет права назначать лекарства.
            </p>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Compass className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
            <h3 className="font-semibold mb-3">Дальнейшая траектория</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Познакомьтесь с другими направлениями РУСАЛЕН и логикой модульного обучения. Условия
              перехода и зачёта ранее освоенного уточняются по конкретной программе.
            </p>
            <Button asChild variant="outline" size="sm" className="border-primary/40 hover:bg-primary/10 text-xs mb-6">
              <Link to="/education">Раздел ДПО РУСАЛЕН</Link>
            </Button>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/70">
              <Award className="w-4 h-4 text-primary/70" aria-hidden="true" />
              Дополнительная профессиональная программа повышения квалификации
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}