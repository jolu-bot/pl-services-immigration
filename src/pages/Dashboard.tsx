import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Upload,
  CreditCard,
  User,
  Calendar,
  Download,
  Eye,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const applications = [
    { id: '1', type: 'Visa Étudiant', country: 'Canada', status: 'under_review' as const, submittedAt: '2024-01-15', progress: 75 },
    { id: '2', type: 'Visa Touristique', country: 'France', status: 'approved' as const, submittedAt: '2024-01-10', progress: 100 },
  ];

  const documents = [
    { name: 'Passeport.pdf', uploadedAt: '2024-01-15', size: '2.3 MB', status: 'verified' as const },
    { name: 'Diplome.pdf', uploadedAt: '2024-01-14', size: '1.8 MB', status: 'pending' as const },
    { name: 'Photo_identite.jpg', uploadedAt: '2024-01-13', size: '0.5 MB', status: 'verified' as const },
  ];

  const stats = [
    { label: 'Demandes Actives', value: '2', icon: FileText, color: 'from-blue-500 to-cyan-500' },
    { label: 'Approuvées', value: '1', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'En Attente', value: '1', icon: Clock, color: 'from-amber-500 to-orange-500' },
    { label: 'Documents', value: '3', icon: Upload, color: 'from-rose-500 to-red-500' },
  ];

  const quickActions = [
    { icon: FileText, label: 'Nouvelle Demande', color: 'text-blue-500' },
    { icon: Upload, label: 'Télécharger Document', color: 'text-green-500' },
    { icon: CreditCard, label: 'Effectuer un Paiement', color: 'text-purple-500' },
    { icon: User, label: 'Mettre à jour le Profil', color: 'text-orange-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return isDark ? 'text-green-400 bg-green-400/10' : 'text-green-700 bg-green-100';
      case 'under_review': return isDark ? 'text-amber-400 bg-amber-400/10' : 'text-amber-700 bg-amber-100';
      case 'rejected': return isDark ? 'text-red-400 bg-red-400/10' : 'text-red-700 bg-red-100';
      default: return isDark ? 'text-gray-400 bg-gray-400/10' : 'text-gray-700 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'under_review': return Clock;
      case 'rejected': return AlertCircle;
      default: return FileText;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Approuvé';
      case 'under_review': return 'En cours d\'examen';
      case 'rejected': return 'Rejeté';
      case 'draft': return 'Brouillon';
      default: return 'Soumis';
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
          }`}>
            <TrendingUp className="w-3 h-3" />
            Tableau de Bord
          </div>
          <h1 className={`text-3xl lg:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-navy-900'}`}>
            {t('dashboard.welcome')}, <span className="gradient-text-gold">{user?.firstName}</span>!
          </h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Gérez vos demandes d'immigration et suivez leur progression
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  <p className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-navy-900'}`}>{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Applications */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{t('dashboard.applications')}</h2>
                <Link to="/application" className="text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors flex items-center group">
                  Nouvelle demande
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {applications.map((app) => {
                  const StatusIcon = getStatusIcon(app.status);
                  return (
                    <div
                      key={app.id}
                      className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-md ${
                        isDark ? 'bg-navy-950/30 border-white/5' : 'bg-gray-50 border-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                            <StatusIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className={`font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{app.type}</h3>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{app.country}</p>
                          </div>
                        </div>
                        <span className={`badge ${getStatusColor(app.status)}`}>{getStatusText(app.status)}</span>
                      </div>

                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Progression</span>
                          <span className={`font-semibold ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>{app.progress}%</span>
                        </div>
                        <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-white/5' : 'bg-gray-200'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${app.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <Calendar className="w-4 h-4 mr-1.5" />
                          Soumis le {new Date(app.submittedAt).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex space-x-3">
                          <button className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'} transition-colors`}>
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>{t('dashboard.documents')}</h3>
                <button className="text-gold-500 hover:text-gold-600 transition-colors">
                  <Upload className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-xl ${
                    isDark ? 'bg-navy-950/30' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-navy-100'}`}>
                        <FileText className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-navy-600'}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-navy-900'}`}>{doc.name}</p>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{doc.size}</p>
                      </div>
                    </div>
                    {doc.status === 'verified' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
              }`}
            >
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>Actions Rapides</h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-300 ${
                      isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                    }`}
                  >
                    <action.icon className={`w-5 h-5 ${action.color}`} />
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{action.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
