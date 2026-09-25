import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Adresse', details: ['Quartier Bonanjo', 'Douala, Cameroun'], color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Téléphone', details: ['+237 6 81 00 44 26', '+237 XXX XXX XXX'], color: 'from-green-500 to-emerald-500' },
    { icon: Mail, title: 'Email', details: ['contact@plservices.cm', 'info@plservices.cm'], color: 'from-amber-500 to-orange-500' },
    { icon: Clock, title: 'Horaires', details: ['Lun - Ven: 8h00 - 18h00', 'Sam: 9h00 - 13h00'], color: 'from-rose-500 to-red-500' },
  ];

  const services = [
    'Consultation initiale gratuite',
    'Évaluation de profil d\'immigration',
    'Préparation de dossier complet',
    'Accompagnement personnalisé',
    'Suivi de demande en temps réel',
    'Support post-approbation',
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
              Contactez-Nous
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {t('nav.contact')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contactez-nous pour une consultation gratuite et personnalisée
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`py-16 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 ${
                  isDark ? 'bg-navy-900/50 border border-white/5 hover:border-gold-400/20' : 'bg-white border border-gray-100 hover:shadow-premium-lg'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-navy-900'}`}>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className={`py-20 ${isDark ? 'bg-navy-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`rounded-3xl p-8 lg:p-10 ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>
                      Envoyez-nous un Message
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Nous vous répondrons sous 24h</p>
                  </div>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-800 font-medium">Votre message a été envoyé avec succès !</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Prénom *</label>
                      <input
                        {...register('firstName', { required: 'Le prénom est requis' })}
                        type="text"
                        className={isDark ? 'input-dark' : 'input-premium'}
                        placeholder="Votre prénom"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message as string}</p>}
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Nom *</label>
                      <input
                        {...register('lastName', { required: 'Le nom est requis' })}
                        type="text"
                        className={isDark ? 'input-dark' : 'input-premium'}
                        placeholder="Votre nom"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message as string}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email *</label>
                    <input
                      {...register('email', {
                        required: 'L\'email est requis',
                        pattern: { value: /^\S+@\S+$/i, message: 'Format d\'email invalide' },
                      })}
                      type="email"
                      className={isDark ? 'input-dark' : 'input-premium'}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Téléphone</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className={isDark ? 'input-dark' : 'input-premium'}
                      placeholder="+237 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Sujet *</label>
                    <select
                      {...register('subject', { required: 'Le sujet est requis' })}
                      className={isDark ? 'input-dark' : 'input-premium'}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="consultation">Consultation gratuite</option>
                      <option value="visa-tourist">Visa touristique</option>
                      <option value="visa-student">Visa étudiant</option>
                      <option value="visa-work">Visa de travail</option>
                      <option value="family-reunion">Regroupement familial</option>
                      <option value="other">Autre</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message as string}</p>}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message *</label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      rows={5}
                      className={isDark ? 'input-dark' : 'input-premium'}
                      placeholder="Décrivez votre projet d'immigration ou vos questions..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Consultation */}
              <div className={`rounded-3xl p-8 ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-navy-50 border border-navy-100'
              }`}>
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-navy-900" />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>Consultation Gratuite</h3>
                </div>
                <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bénéficiez d'une consultation initiale gratuite de 30 minutes pour évaluer votre profil et discuter de vos options d'immigration.
                </p>
                <div className="space-y-3">
                  {['Évaluation personnalisée', 'Conseils d\'experts', 'Plan d\'action personnalisé'].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        isDark ? 'bg-gold-400/10' : 'bg-gold-50'
                      }`}>
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className={`rounded-3xl p-8 ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}>
                <h3 className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-navy-900'}`}>Nos Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        isDark ? 'bg-gold-400/10' : 'bg-gold-50'
                      }`}>
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className={`rounded-3xl p-8 ${
                isDark ? 'bg-red-950/30 border border-red-500/20' : 'bg-red-50 border border-red-100'
              }`}>
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>Contact d'Urgence</h3>
                </div>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pour les situations urgentes nécessitant une assistance immédiate :
                </p>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-500 font-bold">+237 XXX XXX XXX</span>
                </div>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Disponible 24h/7j pour les urgences</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={`py-20 ${isDark ? 'bg-navy-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
              Notre Localisation
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Visitez notre bureau au cœur de Douala
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl overflow-hidden h-96 flex items-center justify-center ${
              isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-gray-100 border border-gray-200'
            }`}
          >
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-navy-900" />
              </div>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-navy-900'}`}>Quartier Bonanjo</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Douala, Cameroun</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
