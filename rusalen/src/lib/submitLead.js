import { normalizeRuPhone } from '@/lib/formValidation';

export async function submitLead({ name, email, phone, project, source, consent = true }) {
  const webhookUrl = import.meta.env.VITE_LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('VITE_LEADS_WEBHOOK_URL is not configured');
  }

  const payload = {
    name: name?.trim() ?? '',
    email: email?.trim() ?? '',
    phone: phone ? normalizeRuPhone(phone) : '',
    consent,
    project: project || import.meta.env.VITE_PROJECT_NAME || 'unknown',
    source,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Webhook HTTP ${response.status}: ${text.slice(0, 200)}`);
  }

  try {
    const data = JSON.parse(text);
    if (data.result !== 'ok') {
      throw new Error(data.error || 'Webhook rejected the lead');
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      if (!text.toLowerCase().includes('ok')) {
        throw new Error('Unexpected webhook response');
      }
    } else {
      throw err;
    }
  }

  return true;
}
