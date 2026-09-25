import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowRight, Send } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('form.title'), href: '/application' },
  ];

  return (
    <footer className={`relative overflow-hidden ${isDark ? 'bg-navy-950' : 'bg-navy-900'} text-white`}>
      <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-gold-400/30">
                <img src="/P&LS.png" alt="P&L Services Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">P&L Services</h3>
                <p className="text-[10px] uppercase tracking-widest text-gold-400/80">Immigration Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/30 hover:bg-gold-400/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-5">{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-gold-500 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-5">{t('footer.contact_info')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/237681004426" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +237 6 81 00 44 26
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-5">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos conseils immigration directement dans votre boite mail.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 py-3 rounded-xl font-bold text-sm hover:shadow-gold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                S'abonner
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/legal" className="text-xs text-gray-500 hover:text-gold-400 transition-colors">{t('footer.legal')}</Link>
              <span className="text-gray-700">-</span>
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-gold-400 transition-colors">{t('footer.privacy')}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            (c) 2025 P&L Services. Tous droits reserves.
          </p>
          <p className="text-gray-500 text-sm">
            {t('footer.powered_by')} <span className="gradient-text-gold font-semibold">JoYed'D</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
