import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import { LeadModalProvider } from '@/components/LeadModal';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Landing from '@/pages/Landing';
import HelpMap from '@/pages/HelpMap';
import Specialists from '@/pages/Specialists';
import Feedback from '@/pages/Feedback';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router basename={routerBasename}>
          <LeadModalProvider>
            <CookieConsent />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/help-map" element={<HelpMap />} />
              <Route path="/specialists" element={<Specialists />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </LeadModalProvider>
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
