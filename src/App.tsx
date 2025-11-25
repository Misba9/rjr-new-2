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
import WhitefieldPage from './pages/locations/WhitefieldPage';
import HSRLayoutPage from './pages/locations/HSRLayoutPage';
import ElectronicCityPage from './pages/locations/ElectronicCityPage';
import IndiranagarPage from './pages/locations/IndiranagarPage';
import KoramangalaPage from './pages/locations/KoramangalaPage';
import MarathahalliPage from './pages/locations/MarathahalliPage';
import BTMLayoutPage from './pages/locations/BTMLayoutPage';

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
      case 'whitefield':
        return <WhitefieldPage />;
      case 'hsr-layout':
        return <HSRLayoutPage />;
      case 'electronic-city':
        return <ElectronicCityPage />;
      case 'indiranagar':
        return <IndiranagarPage />;
      case 'koramangala':
        return <KoramangalaPage />;
      case 'marathahalli':
        return <MarathahalliPage />;
      case 'btm-layout':
        return <BTMLayoutPage />;
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
