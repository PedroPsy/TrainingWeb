import { useState } from 'react';

// Icons using standard SVG
const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const MessageCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const CheckCircle2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;
const ArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const Dumbbell = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.768 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.768a2 2 0 1 1 2.828 2.829z"/><path d="M2.515 5.343a2 2 0 1 1 2.828-2.829l1.768 1.767a2 2 0 1 1 2.829-2.828l-6.364 6.364a2 2 0 1 1-2.829-2.829l1.768-1.768a2 2 0 1 1-2.828-2.828z"/></svg>;

function App() {
  const WHATSAPP_NUMBER = "5511999999999";
  const INSTAGRAM_HANDLE = "SEU_USUARIO";

  return (
    <div className="min-h-screen bg-dark-900 font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter text-white">
            FIT<span className="text-brand-500">PRO</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma avaliação.`}
              target="_blank" rel="noreferrer"
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition-all flex items-center gap-2"
            >
              <MessageCircle /> Agendar Agora
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-500 text-sm font-semibold mb-6">
              <Dumbbell /> Transformação Garantida
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Esculpa sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">Melhor Versão</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Treinamento personalizado focado em resultados reais. Emagrecimento, hipertrofia e qualidade de vida com acompanhamento de excelência.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero transformar meu corpo.`}
                target="_blank" rel="noreferrer"
                className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
              >
                Começar Agora <ArrowRight />
              </a>
              <a 
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank" rel="noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Instagram /> @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Personal Trainer em Ação" 
              className="rounded-3xl object-cover h-[600px] w-full border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-24 bg-dark-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Sobre o Treinador" 
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black text-white mb-6">Muito mais que um <span className="text-brand-500">Treino</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sou especialista em mudança corporal e mentalidade fitness. Com anos de estudo e prática, desenvolvi um método que não apenas transforma o seu físico, mas ensina você a manter os resultados para o resto da vida.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Metodologia cientificamente comprovada",
                "Foco na execução perfeita dos movimentos",
                "Planejamento adaptado à sua rotina",
                "Suporte motivacional diário"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="text-brand-500"><CheckCircle2 /></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Escolha seu <span className="text-brand-500">Plano</span></h2>
            <p className="text-gray-400">Opções flexíveis para o seu momento e objetivo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-dark-950 border border-white/10 rounded-3xl p-8 hover:border-brand-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Consultoria Online</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">R$ 99</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> Treino via App</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> Suporte no WhatsApp</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> Ajuste Mensal</li>
              </ul>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero a Consultoria Online!`} className="block w-full text-center bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl transition-colors">Selecionar Plano</a>
            </div>

            {/* Card 2 - Highlight */}
            <div className="bg-gradient-to-b from-brand-600 to-brand-900 border border-brand-500 rounded-3xl p-8 transform md:-translate-y-4 shadow-2xl shadow-brand-500/20 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-600 text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full">
                Mais Escolhido
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personal Presencial</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">R$ 450</span>
                <span className="text-white/70">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white text-sm"><CheckCircle2 /> 3x por semana</li>
                <li className="flex items-center gap-3 text-white text-sm"><CheckCircle2 /> Acompanhamento lado a lado</li>
                <li className="flex items-center gap-3 text-white text-sm"><CheckCircle2 /> Avaliação Física</li>
                <li className="flex items-center gap-3 text-white text-sm"><CheckCircle2 /> Suporte 24/7</li>
              </ul>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero o Personal Presencial!`} className="block w-full text-center bg-white text-brand-600 hover:bg-gray-100 font-bold py-3 rounded-xl transition-colors">Selecionar Plano</a>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-950 border border-white/10 rounded-3xl p-8 hover:border-brand-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Plano Híbrido</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">R$ 250</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> 1x presencial por semana</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> Planilha para dias online</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 /> Metas quinzenais</li>
              </ul>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero o Plano Híbrido!`} className="block w-full text-center bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl transition-colors">Selecionar Plano</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter text-white">
            FIT<span className="text-brand-500">PRO</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 FitPro Personal Trainer. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-gray-400 hover:text-white transition-colors"><MessageCircle /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
