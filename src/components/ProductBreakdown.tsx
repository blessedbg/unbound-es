import React from 'react';
import { useTranslation } from 'react-i18next';

// Iconos simples por fase (inline SVGs)
const PhaseIcon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M9 11H7a2 2 0 00-2 2v7a2 2 0 002 2h2a2 2 0 002-2v-7a2 2 0 00-2-2zM13 11h2a2 2 0 012 2v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-7a2 2 0 012-2zM21 11V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PhaseIcon2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PhaseIcon3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PhaseIcon4 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5.67V21.23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const PhaseIcon5 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PhaseIcon6 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductBreakdown: React.FC = () => {
  const { t } = useTranslation();

  const phases = [
    { icon: PhaseIcon1, title: t('productBreakdown.phases.phase1.title'), description: t('productBreakdown.phases.phase1.description'), color: 'from-blue-500 to-indigo-600' },
    { icon: PhaseIcon2, title: t('productBreakdown.phases.phase2.title'), description: t('productBreakdown.phases.phase2.description'), color: 'from-purple-500 to-pink-600' },
    { icon: PhaseIcon3, title: t('productBreakdown.phases.phase3.title'), description: t('productBreakdown.phases.phase3.description'), color: 'from-yellow-500 to-orange-600' },
    { icon: PhaseIcon4, title: t('productBreakdown.phases.phase4.title'), description: t('productBreakdown.phases.phase4.description'), color: 'from-pink-500 to-rose-600' },
    { icon: PhaseIcon5, title: t('productBreakdown.phases.phase5.title'), description: t('productBreakdown.phases.phase5.description'), color: 'from-green-500 to-emerald-600' },
    { icon: PhaseIcon6, title: t('productBreakdown.phases.phase6.title'), description: t('productBreakdown.phases.phase6.description'), color: 'from-red-500 to-pink-600' }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('productBreakdown.headline')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('productBreakdown.subtitle')}
          </p>
        </div>

        {/* Tarjetas de fases */}
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Degradado de fondo sutil */}
              <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {phase.title}
                  </h3>

                  {/* SOLO Fase 1 muestra la fecha de desbloqueo */}
                  {index === 0 && (
                    <p className="text-sm italic mt-2">
                      El contenido de la Fase 1 se desbloquea el <strong>15 de agosto de 2025</strong>.
                    </p>
                  )}

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>

              {/* Borde hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-200 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Se eliminó la sección de “herramientas y recursos” para evitar promesas no exactas */}
      </div>
    </section>
  );
};

export default ProductBreakdown;
