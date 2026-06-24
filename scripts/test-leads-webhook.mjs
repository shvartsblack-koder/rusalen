#!/usr/bin/env node
/**
 * Smoke-test Google Sheets webhook for all three projects.
 * Usage: node scripts/test-leads-webhook.mjs [webhookUrl]
 */

const WEBHOOK =
  process.argv[2] ||
  process.env.VITE_LEADS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbxgm1M73LWE_23wtbWzJjLBwd7P_s1t46Y2bwDNf2Wc9KKkGjjPtR91xFTkKdp64PHV/exec';

const projects = ['rusalen', 'jivica', 'goszakazfinans'];

async function submitLead(project) {
  const payload = {
    name: `Smoke Test ${project}`,
    email: `smoke+${project}@example.com`,
    phone: '+79990001234',
    consent: true,
    project,
    source: `scripts/test-leads-webhook.mjs | ${project}`,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(WEBHOOK, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${project}: HTTP ${response.status} — ${text.slice(0, 200)}`);
  }

  const data = JSON.parse(text);
  if (data.result !== 'ok') {
    throw new Error(`${project}: unexpected response — ${text}`);
  }

  return text;
}

let failed = 0;
for (const project of projects) {
  try {
    const result = await submitLead(project);
    console.log(`✓ ${project}: ${result}`);
  } catch (err) {
    failed += 1;
    console.error(`✗ ${err.message}`);
  }
}

process.exit(failed > 0 ? 1 : 0);
