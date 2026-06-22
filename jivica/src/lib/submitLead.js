import { normalizeRuPhone } from '@/lib/formValidation';

export async function submitLead({ name, email, phone, project, source, consent = true }) {
  const webhookUrl = import.meta.env.VITE_LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('VITE_LEADS_WEBHOOK_URL is not configured');
    return false;
  }

  await fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      name: name?.trim() ?? '',
      email: email?.trim() ?? '',
      phone: phone ? normalizeRuPhone(phone) : '',
      consent,
      project: project || import.meta.env.VITE_PROJECT_NAME || 'unknown',
      source,
      timestamp: new Date().toISOString(),
    }),
  });

  return true;
}
