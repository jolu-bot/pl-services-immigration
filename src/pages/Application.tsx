import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Users,
  GraduationCap,
  Briefcase,
  MapPin,
  FileText,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Application: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const steps = [
    { id: 1, name: t('form.personal_info'), icon: User },
    { id: 2, name: t('form.family_info'), icon: Users },
    { id: 3, name: t('form.education'), icon: GraduationCap },
    { id: 4, name: t('form.professional'), icon: Briefcase },
    { id: 5, name: t('form.residence'), icon: MapPin },
    { id: 6, name: t('form.declaration'), icon: FileText },
  ];

  const onSubmit = (data: Record<string, unknown>) => {
    console.log('Form submitted:', data);
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const inputClass = isDark ? 'input-dark' : 'input-premium';
  const labelClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const sectionBg = isDark ? 'bg-navy-950/30 border-white/5' : 'bg-gray-50 border-gray-100';
  const headingClass = isDark ? 'text-white' : 'text-navy-900';

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.personal_info')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.first_name')} *</label>
                <input {...register('firstName', { required: true })} type="text" className={inputClass} placeholder="Votre prénom" />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.last_name')} *</label>
                <input {...register('lastName', { required: true })} type="text" className={inputClass} placeholder="Votre nom de famille" />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.email')} *</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" className={inputClass} placeholder="votre@email.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.phone')} *</label>
                <input {...register('phone', { required: true })} type="tel" className={inputClass} placeholder="+237 XXX XXX XXX" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.birth_date')} *</label>
                <input {...register('birthDate', { required: true })} type="date" className={inputClass} />
                {errors.birthDate && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.birth_place')} *</label>
                <input {...register('birthPlace', { required: true })} type="text" className={inputClass} placeholder="Ville, Pays" />
                {errors.birthPlace && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.nationality')} *</label>
                <select {...register('nationality', { required: true })} className={inputClass}>
                  <option value="">Sélectionnez</option>
                  <option value="cameroon">Camerounaise</option>
                  <option value="france">Française</option>
                  <option value="canada">Canadienne</option>
                  <option value="usa">Américaine</option>
                  <option value="other">Autre</option>
                </select>
                {errors.nationality && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.passport_number')} *</label>
                <input {...register('passportNumber', { required: true })} type="text" className={inputClass} placeholder="Numéro de passeport" />
                {errors.passportNumber && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.address')} *</label>
              <textarea {...register('address', { required: true })} rows={3} className={inputClass} placeholder="Adresse complète avec ville et pays" />
              {errors.address && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.family_info')}</h3>
            <div className={`p-6 rounded-xl border ${sectionBg}`}>
              <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Informations sur les Parents</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Nom complet du père</label>
                  <input {...register('fatherName')} type="text" className={inputClass} placeholder="Nom complet du père" />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de naissance du père</label>
                  <input {...register('fatherBirthDate')} type="date" className={inputClass} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Nom complet de la mère</label>
                  <input {...register('motherName')} type="text" className={inputClass} placeholder="Nom complet de la mère" />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de naissance de la mère</label>
                  <input {...register('motherBirthDate')} type="date" className={inputClass} />
                </div>
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>{t('form.marital_status')} *</label>
              <select {...register('maritalStatus', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="single">Célibataire</option>
                <option value="married">Marié(e)</option>
                <option value="divorced">Divorcé(e)</option>
                <option value="widowed">Veuf/Veuve</option>
              </select>
              {errors.maritalStatus && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            {watch('maritalStatus') === 'married' && (
              <div className={`p-6 rounded-xl border ${sectionBg}`}>
                <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Informations sur le Conjoint</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Nom complet du conjoint</label>
                    <input {...register('spouseName')} type="text" className={inputClass} placeholder="Nom complet du conjoint" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de naissance du conjoint</label>
                    <input {...register('spouseBirthDate')} type="date" className={inputClass} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        );

      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.education')}</h3>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Niveau d'études le plus élevé *</label>
              <select {...register('educationLevel', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="high_school">Lycée / Baccalauréat</option>
                <option value="bachelor">Licence / Bachelor</option>
                <option value="master">Master</option>
                <option value="doctorate">Doctorat</option>
                <option value="other">Autre</option>
              </select>
              {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Domaine d'études *</label>
              <input {...register('fieldOfStudy', { required: true })} type="text" className={inputClass} placeholder="Ex: Informatique, Médecine, Droit" />
              {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Nom de l'établissement *</label>
              <input {...register('institutionName', { required: true })} type="text" className={inputClass} placeholder="Nom de l'université ou école" />
              {errors.institutionName && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de début</label>
                <input {...register('educationStartDate')} type="date" className={inputClass} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de fin *</label>
                <input {...register('educationEndDate', { required: true })} type="date" className={inputClass} />
                {errors.educationEndDate && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              </div>
            </div>
            <div className={`p-6 rounded-xl border ${sectionBg}`}>
              <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Compétences Linguistiques</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Niveau de français</label>
                  <select {...register('frenchLevel')} className={inputClass}>
                    <option value="">Sélectionnez</option>
                    <option value="beginner">Débutant</option>
                    <option value="intermediate">Intermédiaire</option>
                    <option value="advanced">Avancé</option>
                    <option value="native">Natif</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Niveau d'anglais</label>
                  <select {...register('englishLevel')} className={inputClass}>
                    <option value="">Sélectionnez</option>
                    <option value="beginner">Débutant</option>
                    <option value="intermediate">Intermédiaire</option>
                    <option value="advanced">Avancé</option>
                    <option value="native">Natif</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.professional')}</h3>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Situation professionnelle actuelle *</label>
              <select {...register('employmentStatus', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="employed">Employé(e)</option>
                <option value="self_employed">Travailleur indépendant</option>
                <option value="unemployed">Sans emploi</option>
                <option value="student">Étudiant(e)</option>
                <option value="retired">Retraité(e)</option>
              </select>
              {errors.employmentStatus && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            {(watch('employmentStatus') === 'employed' || watch('employmentStatus') === 'self_employed') && (
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Intitulé du poste actuel</label>
                  <input {...register('currentJobTitle')} type="text" className={inputClass} placeholder="Ex: Développeur web" />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Employeur actuel</label>
                  <input {...register('currentEmployer')} type="text" className={inputClass} placeholder="Nom de l'entreprise" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de début</label>
                    <input {...register('employmentStartDate')} type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Date de fin (si applicable)</label>
                    <input {...register('employmentEndDate')} type="date" className={inputClass} />
                  </div>
                </div>
              </div>
            )}
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Années d'expérience professionnelle totale *</label>
              <select {...register('yearsOfExperience', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="0-1">Moins d'un an</option>
                <option value="1-3">1-3 ans</option>
                <option value="3-5">3-5 ans</option>
                <option value="5-10">5-10 ans</option>
                <option value="10+">Plus de 10 ans</option>
              </select>
              {errors.yearsOfExperience && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Compétences principales</label>
              <textarea {...register('skills')} rows={4} className={inputClass} placeholder="Listez vos principales compétences (séparées par des virgules)" />
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.residence')}</h3>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Pays de destination souhaité *</label>
              <select {...register('destinationCountry', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="usa">États-Unis</option>
                <option value="uk">Royaume-Uni</option>
                <option value="australia">Australie</option>
                <option value="germany">Allemagne</option>
                <option value="other">Autre</option>
              </select>
              {errors.destinationCountry && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Motif de la demande d'immigration *</label>
              <select {...register('immigrationPurpose', { required: true })} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="study">Études</option>
                <option value="work">Travail</option>
                <option value="family">Regroupement familial</option>
                <option value="business">Affaires / Investissement</option>
                <option value="refugee">Asile / Réfugié</option>
                <option value="other">Autre</option>
              </select>
              {errors.immigrationPurpose && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Durée de séjour prévue</label>
              <select {...register('intendedDuration')} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="temporary">Temporaire (moins de 6 mois)</option>
                <option value="medium">Moyen terme (6 mois - 2 ans)</option>
                <option value="long">Long terme (2-5 ans)</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>
            <div className={`p-6 rounded-xl border ${sectionBg}`}>
              <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Historique d'immigration</h4>
              <div className="space-y-4">
                <label className={`flex items-start space-x-3 cursor-pointer ${labelClass}`}>
                  <input {...register('hasVisited')} type="checkbox" className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400" />
                  <span className="text-sm">J'ai déjà visité le pays de destination</span>
                </label>
                <label className={`flex items-start space-x-3 cursor-pointer ${labelClass}`}>
                  <input {...register('hasRefusal')} type="checkbox" className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400" />
                  <span className="text-sm">J'ai déjà reçu un refus de visa pour ce pays</span>
                </label>
                {watch('hasRefusal') && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Veuillez expliquer les circonstances du refus</label>
                    <textarea {...register('refusalDetails')} rows={3} className={inputClass} placeholder="Détails du refus précédent" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Capacité financière estimée (FCFA)</label>
              <select {...register('financialCapacity')} className={inputClass}>
                <option value="">Sélectionnez</option>
                <option value="0-1m">Moins de 1 million</option>
                <option value="1m-5m">1-5 millions</option>
                <option value="5m-10m">5-10 millions</option>
                <option value="10m+">Plus de 10 millions</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Informations additionnelles</label>
              <textarea {...register('additionalInfo')} rows={4} className={inputClass} placeholder="Toute information supplémentaire pertinente" />
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${headingClass} mb-6`}>{t('form.declaration')}</h3>
            <div className={`p-6 rounded-xl border ${sectionBg}`}>
              <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Documents Requis</h4>
              <div className="space-y-4">
                <div className={`border-2 border-dashed rounded-xl p-8 text-center ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Glissez-déposez vos documents ici ou cliquez pour sélectionner
                  </p>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="btn-gold cursor-pointer text-sm">
                    Sélectionner les fichiers
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <h5 className={`font-medium ${headingClass}`}>Fichiers téléchargés:</h5>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className={`flex items-center space-x-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={`p-6 rounded-xl border ${isDark ? 'bg-gold-400/5 border-gold-400/20' : 'bg-gold-50 border-gold-100'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${headingClass}`}>Déclaration Officielle</h4>
              <div className="space-y-4">
                <label className={`flex items-start space-x-3 cursor-pointer ${labelClass}`}>
                  <input {...register('declaration1', { required: true })} type="checkbox" className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400" />
                  <span className="text-sm">Je certifie que toutes les informations fournies dans ce formulaire sont exactes et complètes. Je comprends que toute fausse déclaration peut entraîner le rejet de ma demande.</span>
                </label>
                <label className={`flex items-start space-x-3 cursor-pointer ${labelClass}`}>
                  <input {...register('declaration2', { required: true })} type="checkbox" className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400" />
                  <span className="text-sm">J'autorise P&L Services à traiter mes données personnelles dans le cadre de ma demande d'immigration conformément à notre politique de confidentialité.</span>
                </label>
                <label className={`flex items-start space-x-3 cursor-pointer ${labelClass}`}>
                  <input {...register('declaration3', { required: true })} type="checkbox" className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400" />
                  <span className="text-sm">J'accepte les termes et conditions de service de P&L Services.</span>
                </label>
              </div>
              {(errors.declaration1 || errors.declaration2 || errors.declaration3) && (
                <p className="text-red-500 text-sm mt-2">Vous devez accepter toutes les déclarations pour continuer.</p>
              )}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Signature Électronique *</label>
              <input {...register('signature', { required: true })} type="text" className={inputClass} placeholder="Tapez votre nom complet comme signature" />
              {errors.signature && <p className="text-red-500 text-sm mt-1">{t('form.required')}</p>}
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                En tapant votre nom, vous acceptez que ceci constitue votre signature électronique légale.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark ? 'bg-white/5 text-gold-400' : 'bg-navy-100 text-navy-700'
          }`}>
            Demande d'Immigration
          </div>
          <h1 className={`text-3xl lg:text-4xl font-bold mb-3 ${headingClass}`}>{t('form.title')}</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Remplissez ce formulaire pour commencer votre demande d'immigration
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl border-2 transition-all duration-300 ${
                      currentStep >= step.id
                        ? 'bg-gradient-to-br from-gold-400 to-gold-500 border-gold-400 text-navy-900'
                        : isDark
                          ? 'bg-navy-900 border-white/10 text-gray-600'
                          : 'bg-white border-gray-200 text-gray-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <p className={`mt-2 text-[10px] md:text-xs font-medium text-center max-w-[80px] ${
                    currentStep >= step.id ? (isDark ? 'text-gold-400' : 'text-navy-800') : (isDark ? 'text-gray-600' : 'text-gray-400')
                  }`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1 md:mx-2 mb-6 rounded-full transition-all duration-300 ${
                    currentStep > step.id ? 'bg-gold-400' : isDark ? 'bg-white/5' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`rounded-3xl p-8 mb-8 ${
            isDark ? 'bg-navy-900/50 border border-white/5' : 'bg-white border border-gray-100 shadow-premium'
          }`}>
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : isDark
                    ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Précédent
            </button>

            {currentStep === steps.length ? (
              <button type="submit" className="btn-gold text-lg">
                {t('form.submit')}
                <CheckCircle className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button type="button" onClick={nextStep} className="btn-gold text-lg">
                Suivant
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
