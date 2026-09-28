import React, { useState } from 'react';
import { Copy, Check, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/shared/SectionHeader';

export const CONTACT_EMAIL = 'ceo@rusalencenter.ru';
export const CONTACT_PHONE = '+7 (495) 181-56-50';
export const TEL_HREF = 'tel:+74951815650';
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Психиатрия 72+ — программа и условия')}`;

export default function CtaSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionHeader
            title="Получите программу и условия ближайшего набора"
            description="Напишите координатору, указав вуз или образование и тему «Психиатрия 72+»."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto">
              <a href={MAILTO_HREF}>
                <Mail className="w-4 h-4" />
                Получить программу и условия
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={TEL_HREF}>
                <Phone className="w-4 h-4" />
                {CONTACT_PHONE}
              </a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono">{CONTACT_EMAIL}</span>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Скопировать адрес электронной почты"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-1"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Скопировано' : 'Скопировать'}
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Если почтовый клиент не открывается, скопируйте адрес и напишите нам с любого сервиса.
          </p>
        </div>
      </div>
    </section>
  );
}