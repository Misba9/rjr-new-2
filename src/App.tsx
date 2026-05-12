import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BalconyPage from './pages/BalconyPage';
import PigeonPage from './pages/PigeonPage';
import ChildrenSafetyNetsPage from './pages/ChildrenSafetyNetsPage';
import MonkeySafetyNetsPage from './pages/MonkeySafetyNetsPage';
import CoconutSafetyNetsPage from './pages/CoconutSafetyNetsPage';
import ClothHangerPage from './pages/ClothHangerPage';
import InvisibleGrillsPage from './pages/InvisibleGrillsPage';
import ConstructionSafetyNetsPage from './pages/ConstructionSafetyNetsPage';
import SportsPracticeNetsPage from './pages/SportsPracticeNetsPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import { getPageKeyFromPath, getPathForPageKey, type PageKey } from './constants/routes';
import { injectGlobalWebSiteSchemaOnce } from './utils/seo';

const normalizePath = (pathname: string) => {
  const withLeading = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const trimmed = withLeading.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(() => getPageKeyFromPath(window.location.pathname));

  const handleNavigate = useCallback((page: string) => {
    const nextPath = getPathForPageKey(page);
    const currentPath = window.location.pathname + window.location.search + window.location.hash;

    if (nextPath !== currentPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page as PageKey);
  }, []);

  useEffect(() => {
    injectGlobalWebSiteSchemaOnce();
  }, []);

  useEffect(() => {
    const syncFromLocation = () => {
      const nextKey = getPageKeyFromPath(window.location.pathname);
      setCurrentPage(nextKey);

      const canonicalPath = getPathForPageKey(nextKey);
      const normalizedCurrent = normalizePath(window.location.pathname);
      const normalizedCanonical = normalizePath(canonicalPath);

      if (normalizedCurrent !== normalizedCanonical) {
        window.history.replaceState({}, '', canonicalPath);
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  useEffect(() => {
    if (currentPage === 'contact') {
      requestAnimationFrame(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'balcony':
        return <BalconyPage onNavigate={handleNavigate} />;
      case 'pigeon':
        return <PigeonPage onNavigate={handleNavigate} />;
      case 'children':
        return <ChildrenSafetyNetsPage onNavigate={handleNavigate} />;
      case 'monkey':
        return <MonkeySafetyNetsPage onNavigate={handleNavigate} />;
      case 'coconut':
        return <CoconutSafetyNetsPage onNavigate={handleNavigate} />;
      case 'cloth-hanger':
        return <ClothHangerPage />;
      case 'invisible-grills':
        return <InvisibleGrillsPage onNavigate={handleNavigate} />;
      case 'construction':
        return <ConstructionSafetyNetsPage onNavigate={handleNavigate} />;
      case 'sports':
        return <SportsPracticeNetsPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-and-conditions':
        return <TermsAndConditionsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-28 md:pb-24">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingCTA />
    </div>
  );
}

export default App;
