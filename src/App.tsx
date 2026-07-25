import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {
  getPageKeyFromPath,
  getPathForPageKey,
  PAGE_TO_PATH,
  type AppRouteKey,
  type PageKey,
} from './constants/routes';
import { injectGlobalSchemasOnce } from './utils/seo';
import { lazyPages, prefetchLikelyPages, prefetchPage } from './routes/lazyPages';
import { prefetchDocument } from './utils/resourceHints';

const Footer = lazy(() => import('./components/Footer'));
const FloatingCTA = lazy(() => import('./components/FloatingCTA'));

const {
  services: ServicesPage,
  balcony: BalconyPage,
  pigeon: PigeonPage,
  children: ChildrenSafetyNetsPage,
  monkey: MonkeySafetyNetsPage,
  coconut: CoconutSafetyNetsPage,
  'cloth-hanger': ClothHangerPage,
  'invisible-grills': InvisibleGrillsPage,
  construction: ConstructionSafetyNetsPage,
  sports: SportsPracticeNetsPage,
  blog: BlogPage,
  about: AboutUsPage,
  contact: ContactPage,
  'privacy-policy': PrivacyPolicyPage,
  'terms-and-conditions': TermsAndConditionsPage,
  'not-found': NotFoundPage,
} = lazyPages;

const normalizePath = (pathname: string) => {
  const withLeading = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const trimmed = withLeading.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
        aria-hidden="true"
      />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<AppRouteKey>(() =>
    getPageKeyFromPath(window.location.pathname)
  );
  const [shellReady, setShellReady] = useState(false);

  const handleNavigate = useCallback((page: string) => {
    prefetchPage(page);
    const nextPath = getPathForPageKey(page);
    const currentPath = window.location.pathname + window.location.search + window.location.hash;

    if (nextPath !== currentPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page as AppRouteKey);
  }, []);

  useEffect(() => {
    injectGlobalSchemasOnce();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setShellReady(true);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(enable, 200);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const syncFromLocation = () => {
      const nextKey = getPageKeyFromPath(window.location.pathname);
      setCurrentPage(nextKey);

      if (nextKey === 'not-found') return;

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

  useEffect(() => {
    const cancel = prefetchLikelyPages(currentPage);
    if (currentPage === 'home') {
      (['balcony', 'pigeon', 'invisible-grills', 'services', 'contact'] as PageKey[]).forEach((page) => {
        prefetchDocument(PAGE_TO_PATH[page]);
      });
    }
    return cancel;
  }, [currentPage]);

  const renderPage = () => {
    const nav = handleNavigate;

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={nav} />;
      case 'services':
        return <ServicesPage onNavigate={nav} />;
      case 'balcony':
        return <BalconyPage onNavigate={nav} />;
      case 'pigeon':
        return <PigeonPage onNavigate={nav} />;
      case 'children':
        return <ChildrenSafetyNetsPage onNavigate={nav} />;
      case 'monkey':
        return <MonkeySafetyNetsPage onNavigate={nav} />;
      case 'coconut':
        return <CoconutSafetyNetsPage onNavigate={nav} />;
      case 'cloth-hanger':
        return <ClothHangerPage onNavigate={nav} />;
      case 'invisible-grills':
        return <InvisibleGrillsPage onNavigate={nav} />;
      case 'construction':
        return <ConstructionSafetyNetsPage onNavigate={nav} />;
      case 'sports':
        return <SportsPracticeNetsPage onNavigate={nav} />;
      case 'blog':
        return <BlogPage onNavigate={nav} />;
      case 'about':
        return <AboutUsPage onNavigate={nav} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={nav} />;
      case 'terms-and-conditions':
        return <TermsAndConditionsPage onNavigate={nav} />;
      case 'not-found':
      default:
        return <NotFoundPage onNavigate={nav} />;
    }
  };

  const isHome = currentPage === 'home';
  const headerPage = currentPage === 'not-found' ? 'home' : (currentPage as PageKey);

  return (
    <div className="min-h-screen bg-white pb-28 md:pb-24">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header currentPage={headerPage} onNavigate={handleNavigate} onPrefetch={prefetchPage} />
      <main id="main-content" tabIndex={-1}>
        {isHome ? renderPage() : <Suspense fallback={<PageFallback />}>{renderPage()}</Suspense>}
      </main>
      {shellReady ? (
        <Suspense fallback={null}>
          <Footer onNavigate={handleNavigate} />
          <FloatingCTA />
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
