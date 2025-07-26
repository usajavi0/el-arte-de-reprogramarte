import React from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import GiftLandingPage from './pages/GiftLandingPage';
import NewsletterSubscriptionPage from './pages/NewsletterSubscriptionPage';
import CoursesPage from './pages/CoursesPage';
import SimpleContactPage from './pages/SimpleContactPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticlesPage from './pages/ArticlesPage'; 
import { CookieConsentBanner } from './components/ui/CookieConsentBanner'; 

// Import legal pages
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import ConditionsVentaPage from './pages/legal/CondicionesVentaPage';
import PoliticaPrivacidadPage from './pages/legal/PoliticaPrivacidadPage';
import PoliticaCookiesPage from './pages/legal/PoliticaCookiesPage';

interface MainLayoutProps {
  applyCheckboxStyle?: boolean;
}

interface CustomCSSProperties extends React.CSSProperties {
  '--checkbox-tick-svg'?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ applyCheckboxStyle }) => {
  const style: CustomCSSProperties = applyCheckboxStyle ? { 
    fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
    '--checkbox-tick-svg': `url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,248,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')` 
  } : { 
    fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' 
  };
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f8fc] group/design-root overflow-x-hidden" style={style}>
      <div className="layout-container flex h-full grow flex-col">
        <Header /> 
        <main className="px-10 sm:px-20 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Outlet />
          </div>
        </main>
        <Footer /> 
      </div>
      <CookieConsentBanner /> 
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}> 
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<MainLayout applyCheckboxStyle={true} />}> 
           <Route path="/el-regalo" element={<GiftLandingPage />} />
           <Route path="/newsletter-signup" element={<NewsletterSubscriptionPage />} />
        </Route>
        <Route element={<MainLayout />}> 
           <Route path="/cursos" element={<CoursesPage />} />
           <Route path="/recursos" element={<ResourcesPage />} />
           <Route path="/articulos-reflexiones" element={<ArticlesPage />} />
           <Route path="/contacto" element={<SimpleContactPage />} />
           {/* Legal Pages */}
           <Route path="/legal/aviso-legal" element={<AvisoLegalPage />} />
           <Route path="/legal/condiciones-venta" element={<ConditionsVentaPage />} />
           <Route path="/legal/politica-privacidad" element={<PoliticaPrivacidadPage />} />
           <Route path="/legal/politica-cookies" element={<PoliticaCookiesPage />} />
        </Route>
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
