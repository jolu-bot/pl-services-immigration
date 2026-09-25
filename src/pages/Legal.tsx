import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Legal: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className={`text-3xl lg:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>
            {t('legal.title')}
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Informations légales et réglementaires de P&L Services
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`rounded-3xl p-8 lg:p-10 space-y-8 ${
            isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
          }`}
        >
          {[
            { icon: FileText, title: 'Informations sur la Société', content: (
              <>
                <p><strong>Dénomination sociale :</strong> {t('legal.company_name')}</p>
                <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</p>
                <p><strong>Siège social :</strong> Quartier Bonanjo, Douala, Cameroun</p>
                <p><strong>Registre du Commerce :</strong> {t('legal.registration')}</p>
                <p><strong>Numéro d'identification fiscale :</strong> M012345678901A</p>
                <p><strong>Capital social :</strong> 5.000.000 FCFA</p>
              </>
            )},
            { icon: Shield, title: t('legal.director'), content: (
              <>
                <p><strong>Directeur de la publication :</strong> Pierre MBALLA</p>
                <p><strong>Qualité :</strong> Gérant de P&L Services SARL</p>
                <p><strong>Contact :</strong> contact@plservices.cm</p>
              </>
            )},
            { icon: AlertCircle, title: t('legal.hosting'), content: (
              <>
                <p><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
                <p><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                <p><strong>Site web :</strong> www.hostinger.com</p>
              </>
            )},
          ].map((section, i) => (
            <section key={i}>
              <div className="flex items-center mb-4">
                <section.icon className="w-6 h-6 text-gold-500 mr-3" />
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{section.title}</h2>
              </div>
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{section.content}</div>
            </section>
          ))}

          {[
            { title: 'Propriété Intellectuelle', paragraphs: [
              'L\'ensemble de ce site relève de la législation camerounaise et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.',
              'La reproduction de tout ou partie de ce site sur un support électronique quel qu\'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.',
            ]},
            { title: t('legal.liability'), paragraphs: [
              t('legal.liability_text'),
              'P&L Services ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l\'utilisateur, lors de l\'accès au site.',
            ]},
            { title: 'Réglementation Professionnelle', paragraphs: [
              'P&L Services exerce ses activités de conseil en immigration dans le respect de la réglementation camerounaise et internationale applicable.',
              'Autorité de contrôle : Ministère de la Justice du Cameroun',
            ]},
            { title: 'Droit Applicable', paragraphs: [
              'Les présentes mentions légales sont régies par le droit camerounais. En cas de litige, les tribunaux camerounais seront seuls compétents.',
              'Pour toute question : legal@plservices.cm',
            ]},
          ].map((section, i) => (
            <section key={i}>
              <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t pt-6" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <strong>Dernière mise à jour :</strong> 15 janvier 2024
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
