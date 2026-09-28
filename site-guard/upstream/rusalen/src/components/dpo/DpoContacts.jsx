import React, { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/button';
import { Copy, Check, Mail, Phone } from 'lucide-react';
import { DPO_EMAIL, mailtoHref } from '@/lib/mailto';

export default function DpoContacts() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DPO_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Контакты"
          title="Обсудим ваш следующий шаг в обучении"
          description="Напишите, какое направление вам интересно и какую профессиональную задачу вы хотите решать. Координатор уточнит условия и поможет разобраться в вариантах подготовки."
        />
        <div className="glass rounded-xl p-6 sm:p-8 max-w-3xl mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href={mailtoHref('ДПО РУСАЛЕН — выбор направления')}
                className="text-sm hover:text-primary transition-colors break-all select-all"
              >
                {DPO_EMAIL}
              </a>
            </div>
            <Button
              onClick={copyEmail}
              variant="outline"
              size="sm"
              className="border-primary/40 hover:bg-primary/10 text-xs shrink-0"
              aria-label="Скопировать адрес электронной почты"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Скопировано
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" /> Копировать
                </>
              )}
            </Button>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <a href="tel:+74951815650" className="text-sm hover:text-primary transition-colors">
              +7 (495) 181-56-50
            </a>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/80">
            <a href={mailtoHref('ДПО РУСАЛЕН — выбор направления')}>Обсудить обучение</a>
          </Button>
          <p className="text-xs text-muted-foreground/50 mt-8">
            АНО «Международный исследовательский центр РУСАЛЕН» · ИНН 7736341108 · ОГРН
            1227700255408
          </p>
        </div>
      </div>
    </section>
  );
}