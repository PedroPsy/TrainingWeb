import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal.jsx';

/* ─── icons (inline SVG, lucide-style) ─── */
const CheckCircle2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const MessageCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ─── plan data ─── */
const PLANS = [
  {
    id: 'online',
    title: 'Consultoria Online',
    price: 'R$ 99',
    period: '/mês',
    highlight: false,
    badge: null,
    features: ['Treino via App', 'Suporte no WhatsApp', 'Ajuste Mensal'],
  },
  {
    id: 'presencial',
    title: 'Personal Presencial',
    price: 'R$ 450',
    period: '/mês',
    highlight: true,
    badge: 'Mais Procurado',
    features: ['3x por semana', 'Acompanhamento lado a lado', 'Avaliação Física', 'Suporte 24/7'],
  },
  {
    id: 'hibrido',
    title: 'Plano Híbrido',
    price: 'R$ 250',
    period: '/mês',
    highlight: false,
    badge: null,
    features: ['1x presencial/semana', 'Planilha para dias online', 'Metas quinzenais'],
  },
];

/* ─── component ─── */
export default function Plans({ whatsapp }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  function handleWhatsAppRedirect() {
    if (!selectedPlan) return;
    const plan = PLANS.find((p) => p.id === selectedPlan);
    if (!plan) return;
    const msg = encodeURIComponent(`Olá, Pedro! Tenho interesse no plano: ${plan.title}`);
    window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
  }

  return (
    <section id="planos" className="py-24 bg-brand-card border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Assine seu <span className="text-brand-blue">Plano</span>
            </h2>
            <p className="text-zinc-400">
              Clique no card para selecionar e enviar sua escolha direto pelo WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;

            /* base classes always present */
            const baseClasses =
              'relative rounded-3xl p-8 border cursor-pointer ' +
              'transition-all duration-300 ' +
              'hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]';

            /* conditional: selected vs. unselected */
            const stateClasses = isSelected
              ? 'border-brand-blue ring-2 ring-brand-blue/50 bg-brand-blue/10'
              : plan.highlight
              ? 'border-brand-blue/40 bg-gradient-to-b from-brand-blue/20 to-brand-card opacity-80 hover:opacity-100'
              : 'border-zinc-800 bg-brand-bg opacity-70 hover:opacity-100';

            /* extra lift for the featured card */
            const featuredClass = plan.highlight ? 'md:-translate-y-4' : '';

            return (
              <ScrollReveal key={plan.id} delay={index * 150}>
                <div
                  className={`${baseClasses} ${stateClasses} ${featuredClass}`}
                  onClick={() => setSelectedPlan(plan.id)}
                  role="button"
                  aria-pressed={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedPlan(plan.id)}
                >
                  {/* "Mais Procurado" badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-blue text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  {/* selected checkmark */}
                  {isSelected && (
                    <span className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue text-white">
                      <CheckIcon />
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-zinc-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                        <span className="text-brand-blue"><CheckCircle2 /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── CTA principal ── */}
        <ScrollReveal delay={400}>
          <div className="mt-14 text-center flex flex-col items-center">
            <button
              onClick={handleWhatsAppRedirect}
              disabled={!selectedPlan}
              className={`inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white transition-all ${
                selectedPlan
                  ? 'bg-brand-blue hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 cursor-pointer'
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
              }`}
            >
              <MessageCircle />
              {selectedPlan
                ? `Continuar com ${PLANS.find((p) => p.id === selectedPlan)?.title}`
                : 'Selecione um plano acima'}
            </button>

            {!selectedPlan && (
              <p className="text-zinc-500 text-xs mt-3">
                Clique em um dos cards para habilitar o contato direto.
              </p>
            )}

            {selectedPlan && (
              <p className="text-zinc-500 text-xs mt-3">
                Você será redirecionado para o WhatsApp com sua escolha preenchida.
              </p>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
