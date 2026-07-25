import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef, useId, type KeyboardEvent } from 'react';
import { logos } from '../assets/images';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY } from '../constants/nap';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  /** Warm route chunks before click (hover / focus) */
  onPrefetch?: (page: string) => void;
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

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Header({ currentPage, onNavigate, onPrefetch }: HeaderProps) {
  const isMoreActive = morePages.includes(currentPage as PageKey);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopMoreRef = useRef<HTMLDivElement>(null);
  const ids = useId();
  const desktopMoreId = `${ids}-desktop-more`;
  const mobilePanelId = `${ids}-mobile-panel`;
  const mobileMoreId = `${ids}-mobile-more`;

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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMobileMoreOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !mobilePanelRef.current) return;

      const focusables = [
        menuButtonRef.current,
        ...Array.from(mobilePanelRef.current.querySelectorAll<HTMLElement>(focusableSelector)),
      ].filter(Boolean) as HTMLElement[];
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!desktopMoreOpen) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopMoreOpen(false);
    };
    const onPointerDown = (e: MouseEvent) => {
      if (desktopMoreRef.current && !desktopMoreRef.current.contains(e.target as Node)) {
        setDesktopMoreOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [desktopMoreOpen]);

  const go = (page: PageKey) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDesktopMoreOpen(false);
    setMobileMoreOpen(false);
  };

  const warm = (page: PageKey) => {
    onPrefetch?.(page);
  };

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap rounded-sm ${
      active ? 'text-blue-700 border-b-2 border-blue-700 pb-0.5' : 'text-gray-800 hover:text-blue-700'
    }`;

  const onDesktopMoreKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDesktopMoreOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-3">
          <a
            href={PAGE_TO_PATH.home}
            className="flex min-w-0 flex-shrink-0 items-center gap-3 rounded-sm"
            aria-label="RJR Safety Nets home"
            onClick={(e) => {
              e.preventDefault();
              go('home');
            }}
          >
            <picture>
              <source srcSet={logos.navbar.webp} type="image/webp" />
              <img
                src={logos.navbar.src}
                alt=""
                width={logos.navbar.width}
                height={logos.navbar.height}
                className="h-10 w-auto flex-shrink-0"
                loading="eager"
                decoding="async"
                fetchPriority="low"
              />
            </picture>
            <span className="min-w-0">
              <span className="block truncate text-lg font-bold text-blue-700 sm:text-2xl">RJR Safety Nets</span>
              <span className="block text-xs text-gray-700">Bangalore</span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-2 lg:flex xl:gap-x-3">
            {primaryNav.map((item) => {
              const href = PAGE_TO_PATH[item.page];
              const active = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={href}
                  className={linkClass(active)}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={() => warm(item.page)}
                  onFocus={() => warm(item.page)}
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
              ref={desktopMoreRef}
              className="relative"
              onMouseEnter={() => setDesktopMoreOpen(true)}
              onMouseLeave={() => setDesktopMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDesktopMoreOpen((o) => !o)}
                onKeyDown={onDesktopMoreKeyDown}
                aria-haspopup="menu"
                aria-expanded={desktopMoreOpen}
                aria-controls={desktopMoreId}
                className={`${linkClass(isMoreActive)} flex cursor-pointer items-center gap-1 border-b-0 pb-0`}
              >
                More
                <ChevronDown
                  size={16}
                  className={`transition-transform ${desktopMoreOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {desktopMoreOpen && (
                <div
                  id={desktopMoreId}
                  className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-2xl"
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
                          active
                            ? 'bg-blue-50 font-medium text-blue-700'
                            : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                        onMouseEnter={() => warm(item.page)}
                        onFocus={() => warm(item.page)}
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
              className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-xl"
              aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
            >
              <Phone size={18} aria-hidden="true" />
              <span className="hidden text-sm font-semibold xl:inline">Call Now</span>
              <span className="text-sm font-semibold xl:hidden">Call</span>
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex-shrink-0 rounded-md p-2 text-gray-800 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobilePanelId}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id={mobilePanelId}
            ref={mobilePanelRef}
            className="max-h-[calc(100vh-5rem)] animate-slideDown overflow-y-auto border-t py-4 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {primaryNav.map((item) => {
              const href = PAGE_TO_PATH[item.page];
              const active = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={href}
                  className={`block px-4 py-3 text-base font-medium ${
                    active ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'
                  }`}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={() => warm(item.page)}
                  onFocus={() => warm(item.page)}
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
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium ${
                isMoreActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              aria-haspopup="menu"
              aria-expanded={mobileMoreOpen}
              aria-controls={mobileMoreId}
            >
              <span>More services and blog</span>
              <ChevronDown
                size={18}
                className={`transform transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {mobileMoreOpen && (
              <div id={mobileMoreId} className="border-t border-gray-100 bg-gray-50 pl-4" role="menu" aria-label="More pages">
                {moreNav.map((item) => {
                  const href = PAGE_TO_PATH[item.page];
                  const active = currentPage === item.page;
                  return (
                    <a
                      key={item.page}
                      href={href}
                      role="menuitem"
                      className={`block px-4 py-3 text-sm ${active ? 'font-medium text-blue-700' : 'text-gray-800'}`}
                      onMouseEnter={() => warm(item.page)}
                      onFocus={() => warm(item.page)}
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
              className="mx-4 mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-xl"
              aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
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
