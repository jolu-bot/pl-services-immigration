import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FileText,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Headphones,
  Plane,
  GraduationCap,
  Briefcase,
  Heart,
  Star,
  Quote,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    { icon: FileText, title: t('services.visa_assistance.title'), description: t('services.visa_assistance.description') },
    { icon: Shield, title: t('services.document_preparation.title'), description: t('services.document_preparation.description') },
    { icon: Clock, title: t('services.legal_consultation.title'), description: t('services.legal_consultation.description') },
    { icon: Users, title: t('services.application_tracking.title'), description: t('services.application_tracking.description') },
  ];

  const visaTypes = [
    { icon: Plane, title: 'Visa Touristique', desc: 'Voyage et découverte', color: 'from-blue-500 to-cyan-500' },
    { icon: GraduationCap, title: 'Visa Étudiant', desc: 'Études à l\'tranger', color: 'from-purple-500 to-pink-500' },
    { icon: Briefcase, title: 'Visa de Travail', desc: 'Opportunités professionnelles', color: 'from-amber-500 to-orange-500' },
    { icon: Heart, title: 'Regroupement Familial', desc: 'Retrouvez vos proches', color: 'from-rose-500 to-red-500' },
  ];

  const stats = [
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '95%', label: 'Taux de Réussite' },
    { number: '10+', label: 'Années d\'Expérience' },
    { number: '25+', label: 'Pays de Destination' },
  ];

  const features = [
    { icon: Globe, title: 'Expertise Internationale', description: 'Connaissance approfondie des réglementations d\'immigration mondiales' },
    { icon: Award, title: 'Excellence Reconnue', description: 'Cabinet certifié avec une réputation établie à Douala' },
    { icon: Headphones, title: 'Support Personnalisé', description: 'Accompagnement individuel tout au long de votre parcours' },
  ];

  const testimonials = [
    { name: 'Marie Kouam', role: 'Étudiante au Canada', content: 'Grâce à P&L Services, j\'ai pu réaliser mon rêve d\'étudier au Canada. Leur accompagnement a été exceptionnel.', rating: 5 },
    { name: 'Paul Ngono', role: 'Ingénieur en France', content: 'L\'équipe de P&L Services m\'a aidé à obtenir mon visa de travail pour la France. Professionnalisme et efficacité.', rating: 5 },
    { name: 'Sandra Biya', role: 'Résidente Permanente au Canada', content: 'Un cabinet sérieux qui m\'a accompagnée dans toutes les étapes de ma demande de résidence permanente.', rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className={`relative min-h-[90vh] flex items-center ${isDark ? 'mesh-bg' : 'bg-gradient-to-br from-navy-50 via-white to-gold-50'} noise-overlay`}>
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                isDark ? 'bg-gold-400/10 text-gold-400 border border-gold-400/20' : 'bg-gold-50 text-gold-700 border border-gold-200'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
                Cabinet d'Immigration #1 à Douala
              </div>

              <h1 className={`text-4xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-navy-900'}`}>
                Votre Partenaire de <br />
                <span className="gradient-text-gold">Confiance</span> pour <br />
                l'Immigration
              </h1>

              <p className={`text-lg lg:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/application" className="btn-gold text-lg group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className={`btn-outline text-lg ${isDark ? 'border-white/30 text-white hover:bg-white hover:text-navy-900' : ''}`}
                >
                  {t('hero.cta_secondary')}
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 ${isDark ? 'border-navy-950' : 'border-white'} bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white text-xs font-bold`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                    ))}
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>500+ clients satisfaits</p>
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-3xl p-1 ${isDark ? 'bg-gradient-to-br from-white/10 to-transparent' : 'bg-gradient-to-br from-navy-100 to-gold-100'}`}>
                <div className={`rounded-3xl p-8 ${isDark ? 'bg-navy-900/80 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl'}`}>
                  <div className="space-y-5">
                    {[
                      { icon: CheckCircle, title: 'Processus Simplifié', desc: 'Démarches digitalisées et sécurisées', color: 'from-green-400 to-emerald-500' },
                      { icon: Clock, title: 'Suivi en Temps Réel', desc: 'Tableau de bord personnalisé', color: 'from-amber-400 to-gold-500' },
                      { icon: Shield, title: 'Sécurité Maximale', desc: 'Protection des données garantie', color: 'from-blue-400 to-navy-600' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                        className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                          isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{item.title}</h3>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 px-5 py-3 rounded-2xl shadow-gold font-bold text-sm"
              >
                95% Taux de Réussite
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={`py-12 ${isDark ? 'bg-navy-900/50' : 'bg-navy-800'} relative overflow-hidden`}>
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-5xl font-bold gradient-text-gold mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
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
              Nos Domaines d'Expertise
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Types de Visa que Nous Traitions
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Une expertise complète pour tous vos projets d'immigration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${visa.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <visa.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-navy-900'}`}>{visa.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{visa.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors group/link">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-20 ${isDark ? 'bg-navy-900/30' : 'bg-white'}`}>
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
              {t('services.title')}
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Nos Services d'Immigration
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white group-hover:text-navy-900 transition-colors duration-500" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Pourquoi Choisir P&L Services ?
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Notre expertise et notre engagement font la différence dans votre parcours d'immigration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-10 h-10 text-white group-hover:text-navy-900 transition-colors duration-500" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-navy-900/30' : 'bg-white'}`}>
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
              Témoignages
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Ce Que Disent Nos Clients
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <Quote className="w-10 h-10 text-gold-400/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{testimonial.name}</p>
                    <p className="text-xs text-gold-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
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
              Prêt à Commencer Votre <br className="hidden lg:block" />
              <span className="gradient-text-gold">Parcours d'Immigration ?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Rejoignez des centaines de clients satisfaits qui ont réalisé leurs rêves avec P&L Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/application" className="btn-gold text-lg group">
                Démarrer ma Demande
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
