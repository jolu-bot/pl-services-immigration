import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Globe,
  Shield,
  Star,
  MapPin,
  Phone,
  Mail,
  Quote,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const values = [
    { icon: Shield, title: 'Intégrité', description: 'Nous agissons avec transparence et honnêteté dans toutes nos interactions.' },
    { icon: Award, title: 'Excellence', description: 'Nous visons l\'excellence dans chaque service que nous offrons à nos clients.' },
    { icon: Users, title: 'Accompagnement', description: 'Nous accompagnons personnellement chaque client dans son parcours d\'immigration.' },
    { icon: Globe, title: 'Expertise Internationale', description: 'Notre connaissance des réglementations mondiales garantit votre succès.' },
  ];

  const team = [
    { name: 'Line Mkam', role: 'Directrice Générale', description: 'Experte en droit de l\'immigration', initial: 'L' },
    { name: 'Kevine Nguendeu', role: 'Consultante Senior', description: 'Spécialiste des visas étudiants et de travail', initial: 'K' },
    { name: 'Patrick Tzeuton', role: 'Conseiller Juridique', description: 'Expert en droit international et immigration', initial: 'P' },
  ];

  const achievements = [
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '95%', label: 'Taux de Réussite' },
    { number: '5+', label: 'Années d\'Expérience' },
    { number: '25+', label: 'Pays de Destination' },
  ];

  const testimonials = [
    { name: 'Marie Kouam', role: 'Étudiante au Canada', content: 'Grâce à P&L Services, j\'ai pu réaliser mon rêve d\'étudier au Canada. Leur accompagnement a été exceptionnel du début à la fin.', rating: 5 },
    { name: 'Paul Ngono', role: 'Ingénieur en France', content: 'L\'équipe de P&L Services m\'a aidé à obtenir mon visa de travail pour la France. Professionnalisme et efficacité au rendez-vous.', rating: 5 },
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
              À Propos de Nous
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              À Propos de <span className="gradient-text-gold">P&L Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre partenaire de confiance pour l'immigration depuis plus de 5 ans à Douala, Cameroun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
              }`}>
                Notre Histoire
              </div>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-navy-900'}`}>
                Un Cabinet Né d'une Vision
              </h2>
              <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  Fondé en 2020 à Douala, P&L Services est né de la vision de faciliter les démarches d'immigration
                  pour les citoyens camerounais et africains souhaitant réaliser leurs rêves à l'international.
                </p>
                <p>
                  Avec plus de 5 années d'expérience, nous avons accompagné plus de 500 clients dans leurs projets
                  d'immigration vers le Canada, la France, les États-Unis, l'Australie et bien d'autres destinations.
                </p>
                <p>
                  Notre expertise reconnue et notre approche personnalisée nous ont permis d'atteindre un taux de
                  réussite de 95%, faisant de nous l'un des cabinets d'immigration les plus fiables du Cameroun.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className={`relative rounded-3xl overflow-hidden p-1 ${isDark ? 'bg-gradient-to-br from-white/10 to-transparent' : 'bg-gradient-to-br from-navy-100 to-gold-100'}`}>
                <div className={`rounded-3xl aspect-[4/3] flex items-center justify-center ${isDark ? 'bg-navy-900' : 'bg-white'}`}>
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-10 h-10 text-navy-900" />
                    </div>
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>P&L Services</p>
                    <p className="text-gold-500 text-sm mt-1">Depuis 2020</p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 p-5 rounded-2xl shadow-gold"
              >
                <div className="text-3xl font-bold">5+</div>
                <div className="text-xs font-semibold">Années d'Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nos Valeurs
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Les Principes Qui Nous Guident
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Notre engagement envers nos clients se traduit par des valeurs fortes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500 group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-white group-hover:text-navy-900 transition-colors duration-500" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{value.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Notre Équipe
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Des Professionnels Dédiés
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Des experts expérimentés dédiés à votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-gray-50 border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mx-auto mb-5 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-white group-hover:text-navy-900 transition-colors duration-500">{member.initial}</span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-navy-900'}`}>{member.name}</h3>
                <p className="text-gold-500 font-semibold text-sm mb-3">{member.role}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-20 mesh-bg overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Nos Réalisations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre expertise et de notre engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-6xl font-bold gradient-text-gold mb-2">{achievement.number}</div>
                <div className="text-gray-300 font-medium text-sm uppercase tracking-wider">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-navy-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Témoignages Clients
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100'
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
                <div>
                  <p className={`font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{testimonial.name}</p>
                  <p className="text-xs text-gold-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Nous Contacter
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Visitez notre bureau à Douala ou contactez-nous pour une consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: 'Adresse', lines: ['Quartier Bonanjo', 'Douala, Cameroun'] },
              { icon: Phone, title: 'Téléphone', lines: ['+237 6 81 00 44 26', '+237 XXX XXX XXX'] },
              { icon: Mail, title: 'Email', lines: ['contact@plservices.cm', 'info@plservices.cm'] },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-navy-900'}`}>{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
