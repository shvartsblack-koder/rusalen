import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// GitHub Pages / static host has no /api proxy — talk to Base44 via our RU proxy
// (survives Base44 sync because VITE_BASE44_SERVER_URL is set in deploy.yml + manifest build.env).
const serverUrl = import.meta.env.VITE_BASE44_SERVER_URL || 'https://api.xn--80akrjlgn.xn--p1ai';

export const base44 = createClient({
  appId: appId || '6a26ff9818a50c7b968c3bf4',
  token,
  functionsVersion,
  serverUrl,
  requiresAuth: false,
  appBaseUrl: appBaseUrl || 'https://xn--80akrjlgn.xn--p1ai',
});
