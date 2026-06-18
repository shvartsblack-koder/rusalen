import React from 'react';
import PageHero from '../../components/shared/PageHero';
import GlassCard from '../../components/shared/GlassCard';
import { FlaskConical, Brain, Cpu, Heart, Globe, Dna } from 'lucide-react';

const labs = [
  { icon: Brain, name: 'Лаборатория нейрокогнитивных исследований', focus: 'Нейрофизиология, когнитивные процессы, нейровизуализация', lead: 'Руководитель: TBD' },
  { icon: Heart, name: 'Лаборатория психосоматики', focus: 'Психосоматические расстройства, телесная терапия, биомаркеры', lead: 'Руководитель: TBD' },
  { icon: Cpu, name: 'Лаборатория цифровой психологии', focus: 'AI, VR/AR в психотерапии, цифровые зависимости', lead: 'Руководитель: TBD' },
  { icon: Globe, name: 'Центр кросс-культурных исследований', focus: 'Этнопсихология, межкультурная коммуникация', lead: 'Руководитель: TBD' },
  { icon: Dna, name: 'Биоповеденческая лаборатория', focus: 'Генетика поведения, эпигенетика, биохимия стресса', lead: 'Руководитель: TBD' },
  { icon: FlaskConical, name: 'Лаборатория интегративных методов', focus: 'Синтез психотерапевтических подходов, клинические протоколы', lead: 'Руководитель: TBD' },
];

export default function Labs() {
  return (
    <div>
      <PageHero label="Лаборатории" title="Лаборатории и исследовательские группы" description="Научно-исследовательские подразделения РУСАЛЕН" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <lab.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{lab.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{lab.focus}</p>
                <p className="text-[10px] font-mono text-primary">{lab.lead}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}