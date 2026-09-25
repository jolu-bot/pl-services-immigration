import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FileText,
  Shield,
  Clock,
  Users,
  Plane,
  GraduationCap,
  Briefcase,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const mainServices = [
    {
      icon: Plane,
      title: 'Visa Touristique',
      description: 'Assistance complète pour vos demandes de visa touristique vers toutes destinations.',
      features: ['Préparation des documents', 'Rendez-vous consulaire', 'Suivi de dossier', 'Support 24/7'],
      price: '150,000',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Visa Étudiant',
      description: 'Accompagnement spécialisé pour les étudiants souhaitant poursuivre leurs études à l\'étranger.',
      features: ['Choix d\'université', 'Dossier académique', 'Visa étudiant', 'Recherche de logement'],
      price: '200,000',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Visa de Travail',
      description: 'Solutions professionnelles pour obtenir votre visa de travail et permis de séjour.',
      features: ['Recherche d\'emploi', 'Contrat de travail', 'Permis de travail', 'Installation'],
      price: '300,000',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Heart,
      title: 'Regroupement Familial',
      description: 'Réunissez votre famille grâce à nos services de regroupement familial.',
      features: ['Dossier familial', 'Preuves de lien', 'Logement familial', 'Intégration'],
      price: '250,000',
      gradient: 'from-rose-500 to-red-500',
    },
  ];

  const additionalServices = [
    { icon: FileText, title: 'Traduction Certifiée', description: 'Traduction officielle de tous vos documents par des traducteurs assermentés.' },
    { icon: Shield, title: 'Légalisation de Documents', description: 'Légalisation et apostille de vos documents officiels pour l\'international.' },
    { icon: Clock, title: 'Service Express', description: 'Traitement accéléré de votre dossier pour les demandes urgentes.' },
    { icon: Users, title: 'Consultation Juridique', description: 'Conseils juridiques spécialisés en droit de l\'immigration et des étrangers.' },
  ];

  const process = [
    { step: '01', title: 'Consultation Initiale', description: 'Évaluation gratuite de votre profil et de vos objectifs d\'immigration.' },
    { step: '02', title: 'Préparation du Dossier', description: 'Constitution complète de votre dossier avec tous les documents requis.' },
    { step: '03', title: 'Soumission et Suivi', description: 'Dépôt de votre demande et suivi régulier jusqu\'à l\'obtention du visa.' },
    { step: '04', title: 'Accompagnement Final', description: 'Support pour votre voyage et installation dans votre pays de destination.' },
  ];

  return (
    <div className={isDark ? 'bg-navy-950' : ''}>
      {/* Hero */}
      <section className="relative mesh-bg noise-overlay py-20 lg:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gold-400/10 text-gold-400 border border-gold-400/20">
              Nos Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                {/* Gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>À partir de</p>
                      <p className="text-2xl font-bold gradient-text-gold">{service.price}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>FCFA</p>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{service.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                          isDark ? 'bg-gold-400/10' : 'bg-gold-50'
                        }`}>
                          <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/application"
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center group/btn ${
                      isDark
                        ? 'bg-white/5 text-white hover:bg-gold-400 hover:text-navy-900'
                        : 'bg-navy-50 text-navy-800 hover:bg-navy-800 hover:text-white'
                    }`}
                  >
                    Commencer ma Demande
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`py-20 ${isDark ? 'bg-navy-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
            }`}>
              Services Complémentaires
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Des Services Additionnels
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Pour compléter votre dossier d'immigration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-white group-hover:text-navy-900 transition-colors duration-500" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-navy-900'}`}>{service.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
            }`}>
              Notre Processus
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              4 Étapes Vers Votre Succès
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Un processus simple et transparent pour maximiser vos chances
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className={`hidden lg:block absolute top-12 left-0 right-0 h-0.5 ${isDark ? 'bg-white/5' : 'bg-gray-200'}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-3xl rotate-6 transition-transform duration-500 group-hover:rotate-12" />
                    <div className={`relative w-24 h-24 rounded-3xl flex items-center justify-center ${isDark ? 'bg-navy-900' : 'bg-white'} border-2 border-gold-400/30`}>
                      <span className="text-3xl font-bold gradient-text-gold">{step.step}</span>
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Prêt à Réaliser Votre <span className="gradient-text-gold">Rêve d'Immigration ?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/application" className="btn-gold text-lg group">
                Commencer ma Demande
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                Consultation Gratuite
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
