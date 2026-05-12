import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { logos } from '../assets/images';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY } from '../constants/nap';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const primaryNav: Array<{ label: string; page: PageKey }> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Balcony Safety Nets', page: 'balcony' },
  { label: 'Invisible Grill', page: 'invisible-grills' },
  { label: 'Pigeon Safety Nets', page: 'pigeon' },
  { label: 'Contact', page: 'contact' },
];

const moreNav: Array<{ label: string; page: PageKey }> = [
  { label: 'Children Safety Nets', page: 'children' },
  { label: 'Monkey Safety Nets', page: 'monkey' },
  { label: 'Coconut Tree Nets', page: 'coconut' },
  { label: 'Cloth Hanger Nets', page: 'cloth-hanger' },
  { label: 'Construction Nets', page: 'construction' },
  { label: 'Sports Practice Nets', page: 'sports' },
  { label: 'Blog', page: 'blog' },
];

const morePages: PageKey[] = moreNav.map((i) => i.page);

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const isMoreActive = morePages.includes(currentPage as PageKey);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isMobile || !phoneRef.current) return;
    const timer = setTimeout(() => {
      phoneRef.current?.classList.add('ring-2', 'ring-blue-400', 'ring-offset-2');
    }, 500);
    const clear = setTimeout(() => {
      phoneRef.current?.classList.remove('ring-2', 'ring-blue-400', 'ring-offset-2');
    }, 3500);
    return () => {
      clearTimeout(timer);
      clearTimeout(clear);
    };
  }, [isMobile, mobileMenuOpen]);

  const go = (page: PageKey) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDesktopMoreOpen(false);
    setMobileMoreOpen(false);
  };

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
      active ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-16 gap-3">
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-3 min-w-0"
            onClick={() => go('home')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                go('home');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="RJR Safety Nets home"
          >
            <img src={logos.navbar} alt="RJR Safety Nets Logo" className="h-10 w-auto flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-bold text-blue-600 truncate">RJR Safety Nets</p>
              <p className="text-xs text-gray-600">Bangalore</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-3 flex-wrap justify-end flex-1 min-w-0">
            {primaryNav.map((item) => {
              const href = PAGE_TO_PATH[item.page];
              const active = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={href}
                  className={linkClass(active)}
                  aria-current={active ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.page);
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setDesktopMoreOpen(true)}
              onMouseLeave={() => setDesktopMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDesktopMoreOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={desktopMoreOpen}
                className={`${linkClass(isMoreActive)} flex items-center gap-1 cursor-pointer border-b-0 pb-0`}
              >
                More
                <ChevronDown size={16} className={`transition-transform ${desktopMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {desktopMoreOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-lg py-2 z-50 border border-gray-100"
                  role="menu"
                  aria-label="More pages"
                >
                  {moreNav.map((item) => {
                    const href = PAGE_TO_PATH[item.page];
                    const active = currentPage === item.page;
                    return (
                      <a
                        key={item.page}
                        href={href}
                        role="menuitem"
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          active ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item.page);
                        }}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0"
            >
              <Phone size={18} aria-hidden="true" />
              <span className="text-sm font-semibold hidden xl:inline">Call Now</span>
              <span className="text-sm font-semibold xl:hidden">Call</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-slideDown max-h-[calc(100vh-5rem)] overflow-y-auto">
            {primaryNav.map((item) => {
              const href = PAGE_TO_PATH[item.page];
              const active = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={href}
                  className={`block px-4 py-3 text-base font-medium ${
                    active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-current={active ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.page);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              className={`flex items-center justify-between w-full text-left px-4 py-3 text-base font-medium ${
                isMoreActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              aria-haspopup="menu"
              aria-expanded={mobileMoreOpen}
            >
              <span>More services &amp; blog</span>
              <ChevronDown size={18} className={`transform transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMoreOpen && (
              <div className="pl-4 bg-gray-50 border-t border-gray-100" role="menu" aria-label="More pages">
                {moreNav.map((item) => {
                  const href = PAGE_TO_PATH[item.page];
                  const active = currentPage === item.page;
                  return (
                    <a
                      key={item.page}
                      href={href}
                      className={`block px-4 py-3 text-sm ${active ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        go(item.page);
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
            <a
              ref={phoneRef}
              href={PHONE_TEL}
              className="flex items-center gap-2 mx-4 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl justify-center"
            >
              <Phone size={18} aria-hidden="true" />
              <span className="text-base font-semibold">{PHONE_PRIMARY_DISPLAY}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
