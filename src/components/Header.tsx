import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { logos } from '../assets/images';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Services', dropdown: true },
    { name: 'About Us', href: 'about' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  const services = [
    { name: 'Balcony Safety Nets', href: 'balcony' },
    { name: 'Pigeon Safety Nets', href: 'pigeon' },
    { name: 'Children Safety Nets', href: 'children' },
    { name: 'Monkey Safety Nets', href: 'monkey' },
    { name: 'Cloth Hanger Nets', href: 'cloth-hanger' },
    { name: 'Invisible Grills', href: 'invisible-grills' },
    { name: 'Construction Safety Nets', href: 'construction' },
    { name: 'Sports Practice Nets', href: 'sports' },
  ];

  // Check if current page is a service page
  const servicePages = ['balcony', 'pigeon', 'children', 'monkey', 'cloth-hanger', 'invisible-grills', 'construction', 'sports'];
  const isServicePage = servicePages.includes(currentPage);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => onNavigate('home')}>
            <img 
              src={logos.navbar} 
              alt="RJR Safety Nets Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">RJR Safety Nets</h1>
              <p className="text-xs text-gray-600">Bangalore</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  // Attach hover handlers to the wrapper so moving between button & panel doesn't close it
                  <div
                    className={`flex items-center text-sm font-medium transition-colors ${
                      isServicePage ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDesktopServicesOpen((s) => !s)}
                      aria-haspopup="menu"
                      aria-expanded={desktopServicesOpen}
                      className="cursor-pointer flex items-center"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate(item.href!)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </button>
                )}

                {item.dropdown && desktopServicesOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                    role="menu"
                    aria-label="Services"
                  >
                    {services.map((service) => (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => {
                          onNavigate(service.href);
                          setDesktopServicesOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentPage === service.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+917075051812"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full text-left px-4 py-2 text-sm font-medium ${
                        isServicePage 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-haspopup="menu"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-6 py-2 bg-gray-50" role="menu" aria-label="Services">
                        {services.map((service) => (
                          <button
                            key={service.name}
                            type="button"
                            onClick={() => {
                              onNavigate(service.href);
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              currentPage === service.href
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.href!);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                      currentPage === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <a
              href="tel:+917075051812"
              className="flex items-center gap-2 mx-4 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}