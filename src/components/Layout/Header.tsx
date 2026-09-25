import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, User, LogOut, Moon, Sun, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const isDark = theme === 'dark';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
            : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : isDark
            ? 'bg-navy-950/80 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ring-2 ring-gold-400/30">
              <img
                src="/P&LS.png"
                alt="P&L Services Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isDark ? 'text-white group-hover:text-gold-400' : 'text-navy-800 group-hover:text-gold-600'
              }`}>
                P&L Services
              </h1>
              <p className={`text-[10px] uppercase tracking-widest font-medium ${isDark ? 'text-gold-400/70' : 'text-gold-600/80'}`}>
                Immigration Excellence
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.href)
                    ? isDark ? 'text-gold-400' : 'text-navy-800'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-navy-800'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-300 ${
                  isActive(item.href) ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase">{i18n.language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                  <div className={`absolute right-0 mt-2 w-36 rounded-xl shadow-xl py-2 z-20 border ${
                    isDark ? 'bg-navy-900 border-white/10' : 'bg-white border-gray-100'
                  }`}>
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${
                        isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">FR</span> Francais
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${
                        isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">EN</span> English
                    </button>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 text-gold-400 hover:bg-white/10 hover:rotate-12'
                  : 'bg-gray-100 text-navy-700 hover:bg-gray-200 hover:rotate-12'
              }`}
              title={isDark ? t('common.light_mode') : t('common.dark_mode')}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className={`h-6 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

            {user ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('nav.dashboard')}</span>
                </Link>
                <button
                  onClick={logout}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isDark ? 'text-gray-300 hover:text-red-400 hover:bg-red-500/10' : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium hidden lg:inline">{t('nav.logout')}</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-navy-800 to-navy-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden border-t ${isDark ? 'border-white/5 bg-navy-950/95' : 'border-gray-100 bg-white/95'} backdrop-blur-xl`}>
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? isDark ? 'bg-gold-500/10 text-gold-400' : 'bg-navy-50 text-navy-800'
                    : isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className={`pt-4 mt-4 border-t space-y-3 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
              <div className="flex items-center space-x-3 px-4">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === 'fr' ? 'bg-gold-500 text-navy-900' : isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === 'en' ? 'bg-gold-500 text-navy-900' : isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                  isDark ? 'bg-white/5 text-gold-400' : 'bg-gray-100 text-navy-700'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="text-sm font-medium">{isDark ? t('common.light_mode') : t('common.dark_mode')}</span>
              </button>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                      isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span>{t('nav.dashboard')}</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                      isDark ? 'text-gray-300 hover:bg-red-500/10 hover:text-red-400' : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <LogOut className="w-5 h-5" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block bg-gradient-to-r from-navy-800 to-navy-900 text-white px-4 py-3 rounded-xl text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.login')}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
