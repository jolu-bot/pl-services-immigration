import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Privacy: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sections = [
    {
      icon: UserCheck,
      title: 'Introduction',
      paragraphs: [
        'P&L Services s\'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez nos services d\'immigration.',
        'En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.',
      ],
    },
    {
      icon: Database,
      title: t('privacy.data_collection'),
      paragraphs: [t('privacy.data_collection_text')],
      listTitle: 'Types de données collectées :',
      list: [
        'Informations personnelles : nom, prénom, date de naissance, nationalité',
        'Coordonnées : adresse, téléphone, email',
        'Documents d\'identité : passeport, carte d\'identité, acte de naissance',
        'Informations familiales : situation matrimoniale, enfants, parents',
        'Parcours professionnel et éducatif : diplômes, expériences professionnelles',
        'Informations financières : revenus, relevés bancaires (si nécessaire)',
        'Données de navigation : adresse IP, cookies, historique de navigation',
      ],
    },
    {
      icon: Eye,
      title: t('privacy.data_usage'),
      paragraphs: [t('privacy.data_usage_text')],
      listTitle: 'Finalités du traitement :',
      list: [
        'Traitement de vos demandes d\'immigration',
        'Préparation et soumission de dossiers aux autorités compétentes',
        'Communication avec vous concernant votre dossier',
        'Respect des obligations légales et réglementaires',
        'Amélioration de nos services',
        'Envoi d\'informations pertinentes sur l\'immigration (avec votre consentement)',
      ],
    },
    {
      icon: Lock,
      title: t('privacy.data_security'),
      paragraphs: [t('privacy.data_security_text')],
      listTitle: 'Mesures de sécurité mises en place :',
      list: [
        'Chiffrement : Toutes les données sensibles sont chiffrées',
        'Accès restreint : Seul le personnel autorisé peut accéder à vos données',
        'Authentification forte : Systèmes de connexion sécurisés',
        'Sauvegardes sécurisées : Copies de sauvegarde chiffrées et protégées',
        'Surveillance continue : Monitoring des accès et des activités',
        'Formation du personnel : Sensibilisation à la protection des données',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Partage des Données',
      paragraphs: [
        'Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins commerciales. Vos données peuvent être partagées uniquement dans les cas suivants :',
      ],
      list: [
        'Autorités gouvernementales : Dans le cadre de vos demandes d\'immigration',
        'Partenaires autorisés : Traducteurs, notaires (avec votre consentement)',
        'Obligations légales : Si requis par la loi ou une décision de justice',
        'Prestataires techniques : Hébergement sécurisé, maintenance (sous contrat strict)',
      ],
    },
    {
      icon: UserCheck,
      title: 'Vos Droits',
      paragraphs: ['Conformément à la réglementation en vigueur, vous disposez des droits suivants :'],
      list: [
        'Droit d\'accès : Consulter les données que nous détenons sur vous',
        'Droit de rectification : Corriger les données inexactes ou incomplètes',
        'Droit à l\'effacement : Demander la suppression de vos données',
        'Droit à la portabilité : Récupérer vos données dans un format structuré',
        'Droit d\'opposition : Vous opposer au traitement de vos données',
        'Droit de limitation : Limiter le traitement de vos données',
      ],
      footerText: 'Pour exercer ces droits, contactez-nous à : privacy@plservices.cm',
    },
    {
      title: 'Conservation des Données',
      paragraphs: ['Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :'],
      list: [
        'Dossiers actifs : Pendant toute la durée du traitement de votre demande',
        'Dossiers approuvés : 10 ans après l\'obtention du visa',
        'Dossiers rejetés : 5 ans après le rejet final',
        'Données de navigation : 13 mois maximum',
        'Correspondances : 3 ans après la dernière interaction',
      ],
    },
    {
      title: 'Cookies et Technologies Similaires',
      paragraphs: ['Notre site utilise des cookies pour améliorer votre expérience utilisateur :'],
      list: [
        'Cookies essentiels : Nécessaires au fonctionnement du site',
        'Cookies de performance : Analyse de l\'utilisation du site',
        'Cookies de préférence : Mémorisation de vos choix (langue, etc.)',
      ],
      footerText: 'Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.',
    },
    {
      title: 'Transferts Internationaux',
      paragraphs: ['Dans le cadre de nos services d\'immigration, vos données peuvent être transférées vers les pays de destination de votre demande. Ces transferts sont effectués uniquement :'],
      list: [
        'Avec votre consentement explicite',
        'Dans le cadre de votre demande d\'immigration',
        'Vers des pays offrant un niveau de protection adéquat',
        'Avec des garanties appropriées (clauses contractuelles types)',
      ],
    },
    {
      title: 'Modifications',
      paragraphs: ['Cette politique de confidentialité peut être mise à jour périodiquement. Nous vous informerons de tout changement significatif par email ou via notre site web.'],
    },
  ];

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
          <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-navy-900" />
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
          }`}>
            Confidentialité
          </div>
          <h1 className={`text-3xl lg:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>
            {t('privacy.title')}
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Votre confidentialité est notre priorité absolue
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
          {sections.map((section, i) => (
            <section key={i}>
              {section.icon && (
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-gold-500 mr-3" />
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{section.title}</h2>
                </div>
              )}
              {!section.icon && (
                <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>{section.title}</h2>
              )}
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p}</p>
                ))}
                {section.listTitle && (
                  <h3 className={`text-base font-semibold mt-4 mb-2 ${isDark ? 'text-white' : 'text-navy-900'}`}>{section.listTitle}</h3>
                )}
                {section.list && (
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {section.list.map((item, j) => {
                      const colonIdx = item.indexOf(':');
                      const hasColon = colonIdx > 0;
                      const label = hasColon ? item.substring(0, colonIdx) : '';
                      const rest = hasColon ? item.substring(colonIdx + 1) : item;
                      return (
                        <li key={j} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 flex-shrink-0" />
                          <span>
                            {hasColon && <strong className={isDark ? 'text-white' : 'text-navy-900'}>{label}:</strong>}
                            {rest}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {section.footerText && (
                  <p className={`text-sm mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{section.footerText}</p>
                )}
              </div>
            </section>
          ))}

          {/* Contact card */}
          <section>
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>Contact</h2>
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-gold-400/5 border border-gold-400/20' : 'bg-gold-50 border border-gold-100'}`}>
              <p className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>Délégué à la Protection des Données</p>
              <div className="space-y-2">
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Mail className="w-4 h-4 text-gold-500 mr-3" />
                  privacy@plservices.cm
                </div>
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Phone className="w-4 h-4 text-gold-500 mr-3" />
                  +237 XXX XXX XXX
                </div>
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <MapPin className="w-4 h-4 text-gold-500 mr-3" />
                  Quartier Bonanjo, Douala, Cameroun
                </div>
              </div>
            </div>
          </section>

          {/* Last update */}
          <div className="border-t pt-6" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <strong>Dernière mise à jour :</strong> 15 janvier 2024
            </p>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Pour toute question concernant cette politique, contactez-nous à{' '}
            <a href="mailto:privacy@plservices.cm" className="text-gold-500 hover:text-gold-600 font-semibold transition-colors">
              privacy@plservices.cm
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
