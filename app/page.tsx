'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  BarChart3, 
  DollarSign, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  ChevronDown, 
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  PawPrint,
  Stethoscope,
  Bath,
  Mail,
  Loader2
} from 'lucide-react';
import Image from 'next/image';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problemas', href: '#pain-points' },
    { name: 'Solução', href: '#solution' },
    { name: 'Recursos', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-1.5 rounded-lg">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">PetShop <span className="text-green-500">Pro</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-green-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Começar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-900/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-semibold mb-6">
            Lançamento: Gestão 2.0 para PetShops
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
            Transforme Seu PetShop em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Uma Máquina de Lucro
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            Organize agendamentos, controle clientes e aumente seus ganhos com nosso painel administrativo inteligente. Tudo em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Quero Organizar Agora <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 hover:bg-zinc-900 text-zinc-300 font-semibold text-lg transition-all"
            >
              Ver Demo
            </a>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 backdrop-blur-sm shadow-2xl">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden aspect-[16/9] relative">
              {/* Mockup Content */}
              <div className="absolute inset-0 p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="h-8 w-48 bg-zinc-900 rounded-lg" />
                </div>
                <div className="grid grid-cols-12 gap-6 flex-1">
                  <div className="col-span-3 flex flex-col gap-4">
                    <div className="h-10 bg-zinc-900 rounded-lg w-full" />
                    <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800" />
                    <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800" />
                  </div>
                  <div className="col-span-9 bg-zinc-900/30 rounded-xl border border-zinc-800 p-4">
                    <div className="flex justify-between mb-4">
                      <div className="h-6 w-32 bg-zinc-800 rounded" />
                      <div className="flex gap-2">
                        <div className="h-6 w-12 bg-zinc-800 rounded" />
                        <div className="h-6 w-12 bg-zinc-800 rounded" />
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 h-full">
                      {Array.from({ length: 28 }).map((_, i) => (
                        <div key={i} className="bg-zinc-900/50 rounded-lg border border-zinc-800/50 p-2 flex flex-col gap-1">
                          <div className="h-2 w-4 bg-zinc-800 rounded" />
                          {i % 5 === 0 && <div className="h-4 w-full bg-green-500/20 rounded border border-green-500/30" />}
                          {i % 7 === 2 && <div className="h-4 w-full bg-blue-500/20 rounded border border-blue-500/30" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    { icon: <Calendar className="w-8 h-8 text-red-500" />, title: "Agenda Desorganizada", desc: "Conflitos de horários causam atendimentos perdidos" },
    { icon: <Clock className="w-8 h-8 text-orange-500" />, title: "Tempo Perdido em Organização", desc: "Horas gastas em planilhas manuais e telefonemas" },
    { icon: <Users className="w-8 h-8 text-yellow-500" />, title: "Clientes Esquecidos", desc: "Perda de clientes por falta de lembretes" },
    { icon: <BarChart3 className="w-8 h-8 text-blue-500" />, title: "Sem Visão do Negócio", desc: "Impossível saber seu desempenho real" },
    { icon: <DollarSign className="w-8 h-8 text-green-500" />, title: "Receita Deixada Para Trás", desc: "Agendamentos perdidos = clientes perdidos = dinheiro perdido" },
  ];

  return (
    <section id="pain-points" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Você está perdendo dinheiro todos os dias</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Sem uma gestão adequada, seu negócio perde eficiência e lucro. Conheça os problemas que afligem donos de PetShop:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{point.icon}</div>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const benefits = [
    { icon: <Calendar className="w-12 h-12 text-green-500" />, title: "Calendário Inteligente", desc: "Agendamentos automáticos sem conflitos. Seus horários sempre otimizados." },
    { icon: <Zap className="w-12 h-12 text-green-500" />, title: "Automação Completa", desc: "Aprovações automáticas, lembretes de clientes e confirmações de horários" },
    { icon: <Users className="w-12 h-12 text-green-500" />, title: "Gestão de Clientes", desc: "Histórico completo, preferências e histórico de compras em um só lugar" },
  ];

  return (
    <section id="solution" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Solução que Você Precisa</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Sistema inteligente que resolve todos os seus problemas de uma vez</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/10 border border-green-500/20 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Calendar className="w-6 h-6" />, title: "Calendário Inteligente", desc: "Visualize todos os agendamentos de forma clara. Controle de disponibilidade em tempo real com notificações automáticas." },
    { icon: <Bath className="w-6 h-6" />, title: "Controle de Banhos", desc: "Organize banhos e tosas com precisão. Controle de horários, funcionários designados e status em tempo real." },
    { icon: <Stethoscope className="w-6 h-6" />, title: "Gestão de Consultas", desc: "Agende consultas veterinárias com facilidade. Histórico de atendimentos e medicações registradas." },
    { icon: <Users className="w-6 h-6" />, title: "Organização de Clientes", desc: "Base de dados completa de clientes e pets. Informações de contato, preferências e histórico de serviços." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Interface Moderna", desc: "Design intuitivo em modo escuro premium. Fácil de usar, rápido e responsivo em todos os dispositivos." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Relatórios em Tempo Real", desc: "Visualize seu faturamento, serviços mais solicitados e clientes mais frequentes com gráficos detalhados." },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "300%", label: "Aumento de Organização" },
    { value: "85%", label: "Menos Conflitos de Agenda" },
    { value: "95%", label: "Satisfação de Clientes" },
    { value: "+45%", label: "Aumento de Lucro" },
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-green-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardDemo = () => {
  const slots = [
    { time: "08:00", status: "free" },
    { time: "09:00", status: "booked", service: "Banho Completo", pet: "Max", confirmed: true },
    { time: "10:00", status: "booked", service: "Tosa Higiênica", pet: "Luna", confirmed: false },
    { time: "11:00", status: "free" },
    { time: "12:00", status: "booked", service: "Consulta Vet", pet: "Thor", confirmed: true },
    { time: "13:00", status: "free" },
    { time: "14:00", status: "booked", service: "Banho + Tosa", pet: "Bella", confirmed: true },
    { time: "15:00", status: "free" },
    { time: "16:00", status: "free" },
    { time: "17:00", status: "booked", service: "Vacinação", pet: "Mel", confirmed: false },
    { time: "18:00", status: "free" },
    { time: "19:00", status: "free" },
  ];

  return (
    <section id="demo" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Seu Painel de Controle</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Interface intuitiva para gerir tudo em tempo real</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-8 w-32 bg-zinc-800 rounded-lg flex items-center px-3 text-xs text-zinc-500">Hoje, 02 Mar</div>
              <div className="flex gap-1">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">‹</div>
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">›</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">Dia</div>
              <div className="px-3 py-1 rounded-full text-zinc-500 text-xs font-bold">Semana</div>
            </div>
          </div>
          
          <div className="divide-y divide-zinc-800">
            {slots.map((slot, i) => (
              <div key={i} className="flex items-center min-h-[60px] group hover:bg-zinc-800/30 transition-colors">
                <div className="w-20 px-4 text-sm font-mono text-zinc-500 border-r border-zinc-800 h-full flex items-center">
                  {slot.time}
                </div>
                <div className="flex-1 px-4 py-2">
                  {slot.status === 'booked' ? (
                    <div className={`p-2 rounded-lg border flex items-center justify-between ${slot.confirmed ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-zinc-200">{slot.service}</span>
                        <span className="text-xs text-zinc-400">— {slot.pet}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${slot.confirmed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                          {slot.confirmed ? '✓ Confirmado' : 'Pendente'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-zinc-700 italic group-hover:text-zinc-600 transition-colors">Livre</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedBenefits = () => {
  const benefits = [
    { icon: <Clock className="w-10 h-10" />, title: "Economia de Tempo", desc: "Economize 10+ horas semanais em organização manual. Automação completa de agendamentos e confirmações." },
    { icon: <PawPrint className="w-10 h-10" />, title: "Satisfação de Clientes", desc: "Lembretes automáticos, atendimento sem atrasos e histórico completo do pet sempre disponível." },
    { icon: <Zap className="w-10 h-10" />, title: "Crescimento Garantido", desc: "Com mais tempo livre e melhor organização, você pode expandir seu negócio e aumentar lucros." },
  ];

  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center"
            >
              <div className="text-green-500 mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntermediateCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Não Perca Mais Dinheiro Com Desorganização</h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">Donos de PetShop como você já economizaram milhares com nosso sistema</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-green-700 font-bold text-lg hover:bg-green-50 transition-all"
          >
            Começar 30 Dias Gratuitos
          </a>
          <a 
            href="#faq"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all"
          >
            Agendar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.message });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Erro ao enviar mensagem.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Tem alguma dúvida sobre como o PetShop Pro pode ajudar seu negócio? Nossa equipe está pronta para te atender.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">E-mail</div>
                  <div className="text-zinc-200">contato@petshoppro.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">WhatsApp Suporte</div>
                  <div className="text-zinc-200">+55 21 99310-7485</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Mensagem</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Enviar Mensagem'}
              </button>
            </form>
            {status && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
              >
                {status.text}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Como faço para começar?", a: "É muito simples! Clique em 'Começar Agora', crie sua conta com seu email ou telefone, receba um link mágico para acessar, e pronto! Você já pode começar a organizar seus agendamentos." },
    { q: "Qual é o período de testes?", a: "Oferecemos 30 dias completamente grátis, com acesso a todas as funcionalidades. Sem necessidade de cartão de crédito. Após esse período, você escolhe o plano que melhor se adequa ao seu PetShop." },
    { q: "Posso usar em mobile?", a: "Sim! Nosso sistema é totalmente responsivo. Você acessa de qualquer dispositivo: smartphone, tablet ou computador. Mesmo design moderno e funcional em qualquer tela." },
    { q: "E se eu tiver muitos clientes?", a: "Nosso sistema foi construído para crescer com você! Não importa se você tem 10 clientes ou 10 mil. O sistema escala perfeitamente e continua rápido e responsivo." },
    { q: "Meus dados estão seguros?", a: "100% seguro! Usamos criptografia de ponta a ponta, servidores em data centers certificados e backups automáticos diários. Seus dados são sua propriedade." },
    { q: "Tem integração com outras plataformas?", a: "Sim! Integramos com as principais plataformas de pagamento, redes sociais para publicação automática e sistemas de WhatsApp para lembretes." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-zinc-400">Tudo o que você precisa saber para começar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-zinc-200">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-950 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Transforme Seu PetShop <br /> Hoje Mesmo
          </h2>
          <p className="text-green-100 text-xl mb-12 max-w-2xl mx-auto">
            Seu concorrente pode estar implementando esse sistema neste exato momento. Não fique para trás.
          </p>
          <a 
            href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 rounded-full bg-white text-green-800 font-black text-2xl shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all mb-8"
          >
            Quero Organizar Meu PetShop Agora
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-green-200/60 text-sm font-medium">
            <span>✓ 30 dias grátis</span>
            <span>✓ Sem cartão necessário</span>
            <span>✓ Suporte completo</span>
            <span>✓ Cancelamento a qualquer momento</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">PetShop <span className="text-green-500">Pro</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              PetShop Pro - A solução inteligente para gestão de PetShops. Organização, eficiência e lucro.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#features" className="hover:text-green-500 transition-colors">Recursos</a></li>
              <li><a href="#solution" className="hover:text-green-500 transition-colors">Benefícios</a></li>
              <li><a href="#demo" className="hover:text-green-500 transition-colors">Dashboard</a></li>
              <li><a href="#faq" className="hover:text-green-500 transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-green-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">LGPD</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs">
          <p>© 2024 PetShop Pro. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="min-h-screen selection:bg-green-500/30 selection:text-green-200">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <Stats />
      <DashboardDemo />
      <DetailedBenefits />
      <IntermediateCTA />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5521993107485?text=Olá! Gostaria de começar com o PetShop Pro"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center hover:bg-green-400 transition-colors"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>
    </main>
  );
}
