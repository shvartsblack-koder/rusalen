import React, { useState } from 'react';
import { MessageSquare, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  isValidEmail,
  isValidMessage,
  isValidName,
  VALIDATION_MESSAGES,
} from '@/lib/formValidation';
import { submitLead } from '@/lib/submitLead';

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-destructive text-xs mt-1">{message}</p>;
}

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (name.trim() && !isValidName(name)) {
      nextErrors.name = VALIDATION_MESSAGES.name;
    }
    if (!isValidEmail(email)) {
      nextErrors.email = VALIDATION_MESSAGES.email;
    }
    if (!isValidMessage(message)) {
      nextErrors.message = VALIDATION_MESSAGES.message;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    try {
      await submitLead({
        name: name.trim() || 'Без имени',
        email,
        phone: '',
        source: `${window.location.pathname} | обратная связь | ${message.trim()}`,
      });
      setSent(true);
    } catch (err) {
      console.error('Feedback form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Обратная связь</h1>
          <p className="text-muted-foreground text-sm">Ваше мнение помогает нам становиться лучше</p>
        </div>
      </div>

      <div className="mt-8 bg-card border border-border rounded-2xl p-6">
        {sent ? (
          <div className="flex flex-col items-center py-12 text-center">
            <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">Спасибо!</h2>
            <p className="text-muted-foreground">Ваше сообщение отправлено. Мы обязательно его рассмотрим.</p>
            <Button variant="outline" className="mt-6 rounded-xl" onClick={() => { setSent(false); setName(''); setEmail(''); setMessage(''); setErrors({}); }}>
              Отправить ещё
            </Button>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ждём вашей обратной связи и предложений по улучшению сервиса. Расскажите, что работает хорошо, а что можно улучшить — каждое сообщение важно для нас.
            </p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" value={name} onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }} className={`rounded-xl ${errors.name ? 'border-destructive' : ''}`} />
                  <FieldError message={errors.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email для ответа *</Label>
                  <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }} className={`rounded-xl ${errors.email ? 'border-destructive' : ''}`} />
                  <FieldError message={errors.email} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение <span className="text-destructive">*</span></Label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваши предложения или замечания..."
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors((p) => ({ ...p, message: undefined })); }}
                  className={`rounded-xl min-h-[160px] resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                <FieldError message={errors.message} />
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl font-semibold" disabled={loading}>
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Отправка...</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" />Отправить</>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
