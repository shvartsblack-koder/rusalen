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

function App() {
  return (
    <AuthProvider>
      <LeadModalProvider>
        <CookieConsent />
        <QueryClientProvider client={queryClientInstance}>
          <Router basename="/jivica">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
          <Toaster />
        </QueryClientProvider>
      </LeadModalProvider>
    </AuthProvider>
  );
}

export default App;
