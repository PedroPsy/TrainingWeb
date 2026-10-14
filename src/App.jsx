import { useState, useEffect } from 'react';
import Plans from './components/Plans.jsx';
import { ScrollReveal } from './components/ScrollReveal.jsx';


/* ─────────────────────────────────────────────
   Inline SVG icons (lucide-style, no external dep)
───────────────────────────────────────────── */
const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MessageCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const CheckCircle2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const Dumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.4 14.4 9.6 9.6"/>
    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.768 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.768a2 2 0 1 1 2.828 2.829z"/>
    <path d="M2.515 5.343a2 2 0 1 1 2.828-2.829l1.768 1.767a2 2 0 1 1 2.829-2.828l-6.364 6.364a2 2 0 1 1-2.829-2.829l1.768-1.768a2 2 0 1 1-2.828-2.828z"/>
  </svg>
);

const Activity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const Trophy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);

const ClipboardList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>
  </svg>
);

/* ─────────────────────────────────────────────
   Site config  (= src/config/site-config)
───────────────────────────────────────────── */
const SITE = {
  name:      'Treinador Pedro',
  title:     'Personal Trainer & Consultoria',
  cref:      'CREF 012345-G/PB',
  whatsapp:  '5511999999999',
  instagram: 'pedro.fit',
  stats: { number: '+500', label: 'Alunos transformados com resultados reais' },
  services: [
    {
      icon:  <Dumbbell />,
      title: 'Personal Trainer Presencial',
      badge: 'Mais Procurado',
      desc:  'Acompanhamento lado a lado, correção de execução e foco total no seu progresso.',
    },
    {
      icon:  <Activity />,
      title: 'Consultoria Online',
      badge: 'Planos Mensais',
      desc:  'Treinos personalizados, suporte no WhatsApp e ajuste mensal sem sair de casa.',
    },
    {
      icon:  <ClipboardList />,
      title: 'Avaliação Física e Postural',
      badge: 'Presencial',
      desc:  'Diagnóstico completo para montar um plano 100% adequado ao seu corpo e objetivo.',
    },
  ],
};

/* ─────────────────────────────────────────────
   SplashIntro  (src/components/SplashIntro)
───────────────────────────────────────────── */
function SplashIntro({ onDone }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg">
      {/* Animated logo text */}
      <h1 className="text-3xl font-black text-white tracking-widest opacity-0 animate-logo-reveal">
        PEDRO<span className="text-brand-blue">.FIT</span>
      </h1>
      <p className="mt-3 text-xs text-zinc-500 tracking-widest uppercase opacity-0 animate-fade-in delay-300">
        Personal Trainer &amp; Consultoria
      </p>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
        <div
          className="h-full bg-brand-blue animate-progress-load"
          onAnimationEnd={onDone}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Safety fallback: remove splash after 2 s even if animationend doesn't fire
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const WA = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      {showSplash && <SplashIntro onDone={() => setShowSplash(false)} />}

      <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-blue selection:text-white">

        {/* ── Navbar ── */}
        <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-zinc-800 transition-all">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="text-2xl font-black tracking-tighter text-white">
              PEDRO<span className="text-brand-blue">.FIT</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="#inicio"   className="hover:text-white transition-colors">Início</a>
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              <a href="#sobre"    className="hover:text-white transition-colors">Sobre</a>
              <a href="#planos"   className="hover:text-white transition-colors">Planos</a>
              <a
                href={`${WA}?text=Olá! Gostaria de agendar uma avaliação.`}
                target="_blank" rel="noreferrer"
                className="bg-brand-blue hover:bg-brand-dark text-white px-5 py-2.5 rounded-full transition-all flex items-center gap-2"
              >
                <MessageCircle /> Agendar Agora
              </a>
            </nav>
            {/* Mobile CTA */}
            <a
              href={`${WA}?text=Olá! Gostaria de agendar uma avaliação.`}
              target="_blank" rel="noreferrer"
              className="md:hidden bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1"
            >
              <MessageCircle /> Agendar
            </a>
          </div>
        </header>

        {/* ── Hero ── */}
        <section
          id="inicio"
          className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-brand-bg"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/15 rounded-full blur-[130px] opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">

              {/* Badge – delay 150 ms */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-800 text-brand-blue text-sm font-semibold mb-6 opacity-0 animate-fade-up delay-150"
              >
                <Trophy />
                {SITE.stats.number} {SITE.stats.label}
              </div>

              {/* Headline – delay 300 ms */}
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 opacity-0 animate-fade-up delay-300">
                Construa o seu melhor shape com{' '}
                <span className="text-brand-blue">resultados reais</span>.
              </h1>

              {/* Sub-line – delay 450 ms */}
              <p className="text-lg text-zinc-400 mb-2 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-up delay-450">
                {SITE.name} · {SITE.title}
              </p>
              <p className="text-sm text-zinc-500 mb-10 opacity-0 animate-fade-up delay-450">
                {SITE.cref}
              </p>

              {/* CTAs – delay 600 ms */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-up delay-600">
                <a
                  href={`${WA}?text=Olá! Quero agendar minha avaliação física.`}
                  target="_blank" rel="noreferrer"
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  Agende agora sua avaliação <ArrowRight />
                </a>
                <a
                  href="#planos"
                  className="w-full sm:w-auto border border-zinc-700 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Assine nossos planos
                </a>
              </div>
            </div>

            {/* Hero image – delay 750 ms */}
            <div className="relative hidden lg:block opacity-0 animate-fade-up delay-750">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                alt="Personal Trainer em Ação"
                className="rounded-3xl object-cover h-[600px] w-full border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* ── Serviços ── */}
        <section id="servicos" className="py-24 bg-brand-card border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white mb-4">
                  O que eu <span className="text-brand-blue">ofereço</span>
                </h2>
                <p className="text-zinc-400">Soluções completas para o seu objetivo fitness.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {SITE.services.map((svc, i) => (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="bg-brand-bg border border-zinc-800 rounded-3xl p-8 hover:border-brand-blue/50 transition-colors group h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-brand-blue">{svc.icon}</span>
                      <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-full px-3 py-1">
                        {svc.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sobre ── */}
        <section id="sobre" className="py-24 bg-brand-bg border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Sobre o Treinador Pedro"
                className="rounded-3xl shadow-2xl border border-zinc-800"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-4xl font-black text-white mb-6">
                  Muito mais que um <span className="text-brand-blue">Treino</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Sou especialista em mudança corporal e mentalidade fitness. Com anos de estudo e
                  prática, desenvolvi um método que não apenas transforma o seu físico, mas ensina você
                  a manter os resultados para o resto da vida.
                </p>
                <p className="text-sm text-zinc-500 mb-8">{SITE.cref}</p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Metodologia cientificamente comprovada',
                    'Foco na execução perfeita dos movimentos',
                    'Planejamento adaptado à sua rotina',
                    'Suporte motivacional diário',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                      <span className="text-brand-blue"><CheckCircle2 /></span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA}?text=Olá Pedro! Quero saber mais sobre o método.`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
                >
                  Fale comigo <ArrowRight />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ── Planos ── */}
        <Plans whatsapp={SITE.whatsapp} />


        <footer className="bg-brand-bg py-12 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              PEDRO<span className="text-brand-blue">.FIT</span>
            </div>
            <p className="text-zinc-500 text-sm text-center">
              © 2026 {SITE.name} · {SITE.title} · {SITE.cref}. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank" rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram />
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank" rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;
