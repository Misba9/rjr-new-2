import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import BalconyPage from './pages/BalconyPage';
import PigeonPage from './pages/PigeonPage';
import ChildrenSafetyNetsPage from './pages/ChildrenSafetyNetsPage';
import MonkeySafetyNetsPage from './pages/MonkeySafetyNetsPage';
import ClothHangerPage from './pages/ClothHangerPage';
import InvisibleGrillsPage from './pages/InvisibleGrillsPage';
import ConstructionSafetyNetsPage from './pages/ConstructionSafetyNetsPage';
import SportsPracticeNetsPage from './pages/SportsPracticeNetsPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'balcony':
        return <BalconyPage />;
      case 'pigeon':
        return <PigeonPage />;
      case 'children':
        return <ChildrenSafetyNetsPage />;
      case 'monkey':
        return <MonkeySafetyNetsPage />;
      case 'cloth-hanger':
        return <ClothHangerPage />;
      case 'invisible-grills':
        return <InvisibleGrillsPage />;
      case 'construction':
        return <ConstructionSafetyNetsPage />;
      case 'sports':
        return <SportsPracticeNetsPage />;
      case 'blog':
        return <BlogPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingCTA />
    </div>
  );
}

export default App;
